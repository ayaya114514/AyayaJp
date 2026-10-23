const STORAGE_KEY = "ayaya-jp-srs-v1";
const ROUND_STATE_KEY = "__rounds";
const RETIRED_SIDEBAR_STATE_KEY = "ayaya-jp-sidebar-v1";
const SIDEBAR_HISTORY_STATE_KEY = "__ayayaJpSidebarOpen";
const STORE_META_KEY = "__meta";
const STORE_SCHEMA_VERSION = 4;
const ROUND_QUEUE_ORDER_VERSION = 1;
const VALID_RATINGS = new Set(["clear", "unsure", "forgot", "correct", "wrong"]);
// A card's latest rating decides its pool: 模糊 (unsure) or 不认识 (forgot, wrong);
// any other rating keeps it in the main pool.
const FUZZY_RATINGS = new Set(["unsure"]);
const UNKNOWN_RATINGS = new Set(["forgot", "wrong"]);
const POOL_KINDS = ["main", "fuzzy", "unknown"];
const POOL_SUFFIXES = { fuzzy: "-fuzzy", unknown: "-unknown" };
const POOL_NAMES = { main: "当前", fuzzy: "模糊", unknown: "不认识" };
const LEGACY_MISTAKE_DECKS = {
  "vocab-mistakes": "vocab-ja-zh-unknown",
  "vocab-n4-mistakes": "vocab-n4-ja-zh-unknown",
  "grammar-n5-mistakes": "grammar-n5-zh-ja-unknown",
  "grammar-n4-mistakes": "grammar-n4-zh-ja-unknown",
};

// Kana cards come from kana-cards.js, loaded with this file, so the first card
// shows at once. The study data (audio clips, vocabulary, grammar, readings and
// card-data.js) is most of the download: it loads afterwards from the
// #studyDataScripts template, and decks that need it wait until it is in. A
// page without the template (the contract-test harness) already has its data.
let cardData = window.AYAYA_JP_CARD_DATA || null;
const studyDataTemplate = document.querySelector("#studyDataScripts");
let studyDataState = cardData || !studyDataTemplate?.content ? "ready" : "loading";

function kanaCardsApi() {
  return cardData?.makeKanaCards ? cardData : window.AYAYA_KANA_CARDS || null;
}

function hasEntries(data) {
  return Array.isArray(data?.entries) && data.entries.length > 0;
}

function familyDataSource(family) {
  if (family === "vocab-n5") return window.AYAYA_N5_CODEX_VOCAB;
  if (family === "vocab-n4") return window.AYAYA_N4_CODEX_VOCAB;
  if (family === "vocab-n3") return window.AYAYA_N3_CODEX_VOCAB;
  if (family?.startsWith("grammar-")) return window.AYAYA_GRAMMAR_DATA;
  return null;
}

// Still downloading: the deck waits instead of reading as empty or broken.
function isFamilyDataPending(family) {
  return Boolean(family) && family !== "kana" && studyDataState === "loading";
}

function isFamilyDataMissing(family) {
  if (family === "kana") return !kanaCardsApi();
  if (isFamilyDataPending(family)) return false;
  if (!family) return studyDataState !== "loading" && !cardData;
  return !cardData || !hasEntries(familyDataSource(family));
}

const cardFamilyCache = new Map();
// Pre-rendered VOICEVOX clips (audio-manifest.js, the first study-data file);
// texts without one, or spoken before it arrives, use speechSynthesis.
let audioClips = null;

function availableAudioClips() {
  if (
    !audioClips &&
    typeof window.AYAYA_AUDIO?.keys === "string" &&
    typeof window.AYAYA_AUDIO.directory === "string"
  ) {
    audioClips = {
      directory: window.AYAYA_AUDIO.directory,
      keys: new Set(window.AYAYA_AUDIO.keys.split(" ").filter(Boolean)),
    };
  }
  return audioClips;
}

// Every tab deck has a main pool (the tab's own id), a 模糊 pool and a 不认识
// pool (id + suffix). The two review pools only hold cards rated into them.
function poolKindOf(deck) {
  return POOL_KINDS.find((kind) => kind !== "main" && deck.endsWith(POOL_SUFFIXES[kind])) || "main";
}

function isReviewPool(deck) {
  return poolKindOf(deck) !== "main";
}

function baseDeckOf(deck) {
  const kind = poolKindOf(deck);
  return kind === "main" ? deck : deck.slice(0, -POOL_SUFFIXES[kind].length);
}

function poolOf(deck, kind) {
  const base = baseDeckOf(deck);
  return kind === "main" ? base : `${base}${POOL_SUFFIXES[kind]}`;
}

function otherPoolsOf(deck) {
  return POOL_KINDS.map((kind) => poolOf(deck, kind)).filter((pool) => pool !== deck);
}

function cardFamilyForDeck(deck) {
  deck = baseDeckOf(deck).split(BLOCK_SEPARATOR)[0];
  if (["hiragana", "katakana", "romaji", "special"].includes(deck)) return "kana";
  if (["vocab-ja-zh", "vocab-zh-ja"].includes(deck)) return "vocab-n5";
  if (["vocab-n4-ja-zh", "vocab-n4-zh-ja"].includes(deck)) return "vocab-n4";
  if (["vocab-n3-ja-zh", "vocab-n3-zh-ja"].includes(deck)) return "vocab-n3";
  if (deck.startsWith("grammar-n5-")) return "grammar-n5";
  if (deck.startsWith("grammar-n4-")) return "grammar-n4";
  if (deck.startsWith("grammar-n3-")) return "grammar-n3";
  return null;
}

function buildCardFamily(family) {
  if (family === "kana") return kanaCardsApi()?.makeKanaCards() || [];
  if (!cardData) return [];
  if (family === "vocab-n5") return cardData.makeVocabCards("N5");
  if (family === "vocab-n4") return cardData.makeVocabCards("N4");
  if (family === "vocab-n3") return cardData.makeVocabCards("N3");
  if (family === "grammar-n5") return cardData.makeGrammarCards("N5");
  if (family === "grammar-n4") return cardData.makeGrammarCards("N4");
  if (family === "grammar-n3") return cardData.makeGrammarCards("N3");
  return [];
}

function getFamilyCards(deck) {
  const family = cardFamilyForDeck(deck);
  if (!family || isFamilyDataPending(family)) return [];
  if (!cardFamilyCache.has(family)) {
    const familyCards = buildCardFamily(family);
    cardFamilyCache.set(family, familyCards);
    migrateLegacyCardState(familyCards);
  }
  return cardFamilyCache.get(family);
}

// Vocab and grammar decks are split into 小块 picked on the module page. A block
// is a deck of its own (`vocab-ja-zh@3`, `grammar-n5-choice@n5-case`) with its own
// round, restart and 模糊 / 不认识 pools, so finishing or restarting one block
// never touches another; the tab's own deck is the 全部 block. Vocabulary blocks
// hold about 25 words each, dealt in a fixed shuffled order that both directions
// share (第3块 asks the same words either way); grammar blocks are the level's
// groups (条件, 推测…), which keep confusable patterns together.
const BLOCK_SEPARATOR = "@";
const VOCAB_BLOCK_SIZE = 25;
// Before blocks, a grammar level was narrowed to one group from a picker.
const RETIRED_GRAMMAR_GROUP_STATE_KEY = "ayaya-jp-grammar-group-v1";
const vocabBlockCache = new Map();

function tabDeckOf(deck) {
  return baseDeckOf(deck).split(BLOCK_SEPARATOR)[0];
}

function blockOf(deck) {
  const base = baseDeckOf(deck);
  const index = base.indexOf(BLOCK_SEPARATOR);
  return index < 0 ? "" : base.slice(index + 1);
}

function blockDeckOf(tabDeck, block) {
  return block ? `${tabDeck}${BLOCK_SEPARATOR}${block}` : tabDeck;
}

function hasBlocks(deck) {
  const family = cardFamilyForDeck(deck);
  return Boolean(family) && family !== "kana";
}

// Stored block decks are kept while the study data downloads, so a block is
// checked by its shape: a number for vocab, its level's group id for grammar.
function isBlockIdFor(deck, block) {
  const family = cardFamilyForDeck(deck) || "";
  if (family.startsWith("vocab-")) return /^[1-9]\d{0,2}$/u.test(block);
  if (family.startsWith("grammar-")) {
    return /^n[345]-[a-z]+$/u.test(block) && block.startsWith(family.slice("grammar-".length));
  }
  return false;
}

// FNV-1a with a murmur3 finish, so neighbouring source ids land far apart.
function stableHash(text) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash = Math.imul(hash ^ text.charCodeAt(index), 0x01000193);
  }
  hash = Math.imul(hash ^ (hash >>> 16), 0x85ebca6b);
  hash = Math.imul(hash ^ (hash >>> 13), 0xc2b2ae35);
  return (hash ^ (hash >>> 16)) >>> 0;
}

function vocabSourceOf(card) {
  return card.sourceId || card.id;
}

// Words added later must not reshuffle the blocks people are working through,
// so each level's words are dealt in generations: the source numbers up to each
// listed one form a generation of their own, and its blocks follow those of the
// generation before. Words past the last listed number form the newest
// generation; list its last number once it ships, before adding more words.
const VOCAB_BLOCK_GENERATIONS = {
  "vocab-n5": [748],
  "vocab-n4": [785],
  "vocab-n3": [1538],
};

function vocabGenerationOf(family, sourceId) {
  const number = Number.parseInt(String(sourceId).split("-").at(-1), 10);
  const limits = VOCAB_BLOCK_GENERATIONS[family] || [];
  const index = limits.findIndex((limit) => !(number > limit));
  return index < 0 ? limits.length : index;
}

// Source id → block number for a vocab level; within a generation blocks differ
// in size by at most one.
function vocabBlockMap(deck) {
  const family = cardFamilyForDeck(deck);
  if (vocabBlockCache.has(family)) return vocabBlockCache.get(family);
  const blocks = new Map();
  const familyCards = getFamilyCards(deck);
  if (!familyCards.length) return blocks;
  const generations = new Map();
  [...new Set(familyCards.map(vocabSourceOf))].forEach((sourceId) => {
    const generation = vocabGenerationOf(family, sourceId);
    if (!generations.has(generation)) generations.set(generation, []);
    generations.get(generation).push(sourceId);
  });
  let offset = 0;
  [...generations.keys()].sort((left, right) => left - right).forEach((generation) => {
    const sourceIds = generations.get(generation)
      .map((sourceId) => [stableHash(sourceId), sourceId])
      .sort(([leftHash, left], [rightHash, right]) =>
        leftHash - rightHash || (left < right ? -1 : left > right ? 1 : 0),
      )
      .map(([, sourceId]) => sourceId);
    const count = Math.max(1, Math.floor(sourceIds.length / VOCAB_BLOCK_SIZE));
    sourceIds.forEach((sourceId, index) => {
      blocks.set(sourceId, String(offset + Math.floor((index * count) / sourceIds.length) + 1));
    });
    offset += count;
  });
  vocabBlockCache.set(family, blocks);
  return blocks;
}

function cardBlockOf(card) {
  if (card.isGrammar) return card.grammarGroup || "";
  return vocabBlockMap(card.deck).get(vocabSourceOf(card)) || "";
}

function grammarGroupsFor(deck) {
  const level = (cardFamilyForDeck(deck) || "").slice("grammar-".length).toUpperCase();
  return (Array.isArray(cardData?.grammarGroups) ? cardData.grammarGroups : []).filter(
    (group) => group.level === level,
  );
}

// The deck's blocks in module-page order; none until the study data is in.
function deckBlocks(deck) {
  const family = cardFamilyForDeck(deck) || "";
  if (family.startsWith("grammar-")) {
    return grammarGroupsFor(deck).map((group) => ({ id: group.id, label: group.label }));
  }
  if (!family.startsWith("vocab-")) return [];
  const count = new Set(vocabBlockMap(deck).values()).size;
  return Array.from({ length: count }, (_, index) => ({
    id: String(index + 1),
    label: String(index + 1),
  }));
}

function blockLabelOf(deck) {
  const block = blockOf(deck);
  if (!block) return "";
  return grammarGroupsFor(deck).find((group) => group.id === block)?.label || `第${block}块`;
}

const elements = {
  answerMain: document.querySelector("#answerMain"),
  answerMeta: document.querySelector("#answerMeta"),
  answerPanel: document.querySelector("#answerPanel"),
  appStatus: document.querySelector("#appStatus"),
  cardReveal: document.querySelector("#cardReveal"),
  cardType: document.querySelector("#cardType"),
  cardPrompt: document.querySelector("#cardPrompt"),
  cardPattern: document.querySelector("#cardPattern"),
  cardSubtle: document.querySelector("#cardSubtle"),
  choiceBlock: document.querySelector("#choiceBlock"),
  choiceFeedback: document.querySelector("#choiceFeedback"),
  choiceHint: document.querySelector("#choiceHint"),
  choiceHintBody: document.querySelector("#choiceHintBody"),
  choiceHintToggle: document.querySelector("#choiceHintToggle"),
  choiceList: document.querySelector("#choiceList"),
  choiceNext: document.querySelector("#choiceNext"),
  currentCount: document.querySelector("#currentCount"),
  currentPoolTab: document.querySelector("#currentPoolTab"),
  fuzzyCount: document.querySelector("#fuzzyCount"),
  fuzzyPoolTab: document.querySelector("#fuzzyPoolTab"),
  dueCount: document.querySelector("#dueCount"),
  emptyState: document.querySelector("#emptyState"),
  exampleBlock: document.querySelector("#exampleBlock"),
  examplesList: document.querySelector("#examplesList"),
  fatalErrorBanner: document.querySelector("#fatalErrorBanner"),
  flashcard: document.querySelector("#flashcard"),
  closeDeckMenu: document.querySelector("#closeDeckMenu"),
  deckMenuButton: document.querySelector("#deckMenuButton"),
  deckSidebar: document.querySelector("#deckSidebar"),
  loadErrorBanner: document.querySelector("#loadErrorBanner"),
  metaBlock: document.querySelector("#metaBlock"),
  moduleTitle: document.querySelector("#moduleTitle"),
  roundStatusText: document.querySelector("#roundStatusText"),
  revealHint: document.querySelector("#revealHint"),
  reviewedCount: document.querySelector("#reviewedCount"),
  speechStatus: document.querySelector("#speechStatus"),
  speakWord: document.querySelector("#speakWord"),
  studyAnyWay: document.querySelector("#studyAnyWay"),
  studyArea: document.querySelector(".study-area"),
  studyCard: document.querySelector("#studyCard"),
  tabs: document.querySelectorAll(".tab-button"),
  undoRating: document.querySelector("#undoRating"),
  poolToggle: document.querySelector("#poolToggle"),
  unknownCount: document.querySelector("#unknownCount"),
  poolToggleLabel: document.querySelector("#poolToggleLabel"),
  feedbackRow: document.querySelector(".feedback-row"),
  feedbackButtons: document.querySelectorAll(".feedback"),
};

const undoButtonHome = elements.undoRating?.parentElement || null;
const storeWriterId =
  window.crypto?.randomUUID?.() ||
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
let storeWriterSequence = 0;
let storeWriteSequence = 0;
let persistenceError = null;
let storeNeedsCompaction = false;
let store = loadStore();
let lastSyncedStore = cloneStore(store);
const seenWriterRevisions = new Map();
recordStoreRevision(store);
let activeDeck = "hiragana";
let currentCard = null;
let isRevealed = false;
let reviewQueue = [];
let currentChoiceOptions = [];
let selectedChoiceId = null;
// A fill-in answered after opening its 提示 counts as 模糊, not 认识.
let choiceHintShown = false;
let speechGeneration = 0;
let speechStartTimer = null;
let speechBlockedUntil = 0;
let activeSpeechUtterance = null;
let clipPlayer = null;
let activeClip = null;
let sidebarReturnFocus = null;
let sidebarHistoryClosing = false;
const sessionQueues = {};
const sessionCompleted = {};
const sessionCompletionEvents = {};
const sessionReopenedCards = {};
const sessionRoundCompletionEvents = {};
const sessionRoundGenerations = {};
const sessionRoundIds = {};
const sessionRoundCounts = {};
const sessionQueueOrderVersions = {};
let lastReview = null;

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      persistenceError = "已忽略格式无效的旧学习进度。";
      return {};
    }
    const compacted = compactStoreForPersistence(parsed);
    storeNeedsCompaction =
      !valuesEqual(compacted, parsed) ||
      compacted[STORE_META_KEY]?.schemaVersion !== STORE_SCHEMA_VERSION;
    return compacted;
  } catch (error) {
    persistenceError = `浏览器无法读取学习进度，本次将使用临时内存模式（${error.name || "storage error"}）。`;
    return {};
  }
}

