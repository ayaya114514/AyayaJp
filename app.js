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

const cardData = window.AYAYA_JP_CARD_DATA;
const isCardDataMissing = !cardData;
const isN5VocabDataMissing =
  !Array.isArray(window.AYAYA_N5_CODEX_VOCAB?.entries) ||
  window.AYAYA_N5_CODEX_VOCAB.entries.length === 0;
const isN4VocabDataMissing =
  !Array.isArray(window.AYAYA_N4_CODEX_VOCAB?.entries) ||
  window.AYAYA_N4_CODEX_VOCAB.entries.length === 0;
const isGrammarDataMissing =
  !Array.isArray(window.AYAYA_GRAMMAR_DATA?.entries) ||
  window.AYAYA_GRAMMAR_DATA.entries.length === 0;
const cardFamilyCache = new Map();
// Pre-rendered VOICEVOX clips (audio-manifest.js); texts without one use speechSynthesis.
const audioClips =
  typeof window.AYAYA_AUDIO?.keys === "string" && typeof window.AYAYA_AUDIO.directory === "string"
    ? {
        directory: window.AYAYA_AUDIO.directory,
        keys: new Set(window.AYAYA_AUDIO.keys.split(" ").filter(Boolean)),
      }
    : null;

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
  deck = baseDeckOf(deck);
  if (["hiragana", "katakana", "romaji", "special"].includes(deck)) return "kana";
  if (["vocab-ja-zh", "vocab-zh-ja"].includes(deck)) return "vocab-n5";
  if (["vocab-n4-ja-zh", "vocab-n4-zh-ja"].includes(deck)) return "vocab-n4";
  if (deck.startsWith("grammar-n5-")) return "grammar-n5";
  if (deck.startsWith("grammar-n4-")) return "grammar-n4";
  return null;
}

function buildCardFamily(family) {
  if (!cardData) return [];
  if (family === "kana") return cardData.makeKanaCards();
  if (family === "vocab-n5") return cardData.makeVocabCards("N5");
  if (family === "vocab-n4") return cardData.makeVocabCards("N4");
  if (family === "grammar-n5") return cardData.makeGrammarCards("N5");
  if (family === "grammar-n4") return cardData.makeGrammarCards("N4");
  return [];
}