// A copy with JSON semantics (undefined and functions dropped, non-finite
// numbers as null) without a stringify/parse round trip; the store is plain
// JSON data, and merges copy thousands of card states per write.
function jsonCopy(value) {
  if (Array.isArray(value)) {
    return value.map((item) =>
      item === undefined || typeof item === "function" ? null : jsonCopy(item),
    );
  }
  if (value && typeof value === "object") {
    const copy = {};
    Object.keys(value).forEach((key) => {
      const item = value[key];
      if (item !== undefined && typeof item !== "function") copy[key] = jsonCopy(item);
    });
    return copy;
  }
  return typeof value === "number" && !Number.isFinite(value) ? null : value;
}

function cloneStore(value) {
  if (value === undefined) return undefined;
  try {
    return jsonCopy(value || {});
  } catch {
    return {};
  }
}

function isStoreObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isCardState(value) {
  return Boolean(
    isStoreObject(value) &&
      (isStoreObject(value.lastEvent) ||
        Array.isArray(value.ratingHistory) ||
        Number.isInteger(value.reviews) ||
        VALID_RATINGS.has(value.lastRating)),
  );
}

function isJsonAbsent(value) {
  return value === undefined || typeof value === "function";
}

function jsonScalar(value) {
  return typeof value === "number" && !Number.isFinite(value) ? null : value;
}

// Equal once both are serialized with sorted keys, compared in place: merges
// run this for every card state on every write.
function valuesEqual(left, right) {
  if (left === right) return true;
  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) {
      return false;
    }
    return left.every((item, index) => {
      const other = right[index];
      return valuesEqual(isJsonAbsent(item) ? null : item, isJsonAbsent(other) ? null : other);
    });
  }
  if (isStoreObject(left) && isStoreObject(right)) {
    const leftKeys = Object.keys(left).filter((key) => !isJsonAbsent(left[key]));
    const rightCount = Object.keys(right).filter((key) => !isJsonAbsent(right[key])).length;
    return (
      leftKeys.length === rightCount &&
      leftKeys.every((key) => !isJsonAbsent(right[key]) && valuesEqual(left[key], right[key]))
    );
  }
  if (isStoreObject(left) || isStoreObject(right)) return false;
  if (isJsonAbsent(left) || isJsonAbsent(right)) return isJsonAbsent(left) && isJsonAbsent(right);
  return jsonScalar(left) === jsonScalar(right);
}

function storeRevision(value) {
  return Number.isInteger(value?.[STORE_META_KEY]?.revision)
    ? Math.max(0, value[STORE_META_KEY].revision)
    : 0;
}

function recordStoreRevision(value) {
  const meta = value?.[STORE_META_KEY];
  if (!meta?.writerId || !Number.isInteger(meta.revision)) return;
  seenWriterRevisions.set(
    meta.writerId,
    Math.max(seenWriterRevisions.get(meta.writerId) || 0, meta.revision),
  );
}

function isClearlyStaleStore(value) {
  const meta = value?.[STORE_META_KEY];
  if (!meta?.writerId || !Number.isInteger(meta.revision)) return false;
  const seenRevision = seenWriterRevisions.get(meta.writerId);
  return Number.isInteger(seenRevision) && meta.revision <= seenRevision;
}

function storesSemanticallyEqual(left, right) {
  const withoutMeta = (value) => {
    const content = { ...(isStoreObject(value) ? value : {}) };
    delete content[STORE_META_KEY];
    return content;
  };
  return valuesEqual(withoutMeta(left), withoutMeta(right));
}

// The last stored text and its parsed store: when storage still holds what this
// tab wrote or last read, it is not parsed again. Callers never mutate the
// returned store; it may be shared with lastSyncedStore.
let persistedStoreCache = { raw: null, value: null };

function rememberPersistedStore(raw, value) {
  persistedStoreCache = { raw, value };
}

function readPersistedStoreForMerge() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    if (raw === persistedStoreCache.raw) return persistedStoreCache.value;
    const parsed = JSON.parse(raw);
    const value = isStoreObject(parsed) ? compactStoreForPersistence(parsed) : {};
    rememberPersistedStore(raw, value);
    return value;
  } catch {
    return cloneStore(lastSyncedStore);
  }
}

function ratingEventKey(item) {
  if (!item) return "";
  if (item?.eventId) return `event:${item.eventId}`;
  return `${item?.at || ""}:${item?.rating || ""}:${item?.choiceId || ""}`;
}

function reviewCount(state) {
  return Number.isInteger(state?.reviews) ? Math.max(0, state.reviews) : 0;
}

function legacyLastEvent(state) {
  if (!isStoreObject(state)) return null;
  if (isStoreObject(state.lastEvent) && VALID_RATINGS.has(state.lastEvent.rating)) {
    return cloneStore(state.lastEvent);
  }

  const tombstones = new Set(
    (Array.isArray(state.ratingTombstones) ? state.ratingTombstones : []).filter(
      (eventId) => typeof eventId === "string" && eventId,
    ),
  );
  const history = (Array.isArray(state.ratingHistory) ? state.ratingHistory : [])
    .filter((item) => item && VALID_RATINGS.has(item.rating))
    .filter((item) => !item.eventId || !tombstones.has(item.eventId))
    .sort(
      (left, right) =>
        (left.at || 0) - (right.at || 0) ||
        ratingEventKey(left).localeCompare(ratingEventKey(right)),
    );
  if (history.length) return cloneStore(history.at(-1));
  if (!Array.isArray(state.ratingHistory) && VALID_RATINGS.has(state.lastRating)) {
    return {
      at: state.lastRatedAt || null,
      rating: state.lastRating,
    };
  }
  return null;
}

function compactCardState(value) {
  if (!isCardState(value)) return null;
  const lastEvent = legacyLastEvent(value);
  const lastRating = VALID_RATINGS.has(value.lastRating)
    ? value.lastRating
    : lastEvent?.rating || null;
  const lastRatedAt = Number.isFinite(value.lastRatedAt)
    ? value.lastRatedAt
    : Number.isFinite(lastEvent?.at)
      ? lastEvent.at
      : null;
  const compacted = {
    lastChoiceCorrectIndex: Number.isInteger(value.lastChoiceCorrectIndex)
      ? value.lastChoiceCorrectIndex
      : Number.isInteger(lastEvent?.correctChoiceIndex)
        ? lastEvent.correctChoiceIndex
        : null,
    lastEvent,
    lastRatedAt,
    lastRating,
    reviews: Number.isInteger(value.reviews)
      ? Math.max(0, value.reviews)
      : Array.isArray(value.ratingHistory)
        ? value.ratingHistory.length
        : lastRating
          ? 1
          : 0,
  };
  if (typeof value.undoneEventId === "string" && value.undoneEventId) {
    compacted.undoneEventId = value.undoneEventId;
  }
  return compacted.reviews > 0 ||
    compacted.lastRating ||
    compacted.lastEvent ||
    compacted.undoneEventId
    ? compacted
    : null;
}

function compactStoreForPersistence(value) {
  if (!isStoreObject(value)) return {};
  const compacted = {};
  Object.entries(value).forEach(([key, item]) => {
    if (key === STORE_META_KEY || key === ROUND_STATE_KEY) {
      compacted[key] = cloneStore(item);
      return;
    }
    const cardState = compactCardState(item);
    if (cardState) compacted[key] = cardState;
  });
  return compacted;
}

// Undo keeps the review it retracted as undoneEventId, so a tab that has already
// merged that review drops it instead of writing it back: a state whose latest
// review the other state undid never counts as the latest.
function undoesLatestReview(state, otherState) {
  return Boolean(
    otherState?.undoneEventId && state?.lastEvent?.eventId === otherState.undoneEventId,
  );
}

function latestCardState(localState, remoteState) {
  const local = compactCardState(localState);
  const remote = compactCardState(remoteState);
  const candidates = [
    undoesLatestReview(local, remote) ? null : local,
    undoesLatestReview(remote, local) ? null : remote,
  ].filter(Boolean);
  if (!candidates.length) return defaultState();
  return candidates.sort(
    (left, right) =>
      (left.lastRatedAt || 0) - (right.lastRatedAt || 0) ||
      ratingEventKey(left.lastEvent).localeCompare(ratingEventKey(right.lastEvent)),
  ).at(-1);
}

function mergeConcurrentCardState(baseState, localState, remoteState) {
  if (!isStoreObject(localState)) return compactCardState(remoteState);
  if (!isStoreObject(remoteState)) return compactCardState(localState);

  const base = compactCardState(baseState) || defaultState();
  const local = compactCardState(localState) || defaultState();
  const remote = compactCardState(remoteState) || defaultState();
  const localEventKey = ratingEventKey(local.lastEvent);
  const remoteEventKey = ratingEventKey(remote.lastEvent);
  const baseEventKey = ratingEventKey(base.lastEvent);
  // A review added since the base that the other side has undone is not counted.
  const localDelta =
    reviewCount(local) -
    reviewCount(base) -
    (undoesLatestReview(local, remote) && localEventKey !== baseEventKey ? 1 : 0);
  const remoteDelta =
    reviewCount(remote) -
    reviewCount(base) -
    (undoesLatestReview(remote, local) && remoteEventKey !== baseEventKey ? 1 : 0);
  const duplicatedNewEvent =
    localEventKey &&
    localEventKey === remoteEventKey &&
    localEventKey !== baseEventKey &&
    localDelta > 0 &&
    remoteDelta > 0;
  const divergentSameCountBranch =
    localEventKey &&
    remoteEventKey &&
    localEventKey !== remoteEventKey &&
    reviewCount(local) === reviewCount(remote) &&
    reviewCount(local) === reviewCount(base) &&
    (localEventKey === baseEventKey || remoteEventKey === baseEventKey);
  const latest = latestCardState(local, remote);
  const undoneEventId = latest.undoneEventId || local.undoneEventId || remote.undoneEventId;

  return {
    ...latest,
    ...(undoneEventId ? { undoneEventId } : {}),
    reviews: Math.max(
      0,
      reviewCount(base) +
        localDelta +
        remoteDelta -
        (duplicatedNewEvent ? 1 : 0) +
        (divergentSameCountBranch ? 1 : 0),
    ),
  };
}

function normalizedCompletionEventIds(value) {
  const eventIds = Array.isArray(value) ? value : value ? [value] : [];
  return [...new Set(eventIds.filter((eventId) => typeof eventId === "string" && eventId))].sort();
}

function queueOrderVersionForState(round) {
  return Number.isInteger(round?.queueOrderVersion)
    ? Math.max(0, round.queueOrderVersion)
    : 0;
}

function pendingQueueForRound(round, completed) {
  return [...new Set(Array.isArray(round?.queue) ? round.queue : [])].filter(
    (cardId) => !completed.has(cardId),
  );
}

function mergePendingQueueOrder(baseRound, localRound, remoteRound, completed) {
  const candidates = [
    { kind: "base", round: baseRound },
    { kind: "branch", round: localRound },
    { kind: "branch", round: remoteRound },
  ].map((candidate) => ({
    ...candidate,
    order: pendingQueueForRound(candidate.round, completed),
    version: queueOrderVersionForState(candidate.round),
  }));
  const queueOrderVersion = Math.max(...candidates.map((candidate) => candidate.version));
  const currentCandidates = candidates.filter(
    (candidate) => candidate.version === queueOrderVersion && candidate.order.length > 0,
  );
  const baseCandidate = currentCandidates.find((candidate) => candidate.kind === "base");
  const branchCandidates = currentCandidates
    .filter((candidate) => candidate !== baseCandidate)
    .sort((left, right) => {
      const leftKey = JSON.stringify(left.order);
      const rightKey = JSON.stringify(right.order);
      if (leftKey === rightKey) return 0;
      return leftKey < rightKey ? -1 : 1;
    });
  const orderedCandidates = baseCandidate
    ? [baseCandidate, ...branchCandidates]
    : branchCandidates;
  const queue = [];
  const seen = new Set();

  orderedCandidates.forEach(({ order }) => {
    order.forEach((cardId) => {
      if (seen.has(cardId)) return;
      seen.add(cardId);
      queue.push(cardId);
    });
  });

  return { queue, queueOrderVersion };
}

function roundGenerationForState(round) {
  if (Number.isInteger(round?.roundGeneration)) return Math.max(0, round.roundGeneration);
  const completedRounds = Number.isInteger(round?.rounds) ? Math.max(0, round.rounds) : 0;
  const isCompletedLegacyRound =
    Array.isArray(round?.queue) &&
    round.queue.length === 0 &&
    Array.isArray(round?.completed) &&
    round.completed.length > 0;
  return isCompletedLegacyRound ? Math.max(0, completedRounds - 1) : completedRounds;
}

function roundIdForState(round, deck) {
  return `round:${deck}:${roundGenerationForState(round)}`;
}

function compareRoundEpochs(left, right, deck) {
  return roundGenerationForState(left) - roundGenerationForState(right);
}

function ensureSessionRoundEpoch(deck) {
  if (!Number.isInteger(sessionRoundGenerations[deck])) {
    sessionRoundGenerations[deck] = getRoundCount(deck);
  }
  sessionRoundIds[deck] = roundIdForState(
    { roundGeneration: sessionRoundGenerations[deck] },
    deck,
  );
}

function advanceSessionRoundEpoch(deck) {
  ensureSessionRoundEpoch(deck);
  sessionRoundGenerations[deck] += 1;
  sessionRoundIds[deck] = roundIdForState(
    { roundGeneration: sessionRoundGenerations[deck] },
    deck,
  );
}

function normalizedReopenedCards(round) {
  return new Set(
    (Array.isArray(round?.reopened) ? round.reopened : []).filter(
      (cardId) => typeof cardId === "string" && cardId,
    ),
  );
}

function normalizeDeckRound(round, cardStates, deck = "") {
  if (!isStoreObject(round)) return cloneStore(round);
  const completed = new Set(Array.isArray(round.completed) ? round.completed : []);
  const queue = Array.isArray(round.queue) ? [...new Set(round.queue)] : [];
  const reopened = normalizedReopenedCards(round);
  const completionEvents = isStoreObject(round.completionEvents)
    ? { ...round.completionEvents }
    : {};

  Object.entries(completionEvents).forEach(([cardId, value]) => {
    if (!completed.has(cardId)) {
      delete completionEvents[cardId];
      return;
    }
    completionEvents[cardId] = normalizedCompletionEventIds(value);
  });

  const roundCompletionEvents = normalizedCompletionEventIds(round.roundCompletionEvents);
  reopened.forEach((cardId) => {
    const latestEventId = cardStates?.[cardId]?.lastEvent?.eventId;
    const completionIds = normalizedCompletionEventIds(completionEvents[cardId]);
    if (latestEventId && completionIds.includes(latestEventId)) {
      reopened.delete(cardId);
      return;
    }
    completed.delete(cardId);
    delete completionEvents[cardId];
    if (!queue.includes(cardId)) queue.push(cardId);
  });
  const reopenedCompletedRound = queue.length > 0 && roundCompletionEvents.length > 0;

  return {
    ...cloneStore(round),
    queueOrderVersion: queueOrderVersionForState(round),
    roundGeneration: roundGenerationForState(round),
    roundId: roundIdForState(round, deck),
    queue: queue.filter((cardId) => !completed.has(cardId)),
    completed: [...completed],
    completionEvents,
    reopened: [...reopened].sort(),
    roundCompletionEvents: reopenedCompletedRound ? [] : roundCompletionEvents,
    rounds: reopenedCompletedRound
      ? Math.max(0, (Number.isInteger(round.rounds) ? round.rounds : 0) - 1)
      : Number.isInteger(round.rounds)
        ? Math.max(0, round.rounds)
        : 0,
  };
}

function mergeCompletionEvents(completed, localRound, remoteRound, cardStates) {
  const localEvents = isStoreObject(localRound?.completionEvents)
    ? localRound.completionEvents
    : {};
  const remoteEvents = isStoreObject(remoteRound?.completionEvents)
    ? remoteRound.completionEvents
    : {};
  const completionEvents = {};

  completed.forEach((cardId) => {
    const candidates = mergedCompletionEventIds(localEvents, remoteEvents, cardId);
    if (!candidates.length) return;
    completionEvents[cardId] = candidates;
  });
  return completionEvents;
}

function mergedCompletionEventIds(localEvents, remoteEvents, cardId) {
  return [
    ...new Set([
      ...normalizedCompletionEventIds(remoteEvents?.[cardId]),
      ...normalizedCompletionEventIds(localEvents?.[cardId]),
    ]),
  ].sort();
}

function mergeConcurrentDeckRound(
  deck,
  baseRound,
  localRound,
  remoteRound,
  cardStates,
) {
  if (!isStoreObject(localRound)) return cloneStore(remoteRound);
  if (!isStoreObject(remoteRound)) return cloneStore(localRound);

  const completedCandidates = new Set([
    ...(Array.isArray(localRound.completed) ? localRound.completed : []),
    ...(Array.isArray(remoteRound.completed) ? remoteRound.completed : []),
  ]);
  const localCompletionEvents = isStoreObject(localRound.completionEvents)
    ? localRound.completionEvents
    : {};
  const remoteCompletionEvents = isStoreObject(remoteRound.completionEvents)
    ? remoteRound.completionEvents
    : {};
  const reopened = new Set([
    ...normalizedReopenedCards(localRound),
    ...normalizedReopenedCards(remoteRound),
  ]);
  reopened.forEach((cardId) => {
    const latestEventId = cardStates?.[cardId]?.lastEvent?.eventId;
    const completionIds = mergedCompletionEventIds(
      localCompletionEvents,
      remoteCompletionEvents,
      cardId,
    );
    if (latestEventId && completionIds.includes(latestEventId)) reopened.delete(cardId);
  });
  const completed = new Set(
    [...completedCandidates].sort().filter((cardId) => !reopened.has(cardId)),
  );
  const mergedQueue = mergePendingQueueOrder(baseRound, localRound, remoteRound, completed);
  reopened.forEach((cardId) => {
    if (!mergedQueue.queue.includes(cardId)) mergedQueue.queue.push(cardId);
  });

  const completionEvents = mergeCompletionEvents(completed, localRound, remoteRound, cardStates);
  const roundCompletionEvents = [
    ...new Set([
      ...normalizedCompletionEventIds(remoteRound.roundCompletionEvents),
      ...normalizedCompletionEventIds(localRound.roundCompletionEvents),
    ]),
  ].sort();
  const normalized = normalizeDeckRound(
    {
    ...cloneStore(baseRound),
    ...cloneStore(remoteRound),
    ...cloneStore(localRound),
    queue: mergedQueue.queue,
    queueOrderVersion: mergedQueue.queueOrderVersion,
    completed: [...completed].sort(),
    completionEvents,
    reopened: [...reopened].sort(),
    roundCompletionEvents,
    rounds: Math.max(
      Number.isInteger(localRound.rounds) ? localRound.rounds : 0,
      Number.isInteger(remoteRound.rounds) ? remoteRound.rounds : 0,
    ),
    },
    cardStates,
    deck,
  );
  const baseRounds = Number.isInteger(baseRound?.rounds) ? Math.max(0, baseRound.rounds) : 0;
  const baseHadQueue = Array.isArray(baseRound?.queue) && baseRound.queue.length > 0;
  if (baseHadQueue && normalized.queue.length === 0 && normalized.rounds <= baseRounds) {
    normalized.rounds = baseRounds + 1;
    normalized.roundCompletionEvents = [
      ...new Set(Object.values(normalized.completionEvents).flatMap(normalizedCompletionEventIds)),
    ].sort();
  }
  return normalized;
}

function mergeRoundStates(baseRoundState, localRoundState, remoteRoundState, cardStates) {
  const base = isStoreObject(baseRoundState) ? baseRoundState : {};
  const local = isStoreObject(localRoundState) ? localRoundState : {};
  const remote = isStoreObject(remoteRoundState) ? remoteRoundState : {};
  const decks = {};
  const deckNames = new Set([
    ...Object.keys(base.decks || {}),
    ...Object.keys(local.decks || {}),
    ...Object.keys(remote.decks || {}),
  ]);

  deckNames.forEach((deck) => {
    const baseDeck = base.decks?.[deck];
    const localDeck = local.decks?.[deck];
    const remoteDeck = remote.decks?.[deck];
    // Saves run this for every stored deck, so the local round is deep-compared
    // only when the outcome depends on it: a remote round that is the base's own
    // object (no other tab wrote it) is unchanged, and differs from the local
    // one exactly when the local one changed.
    let localChangedResult;
    const localChanged = () => {
      if (localChangedResult === undefined) localChangedResult = !valuesEqual(localDeck, baseDeck);
      return localChangedResult;
    };
    const remoteChanged = !valuesEqual(remoteDeck, baseDeck);
    const localDiffersFromRemote = () =>
      remoteDeck === baseDeck ? localChanged() : !valuesEqual(localDeck, remoteDeck);
    const bothHaveCompletionOperations =
      Object.keys(localDeck?.completionEvents || {}).length > 0 &&
      Object.keys(remoteDeck?.completionEvents || {}).length > 0;
    if (
      isStoreObject(localDeck) &&
      isStoreObject(remoteDeck) &&
      compareRoundEpochs(localDeck, remoteDeck, deck) !== 0
    ) {
      const winner = compareRoundEpochs(localDeck, remoteDeck, deck) > 0 ? localDeck : remoteDeck;
      decks[deck] = normalizeDeckRound(winner, cardStates, deck);
      return;
    }
    if (
      isStoreObject(localDeck) &&
      isStoreObject(remoteDeck) &&
      ((remoteChanged && localChanged()) || bothHaveCompletionOperations) &&
      localDiffersFromRemote()
    ) {
      decks[deck] = mergeConcurrentDeckRound(
        deck,
        baseDeck,
        localDeck,
        remoteDeck,
        cardStates,
      );
    } else if (remoteChanged && !localChanged()) {
      decks[deck] = normalizeDeckRound(remoteDeck, cardStates, deck);
    } else {
      decks[deck] = normalizeDeckRound(localDeck, cardStates, deck);
    }
  });

  return {
    activeDeck:
      local.activeDeck !== base.activeDeck
        ? local.activeDeck
        : remote.activeDeck || local.activeDeck || base.activeDeck,
    decks,
  };
}

function mergeStoreVersions(baseStore, localStore, remoteStore) {
  const base = isStoreObject(baseStore) ? baseStore : {};
  const local = isStoreObject(localStore) ? localStore : {};
  const remote = isStoreObject(remoteStore) ? remoteStore : {};
  const merged = {};
  // A write while storage still holds what this tab last synced passes that
  // store as both base and remote: nothing changed remotely, every branch below
  // takes the local value, and comparing thousands of card states is skipped.
  // The values are taken as they are: every caller replaces the local store
  // with the result (saveStore's copy is its own and is compacted right after).
  const remoteIsBase = remote === base;
  const keys = new Set(
    remoteIsBase
      ? Object.keys(local)
      : [...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)],
  );

  keys.delete(STORE_META_KEY);
  keys.delete(ROUND_STATE_KEY);
  keys.forEach((key) => {
    if (remoteIsBase) {
      if (local[key] !== undefined) merged[key] = local[key];
      return;
    }
    const localChanged = !valuesEqual(local[key], base[key]);
    const remoteChanged = !valuesEqual(remote[key], base[key]);
    let value;

    if (isCardState(local[key]) && remote[key] === undefined && !localChanged) {
      value = cloneStore(local[key]);
    } else if (
      isCardState(local[key]) &&
      isCardState(remote[key]) &&
      !valuesEqual(local[key], remote[key])
    ) {
      value =
        localChanged && !remoteChanged
          ? cloneStore(local[key])
          : mergeConcurrentCardState(base[key], local[key], remote[key]);
    } else if (localChanged && remoteChanged && !valuesEqual(local[key], remote[key])) {
      value = mergeConcurrentCardState(base[key], local[key], remote[key]);
    } else if (localChanged) {
      value = cloneStore(local[key]);
    } else if (remoteChanged) {
      value = cloneStore(remote[key]);
    } else {
      value = cloneStore(local[key]);
    }
    if (value !== undefined) merged[key] = value;
  });

  merged[ROUND_STATE_KEY] = mergeRoundStates(
    base[ROUND_STATE_KEY],
    local[ROUND_STATE_KEY],
    remote[ROUND_STATE_KEY],
    merged,
  );
  return merged;
}

function saveStore() {
  // lastSyncedStore is replaced, never mutated, so it serves as the base as is.
  const mergeBase = lastSyncedStore;
  let candidate = compactStoreForPersistence(store);

  try {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const remoteStore = readPersistedStoreForMerge();
      recordStoreRevision(remoteStore);
      candidate = compactStoreForPersistence(
        mergeStoreVersions(mergeBase, candidate, remoteStore),
      );
      storeWriteSequence += 1;
      const revision =
        Math.max(
          storeRevision(mergeBase),
          storeRevision(store),
          storeRevision(remoteStore),
          storeRevision(candidate),
        ) + 1;
      const writeToken = `${storeWriterId}:${revision}:${storeWriteSequence}`;
      candidate[STORE_META_KEY] = {
        schemaVersion: STORE_SCHEMA_VERSION,
        savedAt: Date.now(),
        writerId: storeWriterId,
        revision,
        writeToken,
      };

      const serialized = JSON.stringify(candidate);
      localStorage.setItem(STORAGE_KEY, serialized);
      // Storage still holding exactly this text means no other tab wrote in
      // between; only a different text needs parsing to check the token.
      const wroteThis = localStorage.getItem(STORAGE_KEY) === serialized;
      const readBack = wroteThis ? candidate : readPersistedStoreForMerge();
      recordStoreRevision(readBack);
      if (wroteThis || readBack[STORE_META_KEY]?.writeToken === writeToken) {
        store = candidate;
        lastSyncedStore = JSON.parse(serialized);
        rememberPersistedStore(serialized, lastSyncedStore);
        storeNeedsCompaction = false;
        recordStoreRevision(candidate);
        syncSessionRoundState({ preserveActiveDeck: true });
        break;
      }
      candidate = mergeStoreVersions(mergeBase, candidate, readBack);
      if (attempt === 2) {
        store = candidate;
      }
    }
    if (
      persistenceError?.startsWith("浏览器无法") ||
      persistenceError?.startsWith("学习进度无法写入")
    ) {
      persistenceError = null;
    }
  } catch (error) {
    persistenceError = `学习进度无法写入浏览器，本次操作仍会保留到页面关闭（${error.name || "storage error"}）。`;
  }

  if (elements.loadErrorBanner) renderLoadStatus();
}

// The old module drawer persisted collapsed groups; the module page has none.
function clearRetiredSidebarState() {
  try {
    localStorage.removeItem(RETIRED_SIDEBAR_STATE_KEY);
  } catch {
    // Storage cleanup is optional.
  }
}