function getFamilyCards(deck) {
  const family = cardFamilyForDeck(deck);
  if (!family) return [];
  if (!cardFamilyCache.has(family)) {
    const familyCards = buildCardFamily(family);
    cardFamilyCache.set(family, familyCards);
    migrateLegacyCardState(familyCards);
  }
  return cardFamilyCache.get(family);
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

function cloneStore(value) {
  if (value === undefined) return undefined;
  try {
    return JSON.parse(JSON.stringify(value || {}));
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

function valuesEqual(left, right) {
  const normalize = (value) => {
    if (Array.isArray(value)) return value.map(normalize);
    if (!isStoreObject(value)) return value;
    return Object.keys(value)
      .sort()
      .reduce((result, key) => {
        result[key] = normalize(value[key]);
        return result;
      }, {});
  };
  return JSON.stringify(normalize(left)) === JSON.stringify(normalize(right));
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
  const leftContent = cloneStore(left) || {};
  const rightContent = cloneStore(right) || {};
  delete leftContent[STORE_META_KEY];
  delete rightContent[STORE_META_KEY];
  return valuesEqual(leftContent, rightContent);
}

function readPersistedStoreForMerge() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return isStoreObject(parsed) ? compactStoreForPersistence(parsed) : {};
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
  return compacted.reviews > 0 || compacted.lastRating || compacted.lastEvent ? compacted : null;
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

function latestCardState(localState, remoteState) {
  const candidates = [compactCardState(localState), compactCardState(remoteState)].filter(Boolean);
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
  const localDelta = reviewCount(local) - reviewCount(base);
  const remoteDelta = reviewCount(remote) - reviewCount(base);
  const localEventKey = ratingEventKey(local.lastEvent);
  const remoteEventKey = ratingEventKey(remote.lastEvent);
  const baseEventKey = ratingEventKey(base.lastEvent);
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

  return {
    ...latest,
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
    const localChanged = !valuesEqual(localDeck, baseDeck);
    const remoteChanged = !valuesEqual(remoteDeck, baseDeck);
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
      !valuesEqual(localDeck, remoteDeck) &&
      ((localChanged && remoteChanged) || bothHaveCompletionOperations)
    ) {
      decks[deck] = mergeConcurrentDeckRound(
        deck,
        baseDeck,
        localDeck,
        remoteDeck,
        cardStates,
      );
    } else if (localChanged) {
      decks[deck] = normalizeDeckRound(localDeck, cardStates, deck);
    } else if (remoteChanged) {
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
  const keys = new Set([...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)]);

  keys.delete(STORE_META_KEY);
  keys.delete(ROUND_STATE_KEY);
  keys.forEach((key) => {
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
  const mergeBase = cloneStore(lastSyncedStore);
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

      localStorage.setItem(STORAGE_KEY, JSON.stringify(candidate));
      const readBack = readPersistedStoreForMerge();
      recordStoreRevision(readBack);
      if (readBack[STORE_META_KEY]?.writeToken === writeToken) {
        store = candidate;
        lastSyncedStore = cloneStore(candidate);
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

function knownDecks() {
  return new Set(
    [...elements.tabs]
      .map((tab) => tab.dataset.deck)
      .filter(Boolean)
      .flatMap((deck) => POOL_KINDS.map((kind) => poolOf(deck, kind))),
  );
}

function isVocabDeck(deck) {
  return deck.startsWith("vocab-");
}

function isGrammarDeck(deck) {
  return deck.startsWith("grammar-");
}

function isN4VocabDeck(deck) {
  return cardFamilyForDeck(deck) === "vocab-n4";
}

function isN5VocabDeck(deck) {
  return cardFamilyForDeck(deck) === "vocab-n5";
}

function isDeckDataMissing(deck) {
  if (isCardDataMissing) return true;
  if (isN4VocabDeck(deck)) return isN4VocabDataMissing;
  if (isN5VocabDeck(deck)) return isN5VocabDataMissing;
  if (isGrammarDeck(deck)) return isGrammarDataMissing;
  return false;
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
  if (isCardDataMissing) {
    messages.push("卡片脚本加载失败，请确认 card-data.js 已正确加载。");
  }
  if (!isCardDataMissing && isN5VocabDataMissing) {
    messages.push("N5 词库加载失败，请确认 n5-codex-vocab.js 已正确加载。假名模块仍可使用。");
  }
  if (!isCardDataMissing && isN4VocabDataMissing) {
    messages.push("N4 词库加载失败，请确认 ayaya-n4-codex-vocab.js 已正确加载。其他模块仍可使用。");
  }
  if (!isCardDataMissing && isGrammarDataMissing) {
    messages.push("语法数据加载失败，请确认 grammar-data.js 已正确加载。其他模块仍可使用。");
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

  const deckNames = knownDecks();
  const storedActiveDeck =
    LEGACY_MISTAKE_DECKS[roundState.activeDeck] || roundState.activeDeck;
  if (!preserveActiveDeck && deckNames.has(storedActiveDeck)) {
    activeDeck = storedActiveDeck;
  }

  Object.entries(roundState.decks || {}).forEach(([deck, state]) => {
    if (!deckNames.has(deck) || !state || typeof state !== "object") return;
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

function saveRoundState() {
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
  const targetIds = new Set(aliasMap.values());
  targetIds.forEach((targetId) => {
    const legacyIds = [...aliasMap.entries()]
      .filter(([, mappedId]) => mappedId === targetId)
      .map(([legacyId]) => legacyId);
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

// A card's latest rating decides its pool, so every rating moves it immediately.
function cardPoolKind(card) {
  const rating = compactCardState(store[card.id])?.lastRating;
  if (FUZZY_RATINGS.has(rating)) return "fuzzy";
  if (UNKNOWN_RATINGS.has(rating)) return "unknown";
  return "main";
}

function getDeckCards(deck = activeDeck) {
  const baseDeck = baseDeckOf(deck);
  const kind = poolKindOf(deck);
  return getFamilyCards(deck).filter((card) => card.deck === baseDeck && cardPoolKind(card) === kind);
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

function shuffleCards(deckCards, previousOrder = []) {
  const shuffledIds = shuffleList(deckCards).map((card) => card.id);
  return avoidSameOrder(shuffledIds, previousOrder);
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
    : new Set(
        isReviewPool(activeDeck)
          ? []
          : deckCards.filter((card) => getState(card.id).reviews > 0).map((card) => card.id),
      );
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
// never opened yet treats reviewed main-pool cards as done, like buildQueue).
function remainingCount(deck) {
  if (deck === activeDeck) return reviewQueue.length;
  const deckCards = getDeckCards(deck);
  const completedIds =
    sessionCompleted[deck] instanceof Set
      ? sessionCompleted[deck]
      : new Set(
          isReviewPool(deck)
            ? []
            : deckCards.filter((card) => getState(card.id).reviews > 0).map((card) => card.id),
        );
  return deckCards.filter((card) => !completedIds.has(card.id)).length;
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
    const isActive = tab.dataset.deck === baseDeckOf(activeDeck);
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
    ["vocab-zh-ja", "vocab-n4-zh-ja", "grammar-n5-zh-ja", "grammar-n4-zh-ja"].includes(
      currentCard.deck,
    ),
  );
  elements.cardPrompt.textContent = currentCard.prompt;
  elements.cardPrompt.lang = currentCard.promptLang || "";
  const hidesPromptReading =
    currentCard.isVocab &&
    !currentCard.showsReadingOnFront &&
    ["vocab-ja-zh", "vocab-n4-ja-zh"].includes(currentCard.deck);
  const showsCardSubtle = Boolean(currentCard.subtle) && !hidesPromptReading;
  const cardTag = cardTagFor(
    currentCard,
    `${elements.moduleTitle.textContent} ${showsCardSubtle ? currentCard.subtle : ""}`,
  );
  elements.cardType.textContent = cardTag;
  elements.cardType.hidden = !cardTag;
  // Grammar sentence cards lead with their pattern in large type and show the
  // sentence as a smaller line under it; other cards keep the subtitle below.
  const showsPattern = showsCardSubtle && isGrammarSentenceCard(currentCard);
  const showsBelow = showsCardSubtle && !showsPattern;
  elements.flashcard.classList.toggle("is-pattern-first", showsPattern);
  elements.cardPattern.textContent = showsPattern ? currentCard.subtle : "";
  elements.cardPattern.lang = showsPattern ? currentCard.subtleLang || "" : "";
  elements.cardPattern.hidden = !showsPattern;
  elements.cardSubtle.textContent = showsBelow ? currentCard.subtle : "";
  elements.cardSubtle.lang = showsBelow ? currentCard.subtleLang || "" : "";
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
  const canUseSpeech = supportsSpeech() || Boolean(canSpeak && audioClipUrl(speakerText));
  elements.speakWord.hidden = !canSpeak;
  // With no subtitle beside it the speaker moves to the band's top-right
  // corner, opposite the undo "<", instead of taking a row of its own.
  elements.flashcard.classList.toggle("speaker-corner", !showsBelow);
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
  elements.answerMain.textContent = answerRepeatedInMeta(currentCard) ? "" : currentCard.answer;
  elements.answerMain.lang = currentCard.answerLang || "";
  renderMeta(currentCard.meta);
  const hasExample = Boolean(currentCard.examples?.length);
  elements.exampleBlock.hidden = !hasExample;
  if (hasExample) {
    renderExamples(currentCard.examples);
  }
}

// "N5 词汇 · 日→中" from the module page's row and cell labels; read out with the
// progress counts and used to drop card tags that repeat the module name.
function moduleTitleFor(deck) {
  const tab = [...elements.tabs].find((item) => item.dataset.deck === baseDeckOf(deck));
  const row = tab?.closest(".deck-row")?.querySelector(".deck-row-title")?.textContent?.trim();
  const label = tab?.querySelector(".deck-label")?.textContent?.trim();
  return [row, label, isReviewPool(deck) ? POOL_NAMES[poolKindOf(deck)] : ""].filter(Boolean).join(" · ");
}

// The card's learning category (搭配, 表达, 拗音...) without the level and
// direction that the module title already shows; hidden when the title or the
// visible subtitle already says it.
function isGrammarSentenceCard(card) {
  return Boolean(card.isGrammar && /-(?:zh-ja|ja-zh)$/u.test(card.deck));
}

function cardTagFor(card, shownText) {
  const tag = String(card.type || "")
    .replace(/^N[45]\s+/u, "")
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

function appendRuby(parent, text, reading) {
  const ruby = document.createElement("ruby");
  ruby.append(document.createTextNode(text));
  const rt = document.createElement("rt");
  rt.textContent = reading;
  ruby.append(rt);
  parent.append(ruby);
}

// card-data.js segments each example with the same context-guarded readings
// used for romaji; text that no reviewed reading covers stays unannotated.
function renderFurigana(parent, text, rubySegments) {
  parent.replaceChildren();
  const segments = Array.isArray(rubySegments) ? rubySegments : [];
  if (segments.map(([surface]) => surface).join("") !== text) {
    parent.textContent = text;
    return;
  }
  segments.forEach(([surface, reading]) => {
    if (reading) appendRuby(parent, surface, reading);
    else parent.append(document.createTextNode(surface));
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
    renderFurigana(ja, example.ja, example.ruby);

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
    text.lang = "zh-CN";

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
  const kind = poolKindOf(activeDeck);
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

function selectChoice(choiceId) {
  if (!currentCard?.isChoice || isRevealed || selectedChoiceId) return;

  const choice = currentChoiceOptions.find((item) => item.id === choiceId);
  if (!choice) return;

  const correctIndex = currentChoiceOptions.findIndex((item) => item.isCorrect);
  selectedChoiceId = choice.id;
  isRevealed = true;
  const rating = choice.isCorrect ? "correct" : "wrong";
  applyRating(rating, {
    choiceId: choice.id,
    correctChoiceIndex: correctIndex,
    correctChoiceId: currentCard.correctChoiceId,
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
    store[snapshot.cardId] = cloneStore(snapshot.previousState);
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

  if (isOpen) {
    window.requestAnimationFrame(() => {
      if (elements.deckSidebar.classList.contains("is-open") && !elements.deckSidebar.inert) {
        elements.closeDeckMenu.focus();
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
    setSidebarOpen(false);
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

function audioClipUrl(text) {
  if (!audioClips || typeof Audio !== "function") return null;
  const key = audioClipKey(text);
  return audioClips.keys.has(key) ? `./${audioClips.directory}${key}.mp3` : null;
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
  ].forEach(preloadClip);
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
  const clipUrl = audioClipUrl(text);
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

// Optional module-page extras; a page without them still runs.
const extraElements = {
  exportProgress: document.querySelector("#exportProgress"),
  importProgress: document.querySelector("#importProgress"),
  importProgressFile: document.querySelector("#importProgressFile"),
  silentModeHint: document.querySelector("#silentModeHint"),
};
const PROGRESS_FILE_APP = "AyayaJp";

// Progress lives only in this browser's localStorage, which Safari clears for
// sites unvisited for a while; a file export moves it to another browser or
// restores it after such a loss.
function exportProgress() {
  const payload = {
    app: PROGRESS_FILE_APP,
    format: 1,
    exportedAt: new Date().toISOString(),
    progress: compactStoreForPersistence(store),
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `AyayaJp-progress-${payload.exportedAt.slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// An imported file replaces this browser's progress. It is written with a
// revision above every known one so open tabs adopt it, then the page reloads.
function importProgressText(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    payload = null;
  }
  if (payload?.app !== PROGRESS_FILE_APP || !isStoreObject(payload.progress)) {
    window.alert("这不是 AyayaJp 导出的进度文件。");
    return false;
  }
  if (!window.confirm("导入会替换这个浏览器里现在的学习进度，确定吗？")) return false;
  const imported = compactStoreForPersistence(payload.progress);
  const revision = Math.max(storeRevision(store), storeRevision(imported), storeRevision(readPersistedStoreForMerge())) + 1;
  imported[STORE_META_KEY] = {
    schemaVersion: STORE_SCHEMA_VERSION,
    savedAt: Date.now(),
    writerId: `import-${storeWriterId}`,
    revision,
    writeToken: `import-${storeWriterId}:${revision}`,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
  } catch (error) {
    window.alert(`浏览器无法保存导入的进度（${error.name || "storage error"}）。`);
    return false;
  }
  window.location.reload();
  return true;
}

function bindProgressBackup() {
  const { exportProgress: exportButton, importProgress: importButton, importProgressFile: fileInput } =
    extraElements;
  exportButton?.addEventListener("click", () => runSafely(exportProgress));
  if (!importButton || !fileInput) return;
  importButton.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    const [file] = fileInput.files || [];
    fileInput.value = "";
    if (!file) return;
    file.text().then(
      (text) => runSafely(() => importProgressText(text)),
      () => window.alert("无法读取这个文件。"),
    );
  });
}

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

function handleStoreStorageChange(event) {
  if (event.key !== STORAGE_KEY) return;

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
  lastSyncedStore = cloneStore(remoteStore);
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
  document.addEventListener("keydown", (event) => runSafely(() => handleStudyShortcut(event)));

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
        if (nextDeck !== activeDeck) clearLastReview();
        activeDeck = nextDeck;
        saveRoundState();
        setSidebarOpen(false, { restoreFocus: false });
        nextCard();
        focusPrimaryStudyAction();
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

  elements.deckMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(() => setSidebarOpen(!elements.deckSidebar.classList.contains("is-open")));
  });

  elements.closeDeckMenu.addEventListener("click", () => {
    runSafely(() => setSidebarOpen(false));
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
  bindProgressBackup();
  showSilentModeHint();
  loadRoundState();
  if (isDeckDataMissing(activeDeck)) {
    activeDeck = "hiragana";
  }
  clearRetiredSidebarState();
  setSidebarOpen(isSidebarHistoryEntry(), { restoreFocus: false, syncHistory: false });
  renderLoadStatus();
  nextCard();
  if (storeNeedsCompaction) saveStore();
  finishLoadingStatus();
}

runSafely(initializeApp);