function arraysEqual(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

// The tabs never change; their decks are read once, since every save checks
// each stored deck.
let tabDeckSet = null;

function isTabDeck(deck) {
  if (!tabDeckSet) tabDeckSet = new Set([...elements.tabs].map((tab) => tab.dataset.deck));
  return tabDeckSet.has(deck);
}

// A tab's deck, one of its blocks, or a pool of either.
function isKnownDeck(deck) {
  if (typeof deck !== "string") return false;
  const tabDeck = tabDeckOf(deck);
  if (!isTabDeck(tabDeck)) return false;
  const block = blockOf(deck);
  if (block && !isBlockIdFor(tabDeck, block)) return false;
  return poolOf(blockDeckOf(tabDeck, block), poolKindOf(deck)) === deck;
}

function isVocabDeck(deck) {
  return deck.startsWith("vocab-");
}

function isDeckDataMissing(deck) {
  return isFamilyDataMissing(cardFamilyForDeck(deck));
}

function isDeckDataPending(deck = activeDeck) {
  return isFamilyDataPending(cardFamilyForDeck(deck));
}

function getRoundCount(deck) {
  return Number.isInteger(sessionRoundCounts[deck]) ? sessionRoundCounts[deck] : 0;
}

function renderDeckRoundCounts() {
  elements.tabs.forEach((tab) => {
    const roundCount = getRoundCount(tab.dataset.deck);
    const badge = tab.querySelector(".deck-round-count");
    if (!badge) return;
    badge.textContent = `${roundCount}轮`;
    badge.setAttribute("aria-label", `已完成 ${roundCount} 轮`);
    badge.hidden = roundCount === 0;
  });
}

function renderLoadStatus() {
  const messages = [];
  if (!kanaCardsApi()) {
    messages.push("假名脚本加载失败，请确认 kana-cards.js 已正确加载。");
  }
  // While the study data downloads nothing is missing yet.
  if (studyDataState !== "loading") {
    if (!cardData) {
      messages.push("卡片脚本加载失败，请确认 card-data.js 已正确加载。假名模块仍可使用。");
    }
    if (cardData && isFamilyDataMissing("vocab-n5")) {
      messages.push("N5 词库加载失败，请确认 n5-codex-vocab.js 已正确加载。假名模块仍可使用。");
    }
    if (cardData && isFamilyDataMissing("vocab-n4")) {
      messages.push("N4 词库加载失败，请确认 ayaya-n4-codex-vocab.js 已正确加载。其他模块仍可使用。");
    }
    if (cardData && isFamilyDataMissing("vocab-n3")) {
      messages.push("N3 词库加载失败，请确认 ayaya-n3-codex-vocab.js 已正确加载。其他模块仍可使用。");
    }
    if (cardData && isFamilyDataMissing("grammar-n5")) {
      messages.push("语法数据加载失败，请确认 grammar-data.js 已正确加载。其他模块仍可使用。");
    }
  }
  if (persistenceError) {
    messages.push(persistenceError);
  }

  elements.loadErrorBanner.hidden = messages.length === 0;
  elements.loadErrorBanner.textContent = messages.join(" ");

  elements.tabs.forEach((tab) => {
    tab.disabled = isDeckDataMissing(tab.dataset.deck);
  });
}

function clearRecord(record) {
  Object.keys(record).forEach((key) => delete record[key]);
}

function syncSessionRoundState(options = {}) {
  const preserveActiveDeck = options.preserveActiveDeck === true;
  const roundState = store[ROUND_STATE_KEY];
  clearRecord(sessionQueues);
  clearRecord(sessionCompleted);
  clearRecord(sessionCompletionEvents);
  clearRecord(sessionReopenedCards);
  clearRecord(sessionRoundCompletionEvents);
  clearRecord(sessionRoundGenerations);
  clearRecord(sessionRoundIds);
  clearRecord(sessionRoundCounts);
  clearRecord(sessionQueueOrderVersions);
  if (!roundState || typeof roundState !== "object") return;

  const storedActiveDeck =
    LEGACY_MISTAKE_DECKS[roundState.activeDeck] || roundState.activeDeck;
  if (!preserveActiveDeck && isKnownDeck(storedActiveDeck)) {
    activeDeck = storedActiveDeck;
  }

  Object.entries(roundState.decks || {}).forEach(([deck, state]) => {
    if (!isKnownDeck(deck) || !state || typeof state !== "object") return;
    sessionQueues[deck] = Array.isArray(state.queue) ? [...state.queue] : [];
    sessionCompleted[deck] = new Set(Array.isArray(state.completed) ? state.completed : []);
    sessionCompletionEvents[deck] = isStoreObject(state.completionEvents)
      ? { ...state.completionEvents }
      : {};
    sessionReopenedCards[deck] = normalizedReopenedCards(state);
    sessionRoundCompletionEvents[deck] = normalizedCompletionEventIds(
      state.roundCompletionEvents,
    );
    sessionRoundGenerations[deck] = roundGenerationForState(state);
    sessionRoundIds[deck] = roundIdForState(state, deck);
    sessionRoundCounts[deck] = Number.isInteger(state.rounds) ? Math.max(0, state.rounds) : 0;
    sessionQueueOrderVersions[deck] = queueOrderVersionForState(state);
  });
}

function loadRoundState() {
  syncSessionRoundState();
}

// index.html preloads the study data for a visitor whose last deck needs it;
// this tiny key says so without reading the progress store on the first screen.
const START_FAMILY_HINT_KEY = "ayaya-jp-start-family-v1";
let lastStartFamilyHint = null;

function rememberStartFamily() {
  const hint = cardFamilyForDeck(activeDeck) === "kana" ? "kana" : "study";
  if (hint === lastStartFamilyHint) return;
  lastStartFamilyHint = hint;
  try {
    localStorage.setItem(START_FAMILY_HINT_KEY, hint);
  } catch {
    // Only the next visit's preload depends on it.
  }
}

function saveRoundState() {
  rememberStartFamily();
  const decks = {};
  const deckNames = new Set([
    ...Object.keys(sessionQueues),
    ...Object.keys(sessionCompleted),
    ...Object.keys(sessionCompletionEvents),
    ...Object.keys(sessionReopenedCards),
    ...Object.keys(sessionRoundCompletionEvents),
    ...Object.keys(sessionRoundGenerations),
    ...Object.keys(sessionRoundIds),
    ...Object.keys(sessionRoundCounts),
    ...Object.keys(sessionQueueOrderVersions),
  ]);

  deckNames.forEach((deck) => {
    ensureSessionRoundEpoch(deck);
    decks[deck] = {
      queue: [...(sessionQueues[deck] || [])],
      completed: [...(sessionCompleted[deck] || new Set())],
      completionEvents: { ...(sessionCompletionEvents[deck] || {}) },
      reopened: [...(sessionReopenedCards[deck] || new Set())],
      queueOrderVersion: sessionQueueOrderVersions[deck] || 0,
      roundCompletionEvents: [...(sessionRoundCompletionEvents[deck] || [])],
      roundGeneration: sessionRoundGenerations[deck],
      roundId: sessionRoundIds[deck],
      rounds: getRoundCount(deck),
    };
  });

  store[ROUND_STATE_KEY] = { activeDeck, decks };
  saveStore();
}

function mergeCardStates(states) {
  const validStates = states.map(compactCardState).filter(Boolean);
  if (!validStates.length) return null;

  const latest = validStates.reduce((currentLatest, state) =>
    latestCardState(currentLatest, state),
  );

  return {
    ...latest,
    reviews: validStates.reduce(
      (total, state) => total + reviewCount(state),
      0,
    ),
  };
}

function migrateLegacyCardState(familyCards) {
  const aliasMap = new Map();
  const targetFamilies = new Map();
  familyCards.forEach((card) => {
    targetFamilies.set(card.id, cardFamilyForDeck(card.deck));
    (card.legacyIds || []).forEach((legacyId) => aliasMap.set(legacyId, card.id));
  });
  if (!aliasMap.size) return;

  let changed = false;
  // Grouped in one pass: scanning the whole alias map once per target was
  // quadratic and froze the first opening of a vocab level for ~0.2 s.
  const legacyIdsByTarget = new Map();
  aliasMap.forEach((targetId, legacyId) => {
    if (!legacyIdsByTarget.has(targetId)) legacyIdsByTarget.set(targetId, []);
    legacyIdsByTarget.get(targetId).push(legacyId);
  });
  legacyIdsByTarget.forEach((legacyIds, targetId) => {
    const states = [store[targetId], ...legacyIds.map((legacyId) => store[legacyId])];
    const merged = mergeCardStates(states);
    if (merged && legacyIds.some((legacyId) => store[legacyId])) {
      store[targetId] = merged;
      changed = true;
    }
    legacyIds.forEach((legacyId) => {
      if (legacyId in store) {
        delete store[legacyId];
        changed = true;
      }
    });
  });

  const remapId = (id, deck) => {
    const targetId = aliasMap.get(id);
    if (!targetId) return id;
    return targetFamilies.get(targetId) === cardFamilyForDeck(deck) ? targetId : "";
  };
  const remapIds = (ids, deck) => [
    ...new Set(
      (Array.isArray(ids) ? ids : [])
        .map((id) => remapId(id, deck))
        .filter(Boolean),
    ),
  ];

  Object.keys(sessionQueues).forEach((deck) => {
    const nextQueue = remapIds(sessionQueues[deck], deck);
    if (!arraysEqual(sessionQueues[deck], nextQueue)) {
      sessionQueues[deck] = nextQueue;
      changed = true;
    }
  });
  Object.keys(sessionCompleted).forEach((deck) => {
    const previous = [...sessionCompleted[deck]];
    const next = remapIds(previous, deck);
    if (!arraysEqual(previous, next)) {
      sessionCompleted[deck] = new Set(next);
      changed = true;
    }
  });
  Object.keys(sessionCompletionEvents).forEach((deck) => {
    const previous = sessionCompletionEvents[deck] || {};
    const next = Object.fromEntries(
      Object.entries(previous)
        .map(([cardId, eventId]) => [remapId(cardId, deck), eventId])
        .filter(([cardId]) => cardId),
    );
    if (!valuesEqual(previous, next)) {
      sessionCompletionEvents[deck] = next;
      changed = true;
    }
  });
  Object.keys(sessionReopenedCards).forEach((deck) => {
    const previous = [...sessionReopenedCards[deck]];
    const next = remapIds(previous, deck);
    if (!arraysEqual(previous, next)) {
      sessionReopenedCards[deck] = new Set(next);
      changed = true;
    }
  });

  if (changed) saveRoundState();
}

function defaultState() {
  return {
    lastChoiceCorrectIndex: null,
    lastEvent: null,
    lastRating: null,
    lastRatedAt: null,
    reviews: 0,
  };
}

function getState(cardId) {
  store[cardId] = compactCardState(store[cardId]) || defaultState();
  return store[cardId];
}

// Read without compacting a copy: decks filter thousands of cards per render.
function cardRatingOf(cardId) {
  const value = store[cardId];
  if (isStoreObject(value) && VALID_RATINGS.has(value.lastRating)) return value.lastRating;
  return compactCardState(value)?.lastRating || null;
}

function cardReviewsOf(cardId) {
  const value = store[cardId];
  if (isStoreObject(value) && Number.isInteger(value.reviews)) return Math.max(0, value.reviews);
  return compactCardState(value)?.reviews || 0;
}

// A card's latest rating decides its pool, so every rating moves it immediately.
function cardPoolKind(card) {
  const rating = cardRatingOf(card.id);
  if (FUZZY_RATINGS.has(rating)) return "fuzzy";
  if (UNKNOWN_RATINGS.has(rating)) return "unknown";
  return "main";
}

function getDeckCards(deck = activeDeck) {
  const tabDeck = tabDeckOf(deck);
  const block = blockOf(deck);
  const kind = poolKindOf(deck);
  return getFamilyCards(deck).filter(
    (card) =>
      card.deck === tabDeck &&
      (!block || cardBlockOf(card) === block) &&
      cardPoolKind(card) === kind,
  );
}

// The round a pool starts with the first time it opens: reviewed main-pool cards
// count as done, and a block carries over its share of the 全部 deck's round.
function initialCompletedIds(deck, deckCards) {
  const parentDeck = poolOf(tabDeckOf(deck), poolKindOf(deck));
  if (parentDeck !== deck && sessionCompleted[parentDeck] instanceof Set) {
    const parentCompleted = sessionCompleted[parentDeck];
    return new Set(deckCards.filter((card) => parentCompleted.has(card.id)).map((card) => card.id));
  }
  return new Set(
    isReviewPool(deck)
      ? []
      : deckCards.filter((card) => cardReviewsOf(card.id) > 0).map((card) => card.id),
  );
}

function shuffleList(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function avoidSameOrder(order, previousOrder) {
  if (order.length > 1 && Array.isArray(previousOrder) && arraysEqual(order, previousOrder)) {
    return [...order.slice(1), order[0]];
  }
  return order;
}

// Homophones (紙・髪・神) are asked apart: a card never directly follows one
// sharing its reading when another card can take its place.
function spreadHomophones(order, keyById) {
  const spread = [...order];
  const keyAt = (index) => keyById.get(spread[index]);
  const clashes = (index, key) =>
    Boolean(key) && (keyAt(index - 1) === key || keyAt(index + 1) === key);
  for (let index = 1; index < spread.length; index += 1) {
    const key = keyAt(index);
    if (!key || keyAt(index - 1) !== key) continue;
    for (let other = 0; other < spread.length; other += 1) {
      const otherKey = keyAt(other);
      if (otherKey === key || Math.abs(other - index) < 2) continue;
      [spread[index], spread[other]] = [spread[other], spread[index]];
      if (!clashes(index, otherKey) && !clashes(other, key)) break;
      [spread[index], spread[other]] = [spread[other], spread[index]];
    }
  }
  return spread;
}

function shuffleCards(deckCards, previousOrder = []) {
  const keyById = new Map(
    deckCards.filter((card) => card.homophoneKey).map((card) => [card.id, card.homophoneKey]),
  );
  const shuffledIds = shuffleList(deckCards).map((card) => card.id);
  const ids = keyById.size ? spreadHomophones(shuffledIds, keyById) : shuffledIds;
  return avoidSameOrder(ids, previousOrder);
}

function buildChoiceOptions(card) {
  if (!Array.isArray(card.choices)) return [];

  const state = getState(card.id);
  const options = shuffleList(card.choices);
  const correctIndex = options.findIndex((choice) => choice.isCorrect);

  if (
    options.length > 1 &&
    Number.isInteger(state.lastChoiceCorrectIndex) &&
    correctIndex === state.lastChoiceCorrectIndex
  ) {
    return [...options.slice(1), options[0]];
  }

  return options;
}

function buildQueue() {
  // A deck whose data is still downloading has no cards yet; rebuilding its
  // queue now would save it as empty and drop the stored round.
  if (isDeckDataPending()) {
    reviewQueue = [];
    return;
  }
  ensureSessionRoundEpoch(activeDeck);
  const deckCards = getDeckCards();
  const deckIds = new Set(deckCards.map((card) => card.id));
  const cardById = new Map(deckCards.map((card) => [card.id, card]));
  const hadQueue = Array.isArray(sessionQueues[activeDeck]);
  const hadCompleted = sessionCompleted[activeDeck] instanceof Set;
  const previousQueueOrderVersion = sessionQueueOrderVersions[activeDeck] || 0;
  const needsQueueOrderMigration =
    hadQueue && previousQueueOrderVersion < ROUND_QUEUE_ORDER_VERSION;
  const completedIds = hadCompleted
    ? sessionCompleted[activeDeck]
    : initialCompletedIds(activeDeck, deckCards);
  const queuedIds = hadQueue
    ? sessionQueues[activeDeck]
    : shuffleCards(deckCards.filter((card) => !completedIds.has(card.id)));
  const knownQueuedIds = queuedIds.filter((id) => deckIds.has(id) && !completedIds.has(id));
  const queuedIdSet = new Set(knownQueuedIds);
  const missingCards = deckCards.filter(
    (card) => !queuedIdSet.has(card.id) && !completedIds.has(card.id),
  );
  let nextQueue = [...knownQueuedIds, ...shuffleCards(missingCards)];
  if (needsQueueOrderMigration) {
    nextQueue = avoidSameOrder(shuffleList(nextQueue), nextQueue);
  }
  const nextQueueOrderVersion = Math.max(
    previousQueueOrderVersion,
    ROUND_QUEUE_ORDER_VERSION,
  );
  const shouldSave =
    !hadQueue ||
    !hadCompleted ||
    previousQueueOrderVersion !== nextQueueOrderVersion ||
    !arraysEqual(sessionQueues[activeDeck], nextQueue);

  sessionCompleted[activeDeck] = completedIds;
  sessionQueues[activeDeck] = nextQueue;
  sessionQueueOrderVersions[activeDeck] = nextQueueOrderVersion;
  reviewQueue = sessionQueues[activeDeck].map((id) => cardById.get(id)).filter(Boolean);
  if (shouldSave) {
    saveRoundState();
  }
}

function nextCard() {
  cancelSpeech();
  clearSpeechStatus();
  buildQueue();
  currentCard = reviewQueue[0] || null;
  currentChoiceOptions = currentCard?.isChoice ? buildChoiceOptions(currentCard) : [];
  selectedChoiceId = null;
  choiceHintShown = false;
  isRevealed = false;
  render();
}

function restoreUndoButtonHome() {
  if (undoButtonHome && elements.undoRating.parentElement !== undoButtonHome) {
    undoButtonHome.append(elements.undoRating);
  }
}

// Cards left in a pool's current round. The active pool's queue is already
// built; the other pool counts its cards not yet completed this round (a pool
// never opened yet starts as buildQueue would start it).
function remainingCount(deck, deckCards = null) {
  if (deck === activeDeck) return reviewQueue.length;
  const cards = deckCards || getDeckCards(deck);
  const completedIds =
    sessionCompleted[deck] instanceof Set
      ? sessionCompleted[deck]
      : initialCompletedIds(deck, cards);
  return cards.filter((card) => !completedIds.has(card.id)).length;
}

function poolTabs() {
  return [
    { kind: "main", tab: elements.currentPoolTab, badge: elements.currentCount },
    { kind: "fuzzy", tab: elements.fuzzyPoolTab, badge: elements.fuzzyCount },
    { kind: "unknown", tab: elements.poolToggle, badge: elements.unknownCount },
  ];
}

// The bottom bar's 当前 / 模糊 / 不认识 tabs select the active deck's main,
// 模糊 or 不认识 pool; each badge shows the cards left in that pool's round.
function renderPoolToggle() {
  const activeKind = poolKindOf(activeDeck);
  poolTabs().forEach(({ kind, tab, badge }) => {
    const left = remainingCount(poolOf(activeDeck, kind));
    const isActive = kind === activeKind;
    badge.textContent = left;
    badge.hidden = left === 0;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
    tab.setAttribute("aria-label", `${POOL_NAMES[kind]}板块（剩余 ${left} 张）`);
  });
}

function switchPool(kind) {
  if (poolKindOf(activeDeck) === kind) {
    focusPrimaryStudyAction();
    return;
  }
  clearLastReview();
  activeDeck = poolOf(activeDeck, kind);
  saveRoundState();
  nextCard();
  focusPrimaryStudyAction();
}

function focusSoon(element) {
  if (!element || element.disabled || element.hidden) return;
  window.requestAnimationFrame(() => {
    if (element.isConnected && !element.disabled && !element.hidden) {
      element.focus({ preventScroll: true });
    }
  });
}

function focusPrimaryStudyAction(options = {}) {
  if (!currentCard) {
    if (options.preferUndo && lastReview && !elements.undoRating.disabled) {
      focusSoon(elements.undoRating);
    } else if (!elements.studyAnyWay.hidden) {
      focusSoon(elements.studyAnyWay);
    } else {
      focusSoon(elements.deckMenuButton);
    }
    return;
  }

  if (currentCard.isChoice) {
    const target = isRevealed
      ? elements.choiceNext
      : elements.choiceList.querySelector(".choice-option:not(:disabled)");
    focusSoon(target);
    return;
  }

  if (isRevealed) {
    focusSoon(elements.answerPanel);
  } else {
    focusSoon(elements.cardReveal);
  }
}

function render() {
  const deckCards = getDeckCards();
  const dueCount = reviewQueue.length;
  const completedIds = sessionCompleted[activeDeck] || new Set();
  const deckIds = new Set(deckCards.map((card) => card.id));
  const reviewedCount = [...completedIds].filter((cardId) => deckIds.has(cardId)).length;

  elements.dueCount.textContent = dueCount;
  elements.reviewedCount.textContent = reviewedCount;
  updateUndoButton();
  renderPoolToggle();

  elements.tabs.forEach((tab) => {
    const isActive = tab.dataset.deck === tabDeckOf(activeDeck);
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  renderDeckRoundCounts();
  elements.moduleTitle.textContent = moduleTitleFor(activeDeck);

  if (!currentCard) {
    renderEmpty(deckCards);
    return;
  }

  restoreUndoButtonHome();
  elements.studyCard.hidden = false;
  elements.flashcard.hidden = false;
  elements.emptyState.hidden = true;
  elements.studyCard.classList.toggle("is-answering", isRevealed);
  elements.studyCard.classList.toggle("is-choosing", Boolean(currentCard.isChoice && !isRevealed));
  elements.studyCard.classList.toggle("is-choice", Boolean(currentCard.isChoice));
  elements.flashcard.classList.toggle("is-vocab", Boolean(currentCard.isVocab));
  elements.flashcard.classList.toggle("is-grammar", Boolean(currentCard.isGrammar));
  elements.flashcard.classList.toggle("is-choice", Boolean(currentCard.isChoice));
  elements.flashcard.classList.toggle(
    "is-zh-prompt",
    [
      "vocab-zh-ja",
      "vocab-n4-zh-ja",
      "vocab-n3-zh-ja",
      "grammar-n5-zh-ja",
      "grammar-n4-zh-ja",
      "grammar-n3-zh-ja",
    ].includes(currentCard.deck),
  );
  elements.cardPrompt.textContent = currentCard.prompt;
  elements.cardPrompt.lang = currentCard.promptLang || "";
  // A vocab card's kana go under the word once it is revealed, in place of the
  // 中→日 sentence cue; 日→中 words written alike (十 とお / じゅう) show them on
  // the front so it is clear which word is asked.
  const showsReading =
    Boolean(currentCard.isVocab) &&
    Boolean(currentCard.reading) &&
    (isRevealed || Boolean(currentCard.showsReadingOnFront));
  // 中→日 grammar cards keep their pattern hidden until the answer: on the front
  // it would give the answer away, so the group tag is the only hint.
  const hidesPattern =
    isGrammarSentenceCard(currentCard) && currentCard.promptLang === "zh-CN" && !isRevealed;
  const showsCardSubtle = Boolean(currentCard.subtle) && !showsReading && !hidesPattern;
  // Once a grammar card is revealed its pattern names the point, so the group
  // tag steps aside to keep the answer on one screen.
  const cardTag =
    currentCard.isGrammar && !currentCard.isChoice && isRevealed
      ? ""
      : cardTagFor(
          currentCard,
          `${elements.moduleTitle.textContent} ${showsCardSubtle ? currentCard.subtle : ""}`,
        );
  elements.cardType.textContent = cardTag;
  elements.cardType.hidden = !cardTag;
  // Grammar sentence cards lead with their pattern in large type and show the
  // sentence as a smaller line under it; other cards keep the subtitle below.
  const showsPattern = showsCardSubtle && isGrammarSentenceCard(currentCard);
  const showsBelow = (showsCardSubtle && !showsPattern) || showsReading;
  elements.flashcard.classList.toggle("is-pattern-first", showsPattern);
  elements.cardPattern.textContent = showsPattern ? currentCard.subtle : "";
  elements.cardPattern.lang = showsPattern ? currentCard.subtleLang || "" : "";
  elements.cardPattern.hidden = !showsPattern;
  if (showsReading) {
    elements.cardSubtle.replaceChildren(...readingLine(currentCard));
    elements.cardSubtle.lang = "ja";
  } else {
    elements.cardSubtle.textContent = showsBelow ? currentCard.subtle : "";
    elements.cardSubtle.lang = showsBelow ? currentCard.subtleLang || "" : "";
  }
  elements.cardSubtle.classList.toggle("is-reading", showsReading);
  elements.cardSubtle.hidden = !showsBelow;
  elements.cardReveal.disabled = Boolean(currentCard.isChoice || isRevealed);
  elements.cardReveal.setAttribute(
    "aria-expanded",
    String(Boolean(isRevealed || currentCard.isChoice)),
  );
  elements.cardReveal.setAttribute(
    "aria-label",
    currentCard.isChoice ? "选择下方答案" : isRevealed ? "答案已显示" : "显示答案",
  );
  const revealDescriptionIds = [
    cardTag ? "cardType" : "",
    showsPattern ? "cardPattern" : "",
    "cardPrompt",
    showsBelow ? "cardSubtle" : "",
    !isRevealed && !currentCard.isChoice ? "cardRevealHint" : "",
  ].filter(Boolean);
  elements.cardReveal.setAttribute("aria-describedby", revealDescriptionIds.join(" "));
  preloadCardClips(currentCard);
  const speakerText = isRevealed ? primarySpeech(currentCard) : currentCard.frontSpeech;
  const canSpeak = Boolean(speakerText);
  const canUseSpeech = supportsSpeech() || Boolean(canSpeak && audioClipUrl(clipTextFor(speakerText)));
  elements.speakWord.hidden = !canSpeak;
  // With no subtitle beside it the speaker moves to the band's top-right
  // corner, opposite the undo "<", instead of taking a row of its own; under a
  // vocab word it stays in that corner too so the kana sit centred.
  elements.flashcard.classList.toggle("speaker-corner", !showsBelow);
  elements.flashcard.classList.toggle("reading-centered", showsReading);
  elements.speakWord.disabled = !canSpeak || !canUseSpeech;
  elements.speakWord.setAttribute("aria-label", isRevealed ? "重播答案读音" : "播放题面读音");
  elements.speakWord.title = elements.speakWord.getAttribute("aria-label");
  if (canSpeak && !canUseSpeech) {
    setSpeechStatus("此浏览器不支持语音播放。", "error");
  }
  elements.answerPanel.classList.toggle(
    "is-revealed",
    Boolean(isRevealed || currentCard.isChoice),
  );
  elements.answerPanel.setAttribute("aria-hidden", String(!isRevealed && !currentCard.isChoice));

  elements.revealHint.hidden = Boolean(isRevealed || currentCard.isChoice);

  if (currentCard.isChoice) {
    renderChoiceCard(currentCard);
    return;
  }

  if (!isRevealed) {
    clearAnswer();
    return;
  }

  elements.feedbackRow.hidden = false;
  if (Array.isArray(currentCard.homophones) && currentCard.homophones.length > 1) {
    elements.answerMain.replaceChildren(...homophoneAnswer(currentCard.homophones));
    elements.answerMain.lang = "zh-CN";
  } else {
    elements.answerMain.textContent = answerRepeatedInMeta(currentCard) ? "" : currentCard.answer;
    elements.answerMain.lang = currentCard.answerLang || "";
  }
  renderMeta(currentCard.meta);
  const hasExample = Boolean(currentCard.examples?.length);
  elements.exampleBlock.hidden = !hasExample;
  if (hasExample) {
    renderExamples(currentCard.examples);
  }
}

// "N5 词汇 · 日→中 · 第3块" from the module page's level, row and cell labels and
// the block; read out with the progress counts and used to drop card tags that
// repeat the module name.
function moduleTitleFor(deck) {
  const tab = [...elements.tabs].find((item) => item.dataset.deck === tabDeckOf(deck));
  const level = tab?.closest(".deck-level-group")?.querySelector(".deck-level")?.textContent?.trim();
  const rowTitle = tab?.closest(".deck-row")?.querySelector(".deck-row-title")?.textContent?.trim();
  const row = [level, rowTitle].filter(Boolean).join(" ");
  const label = tab?.querySelector(".deck-label")?.textContent?.trim();
  return [
    row,
    label,
    blockLabelOf(deck),
    isReviewPool(deck) ? POOL_NAMES[poolKindOf(deck)] : "",
  ].filter(Boolean).join(" · ");
}

// The card's learning category (搭配, 表达, 拗音...) without the level and
// direction that the module title already shows; hidden when the title or the
// visible subtitle already says it.
function isGrammarSentenceCard(card) {
  return Boolean(card.isGrammar && /-(?:zh-ja|ja-zh)$/u.test(card.deck));
}

function cardTagFor(card, shownText) {
  // Grammar cards always name their group (条件, 敬语…).
  if (typeof card.tag === "string") return card.tag;
  const tag = String(card.type || "")
    .replace(/^N[3-5]\s+/u, "")
    .replace(/\s*(?:日文|中文)\s*→\s*(?:中文|日文)$/u, "")
    .replace(/^语法(?=\S)/u, "")
    .trim();
  return tag && !shownText.includes(tag) ? tag : "";
}

// Card meta is "key：value" pairs joined by full-width spaces; each pair gets
// its own row in the 说明 section.
function metaRows(meta) {
  return String(meta || "")
    .split("　")
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^([^：]{1,12})：(.*)$/u);
      return match ? [match[1], match[2]] : ["", part];
    });
}

// Kana-module answers such as "マ / ma" only repeat rows of the 说明 section
// (片假名：マ　罗马音：ma), so those cards show 说明 without the answer line.
// Vocab and grammar answers (meanings, sentences) never repeat their meta.
function answerRepeatedInMeta(card) {
  if (card.isVocab || card.isGrammar || card.isChoice) return false;
  const values = new Set(metaRows(card.meta).map(([, value]) => value.trim()));
  const parts = String(card.answer || "")
    .split(/\s*\/\s*/u)
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length > 0 && parts.every((part) => values.has(part));
}

function pitchAccentMark(accent) {
  const mark = document.createElement("sup");
  mark.className = "pitch-accent";
  mark.textContent = accent;
  return mark;
}

// Homophones replace the answer line: the words sharing this card's reading,
// numbered ①②③ most frequent first, each word (with its accent as a
// superscript) above its gloss; the card's own word carries its full meaning
// and is marked.
function homophoneAnswer(homophones) {
  return homophones.map(({ word, gloss, accent, isCurrent }, index) => {
    const item = document.createElement("span");
    item.className = "homophone";
    if (isCurrent) item.classList.add("is-current");
    const number = document.createElement("span");
    number.className = "homophone-index";
    number.textContent = String.fromCodePoint(0x2460 + index);
    const headword = document.createElement("span");
    headword.className = "homophone-word";
    headword.lang = "ja";
    headword.textContent = word;
    if (accent) headword.append(pitchAccentMark(accent));
    const meaning = document.createElement("span");
    meaning.className = "homophone-gloss";
    meaning.textContent = gloss;
    item.append(number, headword, meaning);
    return item;
  });
}

// The kana under a vocab word: the accent as a superscript right after them,
// then any （也读 …） note.
function readingLine(card) {
  const parts = [card.reading];
  if (card.pitchAccent) parts.push(pitchAccentMark(card.pitchAccent));
  if (card.readingNote) {
    const note = document.createElement("span");
    note.className = "reading-note";
    note.lang = "zh-CN";
    note.textContent = card.readingNote;
    parts.push(note);
  }
  return parts;
}

function renderMeta(meta) {
  const rows = metaRows(meta).map(([key, value]) => {
    const row = document.createElement("div");
    row.className = "meta-row";
    if (key) {
      const label = document.createElement("span");
      label.className = "meta-key";
      label.textContent = key;
      row.append(label);
    }
    const text = document.createElement("span");
    text.className = "meta-value";
    text.textContent = value;
    row.append(text);
    return row;
  });
  elements.answerMeta.replaceChildren(...rows);
  elements.metaBlock.hidden = rows.length === 0;
}

function rubyElement(text, reading) {
  const ruby = document.createElement("ruby");
  ruby.append(document.createTextNode(text));
  const rt = document.createElement("rt");
  rt.textContent = reading;
  ruby.append(rt);
  return ruby;
}

// [start, end) character ranges of an example's reviewed focus spans (the
// grammar pattern in it), found in order.
function focusRanges(text, focus) {
  const ranges = [];
  let from = 0;
  for (const span of Array.isArray(focus) ? focus : []) {
    const at = typeof span === "string" && span ? text.indexOf(span, from) : -1;
    if (at < 0) return [];
    ranges.push([at, at + span.length]);
    from = at + span.length;
  }
  return ranges;
}

// card-data.js segments each example with the same context-guarded readings
// used for romaji; text that no reviewed reading covers stays unannotated.
// Focus ranges are drawn as <mark>; a word with a reading that a range only
// partly covers is marked whole, so its reading stays over it.
function renderFurigana(parent, text, rubySegments, focus = []) {
  parent.replaceChildren();
  const given = Array.isArray(rubySegments) ? rubySegments : [];
  const segments = given.map(([surface]) => surface).join("") === text ? given : [[text, null]];
  const ranges = focusRanges(text, focus);
  const inFocus = (start, end) => ranges.some(([from, to]) => start < to && from < end);
  const pieces = [];
  let offset = 0;
  segments.forEach(([surface, reading]) => {
    const start = offset;
    offset += surface.length;
    if (reading) {
      pieces.push([rubyElement(surface, reading), inFocus(start, offset)]);
      return;
    }
    // Plain text is split at range edges so only the pattern is marked.
    const edges = new Set([start, offset]);
    ranges.forEach(([from, to]) => [from, to].forEach((edge) => {
      if (edge > start && edge < offset) edges.add(edge);
    }));
    const cuts = [...edges].sort((left, right) => left - right);
    for (let index = 0; index < cuts.length - 1; index += 1) {
      const piece = surface.slice(cuts[index] - start, cuts[index + 1] - start);
      pieces.push([document.createTextNode(piece), inFocus(cuts[index], cuts[index + 1])]);
    }
  });
  let mark = null;
  pieces.forEach(([node, marked]) => {
    if (!marked) {
      mark = null;
      parent.append(node);
      return;
    }
    if (!mark) {
      mark = document.createElement("mark");
      mark.className = "example-focus";
      parent.append(mark);
    }
    mark.append(node);
  });
}

function renderExamples(examples) {
  elements.examplesList.replaceChildren();

  examples.forEach((example, index) => {
    const item = document.createElement("div");
    item.className = "example-item";

    const text = document.createElement("div");
    text.className = "example-text";

    const ja = document.createElement("p");
    ja.className = "example-ja";
    ja.lang = "ja";
    renderFurigana(ja, example.ja, example.ruby, example.focus);

    const romaji = document.createElement("p");
    romaji.className = "example-romaji";
    romaji.textContent = example.romaji || "";
    romaji.lang = "en";
    romaji.hidden = !example.romaji;

    const zh = document.createElement("p");
    zh.className = "example-zh";
    zh.textContent = example.zh;
    zh.lang = "zh-CN";

    const button = document.createElement("button");
    button.className = "icon-button speaker-button example-speak";
    button.type = "button";
    button.title = "播放例句";
    button.setAttribute("aria-label", `播放例句 ${index + 1}`);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => speak(example.speech || example.ja));
    });

    text.append(ja, romaji, zh);
    item.append(text, button);
    elements.examplesList.append(item);
  });
}

function renderChoiceCard(card) {
  const selectedChoice = currentChoiceOptions.find((choice) => choice.id === selectedChoiceId);

  elements.choiceBlock.hidden = false;
  elements.feedbackRow.hidden = true;
  elements.choiceNext.hidden = !isRevealed;
  renderChoiceHint(card);
  renderChoiceOptions();

  if (!isRevealed) {
    elements.answerMain.textContent = "";
    elements.answerMain.removeAttribute("lang");
    renderMeta("");
    elements.exampleBlock.hidden = true;
    elements.examplesList.replaceChildren();
    elements.choiceFeedback.hidden = true;
    elements.choiceFeedback.replaceChildren();
    return;
  }

  elements.answerMain.textContent = selectedChoice?.isCorrect ? "回答正确" : "回答错误";
  elements.answerMain.lang = "zh-CN";
  renderMeta(card.meta);
  renderChoiceFeedback();
  const hasExample = Boolean(card.examples?.length);
  elements.exampleBlock.hidden = !hasExample;
  if (hasExample) {
    renderExamples(card.examples);
  }
}

// Before answering, 提示 opens the pattern and its formation (the Chinese cue
// already gives the meaning); answered, the 说明 below says the rest.
function renderChoiceHint(card) {
  const hint = card.hint;
  elements.choiceHint.hidden = !hint || isRevealed;
  elements.choiceHintToggle.hidden = choiceHintShown;
  elements.choiceHintBody.hidden = !choiceHintShown;
  if (!hint || isRevealed || !choiceHintShown) {
    elements.choiceHintBody.replaceChildren();
    return;
  }
  const rows = [
    ["文型", card.hint.pattern],
    ["接续", card.hint.formation],
  ].map(([key, value]) => {
    const row = document.createElement("div");
    row.className = "meta-row";
    const label = document.createElement("span");
    label.className = "meta-key";
    label.textContent = key;
    const text = document.createElement("span");
    text.className = "meta-value";
    text.textContent = value;
    row.append(label, text);
    return row;
  });
  elements.choiceHintBody.replaceChildren(...rows);
}

function renderChoiceOptions() {
  elements.choiceList.replaceChildren();
  elements.choiceList.classList.toggle("is-answered", isRevealed);

  currentChoiceOptions.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-option";
    button.type = "button";
    button.disabled = isRevealed;
    button.dataset.choiceId = choice.id;
    button.setAttribute("aria-keyshortcuts", String(index + 1));
    button.classList.toggle("is-selected", choice.id === selectedChoiceId);
    button.classList.toggle("is-correct", isRevealed && choice.isCorrect);
    button.classList.toggle("is-wrong", isRevealed && choice.id === selectedChoiceId && !choice.isCorrect);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => selectChoice(choice.id));
    });

    const marker = document.createElement("span");
    marker.className = "choice-marker";
    marker.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = choice.text;
    text.lang = currentCard.choiceLang || "zh-CN";

    button.append(marker, text);
    elements.choiceList.append(button);
  });
}

function renderChoiceFeedback() {
  elements.choiceFeedback.hidden = false;
  elements.choiceFeedback.replaceChildren();

  currentChoiceOptions.forEach((choice, index) => {
    const item = document.createElement("div");
    item.className = "choice-reason";
    item.classList.toggle("is-correct", choice.isCorrect);
    item.classList.toggle("is-selected", choice.id === selectedChoiceId);

    const title = document.createElement("strong");
    title.textContent = `${String.fromCharCode(65 + index)} · ${
      choice.isCorrect ? "正确项" : "干扰项"
    }${choice.id === selectedChoiceId ? " · 你的选择" : ""}`;

    const body = document.createElement("span");
    body.textContent = choice.reason;

    item.append(title, body);
    elements.choiceFeedback.append(item);
  });
}

function clearAnswer() {
  elements.answerMain.textContent = "";
  elements.answerMain.removeAttribute("lang");
  renderMeta("");
  elements.choiceBlock.hidden = true;
  elements.choiceHint.hidden = true;
  elements.choiceHintBody.replaceChildren();
  elements.choiceFeedback.hidden = true;
  elements.choiceFeedback.replaceChildren();
  elements.choiceList.replaceChildren();
  elements.choiceNext.hidden = true;
  elements.feedbackRow.hidden = true;
  elements.exampleBlock.hidden = true;
  elements.examplesList.replaceChildren();
}

function renderEmpty(deckCards) {
  updateUndoButton();
  elements.studyCard.hidden = true;
  elements.studyCard.classList.remove("is-answering");
  elements.studyCard.classList.remove("is-choosing");
  elements.studyCard.classList.remove("is-choice");
  elements.flashcard.hidden = true;
  elements.flashcard.classList.remove("is-choice");
  elements.revealHint.hidden = true;
  elements.answerPanel.classList.remove("is-revealed");
  elements.answerPanel.setAttribute("aria-hidden", "true");
  clearAnswer();
  elements.emptyState.hidden = false;
  if (lastReview) {
    elements.emptyState.append(elements.undoRating);
  } else {
    restoreUndoButtonHome();
  }
  elements.studyAnyWay.hidden = deckCards.length === 0;
  elements.studyAnyWay.textContent = "重新开始";
  if (extraElements.emptyTitle) extraElements.emptyTitle.textContent = "当前模块完成";
  if (extraElements.blockNext) extraElements.blockNext.hidden = true;
  const isLoading = isDeckDataPending();
  elements.emptyState.classList.toggle("is-loading", isLoading);
  if (isLoading) {
    elements.studyAnyWay.hidden = true;
    if (extraElements.emptyTitle) extraElements.emptyTitle.textContent = "正在加载…";
    elements.roundStatusText.textContent = "词库和语法数据下载完成后自动开始。";
    return;
  }
  const kind = poolKindOf(activeDeck);
  // A finished block restarts only itself and leads on to the next block.
  if (blockOf(activeDeck)) {
    if (extraElements.emptyTitle) extraElements.emptyTitle.textContent = "这一块完成";
    elements.studyAnyWay.textContent = "重练这一块";
    if (extraElements.blockNext) extraElements.blockNext.hidden = kind !== "main" || !nextBlockDeck();
  }
  if (kind !== "main") {
    const name = POOL_NAMES[kind];
    elements.roundStatusText.textContent = deckCards.length
      ? `这一轮已经完成，仍${name} ${deckCards.length} 张。`
      : `没有${name}的卡片。`;
    return;
  }

  const fuzzyCount = getDeckCards(poolOf(activeDeck, "fuzzy")).length;
  const unknownCount = getDeckCards(poolOf(activeDeck, "unknown")).length;
  const elsewhere = [
    fuzzyCount ? "模糊" : "",
    unknownCount ? "不认识" : "",
  ].filter(Boolean).join("和");
  elements.roundStatusText.textContent = deckCards.length
    ? `这一轮已经完成：认识 ${deckCards.length}，${fuzzyCount ? `模糊 ${fuzzyCount}，` : ""}不认识 ${unknownCount}。`
    : elsewhere
      ? `全部 ${fuzzyCount + unknownCount} 张都在${elsewhere}板块。`
      : "没有可用卡片";
}

function revealCard() {
  runSafely(() => {
    if (!currentCard || isRevealed || currentCard.isChoice) return;
    isRevealed = true;
    render();
    focusPrimaryStudyAction();
    speakForReveal();
  });
}

function revealFromStudySurface(event) {
  if (event.target === elements.cardReveal || event.target === elements.speakWord) return;
  if (
    event.target.closest?.(
      "button, a, input, select, textarea, summary, [role='button'], [contenteditable='true']",
    )
  ) {
    return;
  }
  revealCard();
}

function captureReviewSnapshot() {
  const state = getState(currentCard.id);
  return {
    cardId: currentCard.id,
    deck: activeDeck,
    previousChoiceCorrectIndex: state.lastChoiceCorrectIndex,
    previousCompleted: new Set(sessionCompleted[activeDeck] || []),
    previousCompletionEvents: { ...(sessionCompletionEvents[activeDeck] || {}) },
    previousReopened: new Set(sessionReopenedCards[activeDeck] || []),
    previousRoundCompletionEvents: [...(sessionRoundCompletionEvents[activeDeck] || [])],
    previousRoundGeneration: sessionRoundGenerations[activeDeck],
    previousRoundId: sessionRoundIds[activeDeck],
    previousQueue: [...(sessionQueues[activeDeck] || [])],
    previousRoundCount: getRoundCount(activeDeck),
    previousState: cloneStore(state),
    previousOtherPools: otherPoolsOf(activeDeck).map((deck) => [deck, capturePoolRound(deck)]),
  };
}

function capturePoolRound(deck) {
  return {
    completed: sessionCompleted[deck] ? new Set(sessionCompleted[deck]) : null,
    completionEvents: sessionCompletionEvents[deck]
      ? { ...sessionCompletionEvents[deck] }
      : null,
    queue: Array.isArray(sessionQueues[deck]) ? [...sessionQueues[deck]] : null,
    roundCompletionEvents: sessionRoundCompletionEvents[deck]
      ? [...sessionRoundCompletionEvents[deck]]
      : null,
    roundGeneration: Number.isInteger(sessionRoundGenerations[deck])
      ? sessionRoundGenerations[deck]
      : null,
    roundId: sessionRoundIds[deck] || null,
  };
}

function restorePoolRound(deck, snapshot) {
  if (!snapshot) return;
  const restore = (record, value) => {
    if (value === null) delete record[deck];
    else record[deck] = value;
  };
  restore(sessionCompleted, snapshot.completed && new Set(snapshot.completed));
  restore(sessionCompletionEvents, snapshot.completionEvents && { ...snapshot.completionEvents });
  restore(sessionQueues, snapshot.queue && [...snapshot.queue]);
  restore(
    sessionRoundCompletionEvents,
    snapshot.roundCompletionEvents && [...snapshot.roundCompletionEvents],
  );
  restore(sessionRoundGenerations, snapshot.roundGeneration);
  restore(sessionRoundIds, snapshot.roundId);
}

// After a rating moves the current card out of the active pool, settle it in its
// new pool: 模糊 / 不认识 cards wait in that pool's queue, and cards marked 认识 from
// a review pool count as done for the main pool's current round.
function settleMovedCard(cardId) {
  const card = getFamilyCards(activeDeck).find((item) => item.id === cardId);
  if (!card) return;
  const targetDeck = poolOf(activeDeck, cardPoolKind(card));
  if (targetDeck === activeDeck) return;

  if (Array.isArray(sessionQueues[targetDeck])) {
    sessionQueues[targetDeck] = sessionQueues[targetDeck].filter((id) => id !== cardId);
  }
  if (isReviewPool(targetDeck)) {
    sessionCompleted[targetDeck]?.delete(cardId);
    if (sessionCompletionEvents[targetDeck]) delete sessionCompletionEvents[targetDeck][cardId];
    if (Array.isArray(sessionQueues[targetDeck])) {
      // A finished round that gains a card continues as a new epoch; reopening the
      // old one would read as an undone round and roll back its round count.
      if (
        sessionQueues[targetDeck].length === 0 &&
        sessionRoundCompletionEvents[targetDeck]?.length
      ) {
        advanceSessionRoundEpoch(targetDeck);
        sessionRoundCompletionEvents[targetDeck] = [];
      }
      sessionQueues[targetDeck].push(cardId);
    }
    return;
  }
  if (!(sessionCompleted[targetDeck] instanceof Set)) return;
  sessionCompleted[targetDeck].add(cardId);
  if (!sessionCompletionEvents[targetDeck]) sessionCompletionEvents[targetDeck] = {};
  if (lastReview?.appliedEventId) {
    sessionCompletionEvents[targetDeck][cardId] = [lastReview.appliedEventId];
  }
}

function applyRating(rating, details = {}) {
  requestPersistentStorage();
  lastReview = captureReviewSnapshot();
  const state = getState(currentCard.id);

  state.reviews += 1;
  state.lastRating = rating;
  state.lastRatedAt = Date.now();
  storeWriterSequence += 1;
  const eventId = `${storeWriterId}-${storeWriterSequence}`;
  lastReview.appliedEventId = eventId;
  state.lastEvent = {
    rating,
    at: state.lastRatedAt,
    eventId,
    ...details,
  };
}

function completeCurrentCard(options = {}) {
  const shouldAdvance = options.advance !== false;

  sessionQueues[activeDeck] = (sessionQueues[activeDeck] || []).filter(
    (cardId) => cardId !== currentCard.id,
  );
  reviewQueue = reviewQueue.filter((card) => card.id !== currentCard.id);
  if (!sessionCompleted[activeDeck]) {
    sessionCompleted[activeDeck] = new Set();
  }
  sessionCompleted[activeDeck].add(currentCard.id);
  if (!sessionReopenedCards[activeDeck]) sessionReopenedCards[activeDeck] = new Set();
  sessionReopenedCards[activeDeck].delete(currentCard.id);
  if (!sessionCompletionEvents[activeDeck]) sessionCompletionEvents[activeDeck] = {};
  if (lastReview?.appliedEventId) {
    sessionCompletionEvents[activeDeck][currentCard.id] = [lastReview.appliedEventId];
  }
  settleMovedCard(currentCard.id);
  if (sessionQueues[activeDeck].length === 0 && sessionCompleted[activeDeck].size > 0) {
    sessionRoundCounts[activeDeck] = getRoundCount(activeDeck) + 1;
    sessionRoundCompletionEvents[activeDeck] = [
      ...new Set(
        Object.values(sessionCompletionEvents[activeDeck]).flatMap(normalizedCompletionEventIds),
      ),
    ].sort();
  }
  saveRoundState();
  if (shouldAdvance) nextCard();
}

function rateCurrentCard(rating) {
  if (!currentCard || !isRevealed || currentCard.isChoice) return;

  applyRating(rating);
  completeCurrentCard();
  focusPrimaryStudyAction({ preferUndo: true });
}

function showChoiceHint() {
  if (!currentCard?.isChoice || !currentCard.hint || isRevealed || choiceHintShown) return;
  choiceHintShown = true;
  render();
  elements.choiceList.querySelector(".choice-option:not(:disabled)")?.focus({ preventScroll: true });
}

function selectChoice(choiceId) {
  if (!currentCard?.isChoice || isRevealed || selectedChoiceId) return;

  const choice = currentChoiceOptions.find((item) => item.id === choiceId);
  if (!choice) return;

  const correctIndex = currentChoiceOptions.findIndex((item) => item.isCorrect);
  selectedChoiceId = choice.id;
  isRevealed = true;
  // Right only with the 提示 open is not yet known: it goes to 模糊.
  const rating = !choice.isCorrect ? "wrong" : choiceHintShown ? "unsure" : "correct";
  applyRating(rating, {
    choiceId: choice.id,
    correctChoiceIndex: correctIndex,
    correctChoiceId: currentCard.correctChoiceId,
    ...(choiceHintShown ? { hinted: true } : {}),
  });
  getState(currentCard.id).lastChoiceCorrectIndex = correctIndex;
  completeCurrentCard({ advance: false });
  render();
  focusPrimaryStudyAction();
  speakForReveal();
}

function updateUndoButton() {
  elements.undoRating.disabled = !lastReview;
}

function clearLastReview() {
  lastReview = null;
  restoreUndoButtonHome();
  updateUndoButton();
}

function hasConcurrentReview(snapshot, persistedState) {
  const persisted = compactCardState(persistedState) || defaultState();
  const previousReviews = reviewCount(snapshot.previousState);
  return Boolean(
    persisted.reviews > previousReviews &&
      (persisted.reviews > previousReviews + 1 ||
        (persisted.lastEvent?.eventId &&
          persisted.lastEvent.eventId !== snapshot.appliedEventId)),
  );
}

function removeAppliedReview(snapshot, persistedState, concurrentReviewExists) {
  if (!snapshot.appliedEventId) {
    store[snapshot.cardId] = cloneStore(snapshot.previousState);
    return;
  }

  if (!concurrentReviewExists) {
    store[snapshot.cardId] = {
      ...cloneStore(snapshot.previousState),
      undoneEventId: snapshot.appliedEventId,
    };
    return;
  }

  const persisted = compactCardState(persistedState) || defaultState();
  const previous = compactCardState(snapshot.previousState) || defaultState();
  const ownEventIsLatest = persisted.lastEvent?.eventId === snapshot.appliedEventId;
  store[snapshot.cardId] = {
    ...persisted,
    lastChoiceCorrectIndex: ownEventIsLatest
      ? previous.lastChoiceCorrectIndex
      : persisted.lastChoiceCorrectIndex,
    lastEvent: ownEventIsLatest ? previous.lastEvent : persisted.lastEvent,
    lastRatedAt: ownEventIsLatest ? previous.lastRatedAt : persisted.lastRatedAt,
    lastRating: ownEventIsLatest ? previous.lastRating : persisted.lastRating,
    reviews: Math.max(0, persisted.reviews - 1),
    undoneEventId: snapshot.appliedEventId,
  };
}

function undoLastReview() {
  if (!lastReview) return;

  const snapshot = lastReview;
  cancelSpeech();
  const card = getFamilyCards(snapshot.deck).find((item) => item.id === snapshot.cardId);
  if (!card) return;

  const persistedStore = readPersistedStoreForMerge();
  const concurrentReviewExists = hasConcurrentReview(snapshot, persistedStore[snapshot.cardId]);
  if (concurrentReviewExists) {
    store = cloneStore(persistedStore);
    lastSyncedStore = cloneStore(persistedStore);
    recordStoreRevision(persistedStore);
    syncSessionRoundState({ preserveActiveDeck: true });
  }
  activeDeck = snapshot.deck;
  if (!concurrentReviewExists) {
    sessionCompleted[activeDeck] = new Set(snapshot.previousCompleted);
    sessionCompletionEvents[activeDeck] = { ...snapshot.previousCompletionEvents };
    sessionReopenedCards[activeDeck] = new Set(snapshot.previousReopened);
    sessionReopenedCards[activeDeck].add(snapshot.cardId);
    sessionRoundCompletionEvents[activeDeck] = [...snapshot.previousRoundCompletionEvents];
    sessionRoundGenerations[activeDeck] = snapshot.previousRoundGeneration;
    sessionRoundIds[activeDeck] = snapshot.previousRoundId;
    sessionQueues[activeDeck] = [...snapshot.previousQueue];
    sessionRoundCounts[activeDeck] = snapshot.previousRoundCount;
    snapshot.previousOtherPools.forEach(([deck, round]) => restorePoolRound(deck, round));
  }
  removeAppliedReview(snapshot, persistedStore[snapshot.cardId], concurrentReviewExists);
  saveRoundState();
  buildQueue();

  currentCard = concurrentReviewExists ? reviewQueue[0] || null : card;
  currentChoiceOptions = currentCard?.isChoice ? buildChoiceOptions(currentCard) : [];
  selectedChoiceId = null;
  choiceHintShown = false;
  isRevealed = Boolean(currentCard && !currentCard.isChoice && !concurrentReviewExists);
  lastReview = null;
  render();
  focusPrimaryStudyAction();
}

function isSidebarHistoryEntry(state = window.history?.state) {
  return isStoreObject(state) && state[SIDEBAR_HISTORY_STATE_KEY] === true;
}

function pushSidebarHistoryEntry() {
  if (sidebarHistoryClosing || !window.history?.pushState || isSidebarHistoryEntry()) return;
  const currentState = isStoreObject(window.history.state) ? window.history.state : {};
  try {
    window.history.pushState({ ...currentState, [SIDEBAR_HISTORY_STATE_KEY]: true }, "");
  } catch {
    // The module page remains usable when an embedded browser blocks History API writes.
  }
}

function consumeSidebarHistoryEntry() {
  if (!window.history?.back || !isSidebarHistoryEntry()) {
    sidebarHistoryClosing = false;
    return;
  }
  sidebarHistoryClosing = true;
  try {
    window.history.back();
  } catch {
    sidebarHistoryClosing = false;
    // Closing the module page must not depend on History API availability.
  }
}

function isInsideInert(element) {
  for (let node = element; node; node = node.parentElement) {
    if (node.inert) return true;
  }
  return false;
}

function canReceiveSidebarReturnFocus(element) {
  return Boolean(
    element?.isConnected &&
      !element.disabled &&
      !element.hidden &&
      !element.closest?.("[hidden]") &&
      !isInsideInert(element),
  );
}

function sidebarReturnTarget() {
  return [sidebarReturnFocus, elements.deckMenuButton].find(
    canReceiveSidebarReturnFocus,
  );
}

function setSidebarOpen(isOpen, options = {}) {
  const wasOpen = elements.deckSidebar.classList.contains("is-open");
  const shouldRestoreFocus = options.restoreFocus !== false;
  const shouldSyncHistory = options.syncHistory !== false;
  if (isOpen && shouldSyncHistory && sidebarHistoryClosing) return;

  if (isOpen && !wasOpen) {
    const activeElement = document.activeElement;
    sidebarReturnFocus =
      activeElement instanceof HTMLElement && activeElement !== document.body
        ? activeElement
        : elements.deckMenuButton;
    if (shouldSyncHistory) pushSidebarHistoryEntry();
  }

  // The module page covers the card (or finished-round screen), which goes
  // inert; the bottom bar stays usable to switch back.
  elements.deckSidebar.classList.toggle("is-open", isOpen);
  elements.deckSidebar.setAttribute("aria-hidden", String(!isOpen));
  elements.deckMenuButton.setAttribute("aria-expanded", String(isOpen));
  elements.deckSidebar.inert = !isOpen;
  elements.studyCard.inert = isOpen;
  elements.emptyState.inert = isOpen;
  elements.studyArea.classList.toggle("is-picking", isOpen);
  if (isOpen !== wasOpen) closeBlockPage({ restoreFocus: false });
  // Studying a vocab or grammar deck, 模块 opens that deck's block page; its
  // "<" leads on to the whole module grid.
  if (isOpen && !wasOpen && hasBlocks(activeDeck) && extraElements.blockGrid) {
    openBlockPage(tabDeckOf(activeDeck), { focus: false });
  }

  if (isOpen) {
    window.requestAnimationFrame(() => {
      if (elements.deckSidebar.classList.contains("is-open") && !elements.deckSidebar.inert) {
        (activeBlockTile() || elements.closeDeckMenu).focus({ preventScroll: true });
      }
    });
    return;
  }

  if (wasOpen && shouldRestoreFocus) {
    sidebarReturnTarget()?.focus();
  }
  sidebarReturnFocus = null;
  if (wasOpen && shouldSyncHistory) consumeSidebarHistoryEntry();
}

function handleSidebarHistoryChange(event) {
  sidebarHistoryClosing = false;
  setSidebarOpen(isSidebarHistoryEntry(event.state), { syncHistory: false });
}

function handleSidebarKeydown(event) {
  if (!elements.deckSidebar.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    if (blockPageDeck) closeBlockPage();
    else setSidebarOpen(false);
  }
}

// iOS Safari pauses other apps' music when a page claims the default audio session;
// "ambient" lets <audio> clips mix with it instead (and follows the Silent switch).
// speechSynthesis ignores the page's session (WebKit bug 278598) and still
// interrupts music, which is why reviewed texts play pre-rendered clips.
function preferMixedAudio() {
  try {
    const audioSession = typeof navigator === "undefined" ? null : navigator.audioSession;
    if (audioSession && audioSession.type !== "ambient") audioSession.type = "ambient";
  } catch {
    // Browsers without the Audio Session API keep their default behavior.
  }
}

function supportsSpeech() {
  return Boolean(
    "speechSynthesis" in window &&
      window.speechSynthesis &&
      typeof SpeechSynthesisUtterance === "function",
  );
}

function setSpeechStatus(message, state = "") {
  if (!elements.speechStatus) return;
  elements.speechStatus.textContent = message;
  elements.speechStatus.hidden = !message;
  if (state) elements.speechStatus.dataset.state = state;
  else delete elements.speechStatus.dataset.state;
}

function clearSpeechStatus() {
  setSpeechStatus("");
}

function scheduleSpeechStart(text, options, generation, delay = 0, attempt = 0) {
  const start = () => {
    speechStartTimer = null;
    if (generation !== speechGeneration || document.visibilityState === "hidden") return;
    if (!supportsSpeech()) {
      setSpeechStatus("此浏览器不支持语音播放。", "error");
      return;
    }

    const synthesizer = window.speechSynthesis;
    try {
      if (synthesizer.paused) synthesizer.resume();
    } catch {
      setSpeechStatus("语音服务暂时不可用，请稍后重试。", "error");
      return;
    }

    let utterance;
    try {
      utterance = new SpeechSynthesisUtterance(text);
    } catch {
      setSpeechStatus("语音服务初始化失败，请刷新后重试。", "error");
      return;
    }
    utterance.lang = "ja-JP";
    utterance.rate = 0.82;
    activeSpeechUtterance = utterance;
    if (attempt === 0) clearSpeechStatus();

    utterance.addEventListener(
      "end",
      () => {
        if (generation !== speechGeneration || activeSpeechUtterance !== utterance) return;
        activeSpeechUtterance = null;
        clearSpeechStatus();
        if (options.onEnd) window.setTimeout(options.onEnd, 0);
      },
      { once: true },
    );
    utterance.addEventListener(
      "error",
      (event) => {
        if (generation !== speechGeneration || activeSpeechUtterance !== utterance) return;
        activeSpeechUtterance = null;
        const transientErrors = new Set([
          "audio-busy",
          "audio-hardware",
          "network",
          "synthesis-failed",
          "voice-unavailable",
        ]);
        if (attempt === 0 && transientErrors.has(event.error)) {
          setSpeechStatus("语音播放失败，正在自动重试…", "retry");
          speechBlockedUntil = Date.now() + 160;
          scheduleSpeechStart(text, options, generation, 160, attempt + 1);
          return;
        }
        setSpeechStatus("语音播放失败，请检查静音模式或稍后重试。", "error");
      },
      { once: true },
    );

    try {
      preferMixedAudio();
      synthesizer.speak(utterance);
    } catch {
      activeSpeechUtterance = null;
      setSpeechStatus("语音播放失败，请刷新后重试。", "error");
    }
  };

  if (delay > 0) {
    speechStartTimer = window.setTimeout(start, delay);
  } else {
    start();
  }
}

// Must stay identical to audioClipKey() in scripts/audio-lib.js (validation
// compares them). A synchronous hash keeps play() inside the tap handler, which
// iOS requires for the first clip.
function audioClipKey(text) {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let index = 0; index < text.length; index += 1) {
    const code = text.charCodeAt(index);
    h1 = Math.imul(h1 ^ code, 2654435761);
    h2 = Math.imul(h2 ^ code, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

// Homophone word cards carry their own clip text (card-data.js
// homophoneClipTexts), so 箸 does not play the clip of 橋.
function clipTextFor(text, card = currentCard) {
  return card?.speechClip && text === card.speech ? card.speechClip : text;
}

function audioClipUrl(text) {
  const clips = availableAudioClips();
  if (!clips || typeof Audio !== "function") return null;
  const key = audioClipKey(text);
  return clips.keys.has(key) ? `./${clips.directory}${key}.mp3` : null;
}

// Clips of the card on screen are fetched as soon as it renders, so the reveal
// (and the example chained after it) plays from memory instead of waiting on a
// request each. Only the most recently used clips are kept as blob URLs.
const preloadedClipLimit = 60;
const preloadedClips = new Map();

function canPreloadClips() {
  return (
    typeof fetch === "function" &&
    typeof URL !== "undefined" &&
    typeof URL.createObjectURL === "function"
  );
}

function touchPreloadedClip(url) {
  const entry = preloadedClips.get(url);
  if (!entry) return null;
  preloadedClips.delete(url);
  preloadedClips.set(url, entry);
  return entry;
}

function evictPreloadedClips() {
  for (const [url, entry] of preloadedClips) {
    if (preloadedClips.size <= preloadedClipLimit) return;
    // The clip playing right now keeps its blob URL until it is replaced.
    if (entry.objectUrl && clipPlayer?.src === entry.objectUrl) continue;
    preloadedClips.delete(url);
    if (entry.objectUrl) URL.revokeObjectURL(entry.objectUrl);
  }
}

function preloadClip(text) {
  const url = text ? audioClipUrl(text) : null;
  if (!url || touchPreloadedClip(url)) return;
  const entry = { objectUrl: null };
  preloadedClips.set(url, entry);
  evictPreloadedClips();
  fetch(url)
    .then((response) => (response.ok ? response.blob() : Promise.reject(new Error(response.status))))
    .then((blob) => {
      if (preloadedClips.get(url) === entry) entry.objectUrl = URL.createObjectURL(blob);
    })
    .catch(() => {
      // playClip() falls back to the network URL for a clip that failed here.
      if (preloadedClips.get(url) === entry) preloadedClips.delete(url);
    });
}

function preloadCardClips(card) {
  if (!card || !canPreloadClips()) return;
  const examples = card.examples || [];
  [
    card.frontSpeech,
    primarySpeech(card),
    card.sentenceAnswer,
    ...examples.map((example) => example.speech || example.ja),
  ].forEach((text) => preloadClip(text && clipTextFor(text, card)));
}

// A clip still downloading plays from its network URL rather than waiting:
// iOS only allows play() inside the tap that asked for it.
function playableClipUrl(url) {
  return touchPreloadedClip(url)?.objectUrl || url;
}

// One reused <audio> element: once a tap has started it, iOS lets later play()
// calls (the example chained after the word) run without a new gesture.
function getClipPlayer() {
  if (clipPlayer) return clipPlayer;
  clipPlayer = new Audio();
  clipPlayer.preload = "auto";
  clipPlayer.addEventListener("ended", () => {
    const clip = activeClip;
    if (!clip) return;
    activeClip = null;
    if (clip.options.onEnd) window.setTimeout(clip.options.onEnd, 0);
  });
  clipPlayer.addEventListener("error", () => fallBackFromClip(activeClip));
  return clipPlayer;
}

function stopClip() {
  activeClip = null;
  if (!clipPlayer) return;
  try {
    clipPlayer.pause();
  } catch {
    // A player that cannot pause has nothing left to stop.
  }
}

// A clip that fails to load or play is spoken by speechSynthesis instead.
function fallBackFromClip(clip) {
  if (!clip || clip !== activeClip || clip.generation !== speechGeneration) return;
  activeClip = null;
  if (!supportsSpeech()) {
    setSpeechStatus("语音播放失败，请稍后重试。", "error");
    return;
  }
  scheduleSpeechStart(clip.text, clip.options, clip.generation);
}

function playClip(url, text, options, generation) {
  const clip = { generation, options, text };
  activeClip = clip;
  clearSpeechStatus();
  preferMixedAudio();
  try {
    const player = getClipPlayer();
    player.src = playableClipUrl(url);
    const playback = player.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => fallBackFromClip(clip));
    }
  } catch {
    fallBackFromClip(clip);
  }
}

function speak(text, options = {}) {
  if (!text) return;
  speechGeneration += 1;
  const generation = speechGeneration;
  if (speechStartTimer !== null) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }
  stopClip();
  const clipUrl = audioClipUrl(clipTextFor(text));
  if (!supportsSpeech()) {
    if (clipUrl) playClip(clipUrl, text, options, generation);
    else setSpeechStatus("此浏览器不支持语音播放。", "error");
    return;
  }
  const synthesizer = window.speechSynthesis;
  const hasActiveSpeech = Boolean(
    activeSpeechUtterance || synthesizer.speaking || synthesizer.pending,
  );
  activeSpeechUtterance = null;
  if (hasActiveSpeech) {
    synthesizer.cancel();
    speechBlockedUntil = Math.max(speechBlockedUntil, Date.now() + 120);
  }

  if (clipUrl) {
    playClip(clipUrl, text, options, generation);
    return;
  }
  const delay = Math.max(0, speechBlockedUntil - Date.now());
  scheduleSpeechStart(text, options, generation, delay);
}

function cancelSpeech() {
  speechGeneration += 1;
  if (speechStartTimer !== null) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }
  stopClip();

  if (!supportsSpeech()) return;
  const synthesizer = window.speechSynthesis;
  const hasActiveSpeech = Boolean(
    activeSpeechUtterance || synthesizer.speaking || synthesizer.pending,
  );
  activeSpeechUtterance = null;
  if (hasActiveSpeech) {
    synthesizer.cancel();
    speechBlockedUntil = Math.max(speechBlockedUntil, Date.now() + 120);
  }
}

// iPadOS Safari can keep a stale 100dvh after the tab returns from the
// background, pushing the bottom of the card off screen. Pin the shell to the
// measured layout viewport instead and re-measure whenever the page resumes.
function syncViewportHeight() {
  const viewport = window.visualViewport;
  const height = viewport ? viewport.height * (viewport.scale || 1) : window.innerHeight;
  const rootStyle = document.documentElement.style;
  if (!Number.isFinite(height) || height <= 0 || !rootStyle) return;
  rootStyle.setProperty("--app-height", `${Math.round(height)}px`);
  if (window.scrollY) window.scrollTo(0, 0);
}

function bindViewportHeight() {
  const resync = () => {
    syncViewportHeight();
    // Safari reports the restored viewport a moment after the resume events.
    window.requestAnimationFrame(syncViewportHeight);
    window.setTimeout(syncViewportHeight, 350);
  };
  syncViewportHeight();
  window.addEventListener("resize", syncViewportHeight);
  window.addEventListener("orientationchange", resync);
  window.addEventListener("pageshow", resync);
  window.addEventListener("focus", resync);
  window.visualViewport?.addEventListener("resize", syncViewportHeight);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") resync();
  });
}

function bindInputModality() {
  const setPointerMode = () => {
    document.documentElement.dataset.inputMode = "pointer";
  };
  document.addEventListener("pointerdown", setPointerMode, true);
  document.addEventListener("touchstart", setPointerMode, true);
  document.addEventListener(
    "keydown",
    () => {
      document.documentElement.dataset.inputMode = "keyboard";
    },
    true,
  );
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") cancelSpeech();
  });
}

function primarySpeech(card = currentCard) {
  return card?.speech || card?.sentenceAnswer || card?.answer;
}

function speakCurrentCard() {
  const text = isRevealed ? primarySpeech(currentCard) : currentCard?.frontSpeech;
  speak(text);
}

function speakForReveal(card = currentCard) {
  if (!card) return;
  if (card.isGrammar) {
    speak(primarySpeech(card));
    return;
  }

  if (card.isVocab && card.sentenceAnswer) {
    speak(primarySpeech(card));
    return;
  }

  if (card.sentenceAnswer) {
    speak(card.sentenceAnswer);
    return;
  }

  const firstExample = card.examples?.[0]?.speech || card.examples?.[0]?.ja;
  if (firstExample) {
    speak(card.speech, { onEnd: () => speak(firstExample) });
  } else {
    speak(primarySpeech(card));
  }
}

function restartDeckRound() {
  const deckCards = getDeckCards();
  if (!deckCards.length) {
    renderEmpty(deckCards);
    return;
  }
  clearLastReview();
  const completedOrder = [...(sessionCompleted[activeDeck] || [])];
  const previousOrder =
    completedOrder.length === deckCards.length ? completedOrder : sessionQueues[activeDeck];
  sessionCompleted[activeDeck] = new Set();
  advanceSessionRoundEpoch(activeDeck);
  sessionCompletionEvents[activeDeck] = {};
  sessionReopenedCards[activeDeck] = new Set();
  sessionRoundCompletionEvents[activeDeck] = [];
  sessionQueues[activeDeck] = shuffleCards(deckCards, previousOrder);
  sessionQueueOrderVersions[activeDeck] = ROUND_QUEUE_ORDER_VERSION;
  saveRoundState();
  nextCard();
  focusPrimaryStudyAction();
}

// The block after the active one, in module-page order.
function nextBlockDeck() {
  const blocks = deckBlocks(activeDeck);
  const index = blocks.findIndex((block) => block.id === blockOf(activeDeck));
  const next = index >= 0 ? blocks[index + 1] : null;
  return next ? blockDeckOf(tabDeckOf(activeDeck), next.id) : "";
}

function selectDeck(deck) {
  if (deck !== activeDeck) clearLastReview();
  activeDeck = deck;
  saveRoundState();
  closeBlockPage({ restoreFocus: false });
  setSidebarOpen(false, { restoreFocus: false });
  nextCard();
  focusPrimaryStudyAction();
}

// The block page replaces the module grid once a vocab or grammar cell is
// picked: 全部 first, then each block with the cards left in its 当前 round and
// its 模糊 / 不认识 counts, so the next block to study is visible at a glance.
let blockPageDeck = "";

function blockPageCounts(tabDeck) {
  const counts = new Map();
  const add = (deck, kind, card) => {
    if (!counts.has(deck)) counts.set(deck, { main: [], fuzzy: [], unknown: [] });
    counts.get(deck)[kind].push(card);
  };
  getFamilyCards(tabDeck).forEach((card) => {
    if (card.deck !== tabDeck) return;
    const kind = cardPoolKind(card);
    add(tabDeck, kind, card);
    const block = cardBlockOf(card);
    if (block) add(blockDeckOf(tabDeck, block), kind, card);
  });
  return counts;
}

// The tile fills left to right with this round's 认识 cards (green), then the
// block's 模糊 (amber) and 不认识 (red) cards; its border takes the most urgent
// of those colours, so the page reads as a progress map at a glance.
function blockTileState(isDone, fuzzy, unknown) {
  if (unknown) return "unknown";
  if (fuzzy) return "fuzzy";
  return isDone ? "done" : "";
}

function renderBlockPage() {
  if (!blockPageDeck || !extraElements.blockGrid) return;
  const tabDeck = blockPageDeck;
  const counts = blockPageCounts(tabDeck);
  const isGrammar = cardFamilyForDeck(tabDeck).startsWith("grammar-");
  const level = cardFamilyForDeck(tabDeck).slice(-2);
  extraElements.blockGrid.dataset.level = level;
  extraElements.blockGrid.classList.toggle("is-grammar", isGrammar);
  const tiles = [{ id: "", label: "全部" }, ...deckBlocks(tabDeck)].map(({ id, label }) => {
    const deck = blockDeckOf(tabDeck, id);
    const pools = counts.get(deck) || { main: [], fuzzy: [], unknown: [] };
    const left = remainingCount(deck, pools.main);
    const total = pools.main.length + pools.fuzzy.length + pools.unknown.length;
    const rounds = getRoundCount(deck);
    const isDone = total > 0 && left === 0;
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "block-tile";
    tile.dataset.block = id;
    tile.classList.toggle("is-all", !id);
    const known = pools.main.length - left;
    const share = (count) => (total ? (count / total) * 100 : 0);
    const state = blockTileState(isDone, pools.fuzzy.length, pools.unknown.length);
    if (state) tile.dataset.state = state;
    tile.style?.setProperty("--fill-known", `${share(known)}%`);
    tile.style?.setProperty("--fill-fuzzy", `${share(known + pools.fuzzy.length)}%`);
    tile.style?.setProperty("--fill-unknown", `${share(known + pools.fuzzy.length + pools.unknown.length)}%`);
    const isActive = baseDeckOf(activeDeck) === deck;
    tile.classList.toggle("active", isActive);
    tile.setAttribute("aria-pressed", String(isActive));
    tile.setAttribute(
      "aria-label",
      [
        `${id ? (isGrammar ? label : `第${id}块`) : "全部"}，共 ${total} 张`,
        isDone ? "这一轮已完成" : `当前剩 ${left} 张`,
        pools.fuzzy.length ? `模糊 ${pools.fuzzy.length} 张` : "",
        pools.unknown.length ? `不认识 ${pools.unknown.length} 张` : "",
        rounds ? `已完成 ${rounds} 轮` : "",
      ].filter(Boolean).join("，"),
    );
    const name = document.createElement("span");
    name.className = "block-name";
    name.textContent = label;
    const roundBadge = document.createElement("span");
    roundBadge.className = "deck-round-count";
    roundBadge.textContent = `${rounds}轮`;
    roundBadge.hidden = rounds === 0;
    const status = document.createElement("span");
    status.className = "block-status";
    status.setAttribute("aria-hidden", "true");
    status.textContent = isDone ? "✓ 完成" : `剩 ${left}`;
    tile.append(name, roundBadge, status);
    tile.addEventListener("click", () => runSafely(() => selectDeck(deck)));
    return tile;
  });
  extraElements.blockGrid.replaceChildren(...tiles);
}

function activeBlockTile() {
  if (!blockPageDeck) return null;
  return [...extraElements.blockGrid.children].find((tile) => tile.classList.contains("active")) || null;
}

function openBlockPage(tabDeck, options = {}) {
  blockPageDeck = tabDeck;
  extraElements.deckTabs.hidden = true;
  extraElements.blockGrid.hidden = false;
  extraElements.deckSidebarTitle.textContent = moduleTitleFor(tabDeck);
  elements.closeDeckMenu.setAttribute("aria-label", "返回模块");
  elements.closeDeckMenu.title = "返回模块";
  renderBlockPage();
  extraElements.blockGrid.scrollTop = 0;
  const activeTile = activeBlockTile();
  activeTile?.scrollIntoView?.({ block: "nearest" });
  if (options.focus !== false) focusSoon(activeTile || extraElements.blockGrid.children[0]);
}

function closeBlockPage(options = {}) {
  if (!blockPageDeck) return;
  const tabDeck = blockPageDeck;
  blockPageDeck = "";
  extraElements.deckTabs.hidden = false;
  extraElements.blockGrid.hidden = true;
  extraElements.blockGrid.replaceChildren();
  extraElements.deckSidebarTitle.textContent = "学习模块";
  elements.closeDeckMenu.setAttribute("aria-label", "返回学习");
  elements.closeDeckMenu.title = "返回学习";
  if (options.restoreFocus !== false) {
    focusSoon([...elements.tabs].find((tab) => tab.dataset.deck === tabDeck));
  }
}

// One old grammar group choice per level becomes the matching block, so a
// learner who was studying a group stays in it.
function migrateRetiredGrammarGroups() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(RETIRED_GRAMMAR_GROUP_STATE_KEY) || "null");
    localStorage.removeItem(RETIRED_GRAMMAR_GROUP_STATE_KEY);
  } catch {
    // Without it the learner starts from the 全部 block.
  }
  const group = isStoreObject(saved) ? saved[cardFamilyForDeck(activeDeck)] : null;
  if (typeof group !== "string" || blockOf(activeDeck) || !hasBlocks(activeDeck)) return;
  const migrated = poolOf(blockDeckOf(tabDeckOf(activeDeck), group), poolKindOf(activeDeck));
  if (isKnownDeck(migrated)) activeDeck = migrated;
}

// Loads the study data listed in #studyDataScripts in order, after the first
// card is up; a deck waiting on it starts once everything has arrived.
function loadStudyData() {
  if (studyDataState !== "loading") return;
  const sources = [...(studyDataTemplate.content?.querySelectorAll("script[src]") || [])].map(
    (script) => script.getAttribute("src"),
  );
  let remaining = sources.length;
  if (!remaining) {
    finishStudyDataLoad();
    return;
  }
  const settle = () => {
    remaining -= 1;
    if (remaining === 0) runSafely(finishStudyDataLoad);
  };
  sources.forEach((source) => {
    const script = document.createElement("script");
    script.src = source;
    // Dynamically added scripts run in insertion order only when not async;
    // card-data.js comes last and reads everything before it.
    script.async = false;
    script.addEventListener("load", settle, { once: true });
    script.addEventListener("error", settle, { once: true });
    document.head.append(script);
  });
}

function finishStudyDataLoad() {
  cardData = window.AYAYA_JP_CARD_DATA || null;
  studyDataState = cardData ? "ready" : "failed";
  renderLoadStatus();
  renderBlockPage();
  if (cardFamilyForDeck(activeDeck) === "kana") {
    render();
    return;
  }
  const hadFocusInStudy =
    document.activeElement?.closest?.("#emptyState") === elements.emptyState;
  nextCard();
  if (hadFocusInStudy) focusPrimaryStudyAction();
}

// Optional module-page extras; a page without them still runs.
const extraElements = {
  blockGrid: document.querySelector("#blockGrid"),
  blockNext: document.querySelector("#blockNext"),
  deckSidebarTitle: document.querySelector("#deckSidebarTitle"),
  deckTabs: document.querySelector(".deck-tabs"),
  emptyTitle: document.querySelector("#emptyTitle"),
  silentModeHint: document.querySelector("#silentModeHint"),
};

// Asked once the learner rates a card, so a browser that prompts for it
// (Firefox) does so only for someone actually studying here.
let persistentStorageRequested = false;
function requestPersistentStorage() {
  if (persistentStorageRequested) return;
  persistentStorageRequested = true;
  try {
    navigator.storage?.persist?.().catch(() => {});
  } catch {
    // Browsers without the Storage API keep the default eviction policy.
  }
}

// The ambient audio session follows the iPhone silent switch (see preferMixedAudio).
function showSilentModeHint() {
  if (!extraElements.silentModeHint || typeof navigator === "undefined") return;
  const isAppleTouch =
    /iP(hone|ad|od)/u.test(navigator.userAgent || "") ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  extraElements.silentModeHint.hidden = !isAppleTouch;
}

function assertRequiredElements() {
  const missing = Object.entries(elements)
    .filter(([, value]) => !value)
    .map(([name]) => name);
  if (missing.length) {
    throw new Error(`Required UI elements are missing: ${missing.join(", ")}`);
  }
}

function finishLoadingStatus() {
  elements.studyArea.setAttribute("aria-busy", "false");
  elements.appStatus.hidden = true;
}

function showFatalError(error) {
  console.error("Failed to initialize AyayaJp:", error);
  elements.studyArea?.setAttribute("aria-busy", "false");
  elements.studyArea?.classList.remove("is-picking");
  if (elements.studyCard) elements.studyCard.inert = false;
  if (elements.emptyState) elements.emptyState.inert = false;
  if (elements.deckSidebar) {
    elements.deckSidebar.classList.remove("is-open");
    elements.deckSidebar.inert = true;
    elements.deckSidebar.setAttribute("aria-hidden", "true");
  }
  if (elements.deckMenuButton) elements.deckMenuButton.setAttribute("aria-expanded", "false");
  if (elements.studyCard) elements.studyCard.hidden = false;
  if (elements.emptyState) elements.emptyState.hidden = true;
  if (elements.appStatus) elements.appStatus.hidden = true;

  let fatalBanner = elements.fatalErrorBanner;
  if (!fatalBanner) {
    fatalBanner = document.createElement("div");
    fatalBanner.className = "fatal-error-banner";
    fatalBanner.setAttribute("role", "alert");
    fatalBanner.tabIndex = -1;
    document.body.prepend(fatalBanner);
  }
  fatalBanner.hidden = false;
  fatalBanner.textContent =
    "应用未能启动。请刷新页面；如果问题持续，请确认所有本地资源都能正常加载。";
  fatalBanner.focus();
}

function runSafely(action) {
  try {
    return action();
  } catch (error) {
    showFatalError(error);
    return undefined;
  }
}

function canPreserveUndoAfterStorage(snapshot, previousSyncedStore, remoteStore, mergedStore) {
  if (!snapshot?.appliedEventId) return false;
  const ownEventRemains =
    compactCardState(mergedStore[snapshot.cardId])?.lastEvent?.eventId === snapshot.appliedEventId;
  if (!ownEventRemains) return false;

  const previousDeckRound = previousSyncedStore?.[ROUND_STATE_KEY]?.decks?.[snapshot.deck];
  const remoteDeckRound = remoteStore?.[ROUND_STATE_KEY]?.decks?.[snapshot.deck];
  return valuesEqual(previousDeckRound, remoteDeckRound);
}

// A hidden tab only notes the latest write from another tab and merges it when
// it is shown again: each write is merged against the last synced store, so the
// skipped intermediate versions are contained in the latest one. Merging a
// full store on every rating made every background tab busy for ~0.2 s.
let pendingStorageEvent = null;

function handlePendingStorageChange() {
  if (!pendingStorageEvent || document.visibilityState === "hidden") return;
  const event = pendingStorageEvent;
  pendingStorageEvent = null;
  handleStoreStorageChange(event);
}

function handleStoreStorageChange(event) {
  if (event.key !== STORAGE_KEY) return;
  if (document.visibilityState === "hidden") {
    pendingStorageEvent = { key: event.key, newValue: event.newValue };
    return;
  }
  pendingStorageEvent = null;

  let remoteStore;
  try {
    remoteStore =
      event.newValue === null ? {} : compactStoreForPersistence(JSON.parse(event.newValue));
  } catch {
    return;
  }
  if (!isStoreObject(remoteStore)) return;
  if (isClearlyStaleStore(remoteStore)) return;

  const previousCard = currentCard;
  const pendingUndo = lastReview;
  const previousSyncedStore = cloneStore(lastSyncedStore);
  const previousChoiceOptions = currentChoiceOptions;
  const previousSelectedChoiceId = selectedChoiceId;
  const previousRevealState = isRevealed;
  const focusWasOnUndo = document.activeElement === elements.undoRating;
  const focusWasInEmptyState =
    document.activeElement?.closest?.("#emptyState") === elements.emptyState;
  const focusWasInStudyCard =
    document.activeElement?.closest?.("#studyCard") === elements.studyCard;
  store = mergeStoreVersions(lastSyncedStore, store, remoteStore);
  // Read-only from here on, so it doubles as the merge base and the cached
  // parse of what storage now holds.
  lastSyncedStore = remoteStore;
  if (event.newValue !== null) rememberPersistedStore(event.newValue, remoteStore);
  recordStoreRevision(remoteStore);
  const needsReconciliation = !storesSemanticallyEqual(store, remoteStore);
  if (needsReconciliation) {
    saveStore();
  } else {
    store[STORE_META_KEY] = cloneStore(remoteStore[STORE_META_KEY]);
  }
  lastReview = canPreserveUndoAfterStorage(
    pendingUndo,
    previousSyncedStore,
    remoteStore,
    store,
  )
    ? pendingUndo
    : null;
  syncSessionRoundState({ preserveActiveDeck: true });
  buildQueue();

  const queuedCard = previousCard
    ? reviewQueue.find((card) => card.id === previousCard.id)
    : null;
  const currentDataCard = previousCard
    ? getFamilyCards(previousCard.deck).find((card) => card.id === previousCard.id)
    : null;
  const latestStoredReview = previousCard
    ? compactCardState(store[previousCard.id])?.lastEvent
    : null;
  const canRetainChoiceResult = Boolean(
    currentDataCard?.isChoice &&
      previousRevealState &&
      previousSelectedChoiceId &&
      previousChoiceOptions.some((choice) => choice.id === previousSelectedChoiceId) &&
      latestStoredReview?.choiceId === previousSelectedChoiceId,
  );
  const retainedCard = queuedCard || (canRetainChoiceResult ? currentDataCard : null);
  if (retainedCard) {
    currentCard = retainedCard;
    currentChoiceOptions = previousChoiceOptions;
    selectedChoiceId = previousSelectedChoiceId;
    isRevealed = previousRevealState;
  } else {
    cancelSpeech();
    currentCard = reviewQueue[0] || null;
    currentChoiceOptions = currentCard?.isChoice ? buildChoiceOptions(currentCard) : [];
    selectedChoiceId = null;
    choiceHintShown = false;
    isRevealed = false;
  }
  render();
  if (focusWasOnUndo && lastReview) {
    focusSoon(elements.undoRating);
  } else if (focusWasInStudyCard || focusWasOnUndo || focusWasInEmptyState) {
    focusPrimaryStudyAction();
  }
}

const ratingShortcuts = { 1: "clear", 2: "unsure", 3: "forgot" };

// 1/2/3 rate a revealed card (认识/模糊/不认识); 1–4 pick a choice (A–D) before it is answered.
function handleStudyShortcut(event) {
  if (event.defaultPrevented || event.repeat || event.isComposing) return;
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (!currentCard || elements.deckSidebar.classList.contains("is-open")) return;
  if (event.target.closest?.("input, textarea, select, [contenteditable='true']")) return;

  if (currentCard.isChoice) {
    if (!isRevealed && event.key === "h" && currentCard.hint && !choiceHintShown) {
      event.preventDefault();
      showChoiceHint();
      return;
    }
    if (isRevealed || !/^[1-4]$/.test(event.key)) return;
    const choice = currentChoiceOptions[Number(event.key) - 1];
    if (!choice) return;
    event.preventDefault();
    selectChoice(choice.id);
    return;
  }

  const rating = ratingShortcuts[event.key];
  if (!isRevealed || !rating) return;
  event.preventDefault();
  rateCurrentCard(rating);
}

function bindInteractions() {
  elements.cardReveal.addEventListener("click", revealCard);
  elements.studyCard.addEventListener("click", revealFromStudySurface);
  window.addEventListener("popstate", (event) =>
    runSafely(() => handleSidebarHistoryChange(event)),
  );
  window.addEventListener("storage", (event) => runSafely(() => handleStoreStorageChange(event)));
  document.addEventListener("visibilitychange", () => runSafely(handlePendingStorageChange));
  document.addEventListener("keydown", (event) => runSafely(() => handleStudyShortcut(event)));

  elements.choiceHintToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(showChoiceHint);
  });

  elements.feedbackButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => rateCurrentCard(button.dataset.rating));
    });
  });

  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      runSafely(() => {
        const nextDeck = tab.dataset.deck;
        if (hasBlocks(nextDeck) && extraElements.blockGrid) openBlockPage(nextDeck);
        else selectDeck(nextDeck);
      });
    });
  });

  poolTabs().forEach(({ kind, tab }) => {
    tab.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => {
        setSidebarOpen(false, { restoreFocus: false });
        switchPool(kind);
      });
    });
  });

  elements.speakWord.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(speakCurrentCard);
  });

  elements.undoRating.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(undoLastReview);
  });

  elements.choiceNext.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(() => {
      nextCard();
      focusPrimaryStudyAction({ preferUndo: true });
    });
  });

  elements.studyAnyWay.addEventListener("click", () => {
    runSafely(restartDeckRound);
  });

  extraElements.blockNext?.addEventListener("click", () => {
    runSafely(() => {
      const deck = nextBlockDeck();
      if (deck) selectDeck(deck);
    });
  });

  elements.deckMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(() => setSidebarOpen(!elements.deckSidebar.classList.contains("is-open")));
  });

  elements.closeDeckMenu.addEventListener("click", () => {
    runSafely(() => {
      if (blockPageDeck) closeBlockPage();
      else setSidebarOpen(false);
    });
  });

  elements.deckSidebar.addEventListener("keydown", (event) =>
    runSafely(() => handleSidebarKeydown(event)),
  );
}

function initializeApp() {
  assertRequiredElements();
  preferMixedAudio();
  bindViewportHeight();
  bindInputModality();
  elements.answerPanel.setAttribute("role", "region");
  elements.answerPanel.setAttribute("aria-label", "答案区域");
  elements.answerPanel.setAttribute("aria-live", "polite");
  elements.answerPanel.setAttribute("aria-atomic", "false");
  elements.answerPanel.tabIndex = -1;
  elements.roundStatusText.setAttribute("role", "status");
  elements.roundStatusText.setAttribute("aria-live", "polite");
  elements.roundStatusText.setAttribute("aria-atomic", "true");
  bindInteractions();
  showSilentModeHint();
  loadRoundState();
  migrateRetiredGrammarGroups();
  if (isDeckDataMissing(activeDeck)) {
    activeDeck = "hiragana";
  }
  rememberStartFamily();
  clearRetiredSidebarState();
  setSidebarOpen(isSidebarHistoryEntry(), { restoreFocus: false, syncHistory: false });
  renderLoadStatus();
  nextCard();
  if (storeNeedsCompaction) saveStore();
  finishLoadingStatus();
  loadStudyData();
}

runSafely(initializeApp);

// sw.js keeps an offline copy and makes repeat visits instant. Only on https
// (and localhost): the plain-http test server keeps every request visible.
if (
  typeof navigator !== "undefined" &&
  "serviceWorker" in navigator &&
  (location.protocol === "https:" || location.hostname === "localhost")
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Without it the app works exactly as before, only not offline.
    });
  });
}
