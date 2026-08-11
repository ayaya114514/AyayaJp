const STORAGE_KEY = "ayaya-jp-srs-v1";
const ROUND_STATE_KEY = "__rounds";
const SIDEBAR_STATE_KEY = "ayaya-jp-sidebar-v1";
const SIDEBAR_HISTORY_STATE_KEY = "__ayayaJpSidebarOpen";
const STORE_META_KEY = "__meta";
const STORE_SCHEMA_VERSION = 4;
const ROUND_QUEUE_ORDER_VERSION = 1;
const VALID_RATINGS = new Set(["clear", "unsure", "forgot", "correct", "wrong"]);

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
const furiganaEntries = cardData?.furiganaEntries || [];
const cardFamilyCache = new Map();

function cardFamilyForDeck(deck) {
  if (["hiragana", "katakana", "romaji", "special"].includes(deck)) return "kana";
  if (["vocab-ja-zh", "vocab-zh-ja", "vocab-mistakes"].includes(deck)) return "vocab-n5";
  if (["vocab-n4-ja-zh", "vocab-n4-zh-ja", "vocab-n4-mistakes"].includes(deck)) {
    return "vocab-n4";
  }
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
  cardPrompt: document.querySelector("#cardPrompt"),
  cardSubtle: document.querySelector("#cardSubtle"),
  choiceBlock: document.querySelector("#choiceBlock"),
  choiceFeedback: document.querySelector("#choiceFeedback"),
  choiceList: document.querySelector("#choiceList"),
  choiceNext: document.querySelector("#choiceNext"),
  deckGroupToggles: document.querySelectorAll(".deck-group-toggle"),
  deckLevelToggles: document.querySelectorAll(".deck-level-toggle"),
  dueCount: document.querySelector("#dueCount"),
  emptyDeckMenuButton: document.querySelector("#emptyDeckMenuButton"),
  emptyState: document.querySelector("#emptyState"),
  exampleBlock: document.querySelector("#exampleBlock"),
  examplesList: document.querySelector("#examplesList"),
  fatalErrorBanner: document.querySelector("#fatalErrorBanner"),
  flashcard: document.querySelector("#flashcard"),
  closeDeckMenu: document.querySelector("#closeDeckMenu"),
  deckMenuButton: document.querySelector("#deckMenuButton"),
  deckSidebar: document.querySelector("#deckSidebar"),
  loadErrorBanner: document.querySelector("#loadErrorBanner"),
  roundStatusText: document.querySelector("#roundStatusText"),
  reviewedCount: document.querySelector("#reviewedCount"),
  sidebarBackdrop: document.querySelector("#sidebarBackdrop"),
  speechStatus: document.querySelector("#speechStatus"),
  speakWord: document.querySelector("#speakWord"),
  studyAnyWay: document.querySelector("#studyAnyWay"),
  studyArea: document.querySelector(".study-area"),
  studyCard: document.querySelector("#studyCard"),
  tabs: document.querySelectorAll(".tab-button"),
  undoRating: document.querySelector("#undoRating"),
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
let collapsedDeckLevels = loadCollapsedDeckLevels();
let collapsedDeckGroups = loadCollapsedDeckGroups();

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

function loadCollapsedDeckLevels() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SIDEBAR_STATE_KEY));
    return new Set(Array.isArray(parsed?.collapsedLevels) ? parsed.collapsedLevels : []);
  } catch {
    return new Set();
  }
}

function loadCollapsedDeckGroups() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SIDEBAR_STATE_KEY));
    return new Set(Array.isArray(parsed?.collapsedGroups) ? parsed.collapsedGroups : []);
  } catch {
    return new Set();
  }
}

function saveSidebarState() {
  try {
    localStorage.setItem(
      SIDEBAR_STATE_KEY,
      JSON.stringify({
        collapsedGroups: [...collapsedDeckGroups],
        collapsedLevels: [...collapsedDeckLevels],
      }),
    );
  } catch {
    // Sidebar state persistence is optional.
  }
}

function setDeckGroupExpanded(group, isExpanded, options = {}) {
  const shouldSave = options.save !== false;
  const groupName = group?.dataset.group;
  const toggle = group?.querySelector(".deck-group-toggle");
  const items = group?.querySelector(".deck-group-items");
  if (!groupName || !toggle || !items) return;

  toggle.setAttribute("aria-expanded", String(isExpanded));
  items.hidden = !isExpanded;
  group.classList.toggle("is-collapsed", !isExpanded);

  if (isExpanded) {
    collapsedDeckGroups.delete(groupName);
  } else {
    collapsedDeckGroups.add(groupName);
  }
  if (shouldSave) saveSidebarState();
}

function applyDeckGroupState() {
  elements.deckGroupToggles.forEach((toggle) => {
    const group = toggle.closest(".deck-group");
    setDeckGroupExpanded(group, !collapsedDeckGroups.has(group?.dataset.group), { save: false });
  });
}

function setDeckLevelExpanded(level, isExpanded, options = {}) {
  const shouldSave = options.save !== false;
  const levelName = level?.dataset.level;
  const toggle = level?.querySelector(".deck-level-toggle");
  const items = level?.querySelector(".deck-level-items");
  if (!levelName || !toggle || !items) return;

  toggle.setAttribute("aria-expanded", String(isExpanded));
  items.hidden = !isExpanded;
  level.classList.toggle("is-collapsed", !isExpanded);

  if (isExpanded) {
    collapsedDeckLevels.delete(levelName);
  } else {
    collapsedDeckLevels.add(levelName);
  }
  if (shouldSave) saveSidebarState();
}

function applyDeckLevelState() {
  elements.deckLevelToggles.forEach((toggle) => {
    const level = toggle.closest(".deck-level");
    setDeckLevelExpanded(level, !collapsedDeckLevels.has(level?.dataset.level), { save: false });
  });
}

function expandDeckLevelForDeck(deck) {
  const level = [...document.querySelectorAll(".deck-level")].find((item) =>
    [...item.querySelectorAll(".tab-button")].some((tab) => tab.dataset.deck === deck),
  );
  if (level) setDeckLevelExpanded(level, true);
}

function expandDeckGroupForDeck(deck) {
  const group = [...document.querySelectorAll(".deck-group")].find((item) =>
    [...item.querySelectorAll(".tab-button")].some((tab) => tab.dataset.deck === deck),
  );
  if (group) setDeckGroupExpanded(group, true);
}

function expandSidebarForDeck(deck) {
  expandDeckGroupForDeck(deck);
  expandDeckLevelForDeck(deck);
}

function arraysEqual(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

function knownDecks() {
  return new Set([...elements.tabs].map((tab) => tab.dataset.deck).filter(Boolean));
}

function isVocabDeck(deck) {
  return deck.startsWith("vocab-");
}

function isGrammarDeck(deck) {
  return deck.startsWith("grammar-");
}

function isN4VocabDeck(deck) {
  return ["vocab-n4-ja-zh", "vocab-n4-zh-ja", "vocab-n4-mistakes"].includes(deck);
}

function isN5VocabDeck(deck) {
  return ["vocab-ja-zh", "vocab-zh-ja", "vocab-mistakes"].includes(deck);
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
  if (!preserveActiveDeck && deckNames.has(roundState.activeDeck)) {
    activeDeck = roundState.activeDeck;
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
  familyCards.forEach((card) => {
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

  const remapIds = (ids) => [
    ...new Set((Array.isArray(ids) ? ids : []).map((id) => aliasMap.get(id) || id)),
  ];

  Object.keys(sessionQueues).forEach((deck) => {
    const nextQueue = remapIds(sessionQueues[deck]);
    if (!arraysEqual(sessionQueues[deck], nextQueue)) {
      sessionQueues[deck] = nextQueue;
      changed = true;
    }
  });
  Object.keys(sessionCompleted).forEach((deck) => {
    const previous = [...sessionCompleted[deck]];
    const next = remapIds(previous);
    if (!arraysEqual(previous, next)) {
      sessionCompleted[deck] = new Set(next);
      changed = true;
    }
  });
  Object.keys(sessionCompletionEvents).forEach((deck) => {
    const previous = sessionCompletionEvents[deck] || {};
    const next = Object.fromEntries(
      Object.entries(previous).map(([cardId, eventId]) => [aliasMap.get(cardId) || cardId, eventId]),
    );
    if (!valuesEqual(previous, next)) {
      sessionCompletionEvents[deck] = next;
      changed = true;
    }
  });
  Object.keys(sessionReopenedCards).forEach((deck) => {
    const previous = [...sessionReopenedCards[deck]];
    const next = remapIds(previous);
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

function hasMistakeRating(card) {
  return ["unsure", "forgot"].includes(getState(card.id).lastRating);
}

function isMistakeCard(card) {
  return card.isVocab && hasMistakeRating(card);
}

function isN5MistakeCard(card) {
  return isMistakeCard(card) && ["vocab-ja-zh", "vocab-zh-ja"].includes(card.deck);
}

function isN4MistakeCard(card) {
  return isMistakeCard(card) && ["vocab-n4-ja-zh", "vocab-n4-zh-ja"].includes(card.deck);
}

function isGrammarMistakeCard(card) {
  return card.isGrammar && !card.isChoice && hasMistakeRating(card);
}

function isN5GrammarMistakeCard(card) {
  return isGrammarMistakeCard(card) && card.deck.startsWith("grammar-n5-");
}

function isN4GrammarMistakeCard(card) {
  return isGrammarMistakeCard(card) && card.deck.startsWith("grammar-n4-");
}

function getDeckCards(deck = activeDeck) {
  const familyCards = getFamilyCards(deck);
  if (deck === "vocab-mistakes") {
    return familyCards.filter(isN5MistakeCard);
  }

  if (deck === "vocab-n4-mistakes") {
    return familyCards.filter(isN4MistakeCard);
  }

  if (deck === "grammar-n5-mistakes") {
    return familyCards.filter(isN5GrammarMistakeCard);
  }

  if (deck === "grammar-n4-mistakes") {
    return familyCards.filter(isN4GrammarMistakeCard);
  }

  return familyCards.filter((card) => card.deck === deck);
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
        activeDeck.endsWith("-mistakes")
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
      focusSoon(elements.emptyDeckMenuButton);
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

  elements.tabs.forEach((tab) => {
    const isActive = tab.dataset.deck === activeDeck;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  renderDeckRoundCounts();

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
    ["vocab-ja-zh", "vocab-n4-ja-zh"].includes(currentCard.deck);
  const showsCardSubtle = Boolean(currentCard.subtle) && !hidesPromptReading;
  elements.cardSubtle.textContent = showsCardSubtle ? currentCard.subtle : "";
  elements.cardSubtle.lang = showsCardSubtle ? currentCard.subtleLang || "" : "";
  elements.cardSubtle.hidden = !showsCardSubtle;
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
    "cardPrompt",
    showsCardSubtle ? "cardSubtle" : "",
    !isRevealed && !currentCard.isChoice ? "cardRevealHint" : "",
  ].filter(Boolean);
  elements.cardReveal.setAttribute("aria-describedby", revealDescriptionIds.join(" "));
  const canSpeak = Boolean(isRevealed ? primarySpeech(currentCard) : currentCard.frontSpeech);
  const canUseSpeech = supportsSpeech();
  elements.speakWord.hidden = !canSpeak;
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

  if (currentCard.isChoice) {
    renderChoiceCard(currentCard);
    return;
  }

  if (!isRevealed) {
    clearAnswer();
    return;
  }

  elements.feedbackRow.hidden = false;
  elements.answerMain.textContent = currentCard.answer;
  elements.answerMain.lang = currentCard.answerLang || "";
  elements.answerMeta.textContent = currentCard.meta;
  const hasExample = Boolean(currentCard.examples?.length);
  elements.exampleBlock.hidden = !hasExample;
  if (hasExample) {
    renderExamples(currentCard.examples);
  }
}

function containsKanji(text) {
  return /[\u3400-\u9fff]/.test(text);
}

function appendRuby(parent, text, reading) {
  const ruby = document.createElement("ruby");
  ruby.append(document.createTextNode(text));
  const rt = document.createElement("rt");
  rt.textContent = reading;
  ruby.append(rt);
  parent.append(ruby);
}

function renderFurigana(parent, text, preferredReadings = []) {
  parent.replaceChildren();
  const readingEntries = [];
  const seenSurfaces = new Set();
  [...preferredReadings, ...furiganaEntries].forEach(([surface, reading]) => {
    if (!surface || !reading || seenSurfaces.has(surface)) return;
    seenSurfaces.add(surface);
    readingEntries.push([surface, reading]);
  });
  readingEntries.sort((left, right) => right[0].length - left[0].length);
  let index = 0;

  while (index < text.length) {
    const entry = readingEntries.find(([surface]) => text.startsWith(surface, index));

    if (entry && containsKanji(entry[0])) {
      appendRuby(parent, entry[0], entry[1]);
      index += entry[0].length;
    } else {
      parent.append(document.createTextNode(text[index]));
      index += 1;
    }
  }
}

function renderExamples(examples) {
  elements.examplesList.replaceChildren();

  examples.forEach((example, index) => {
    const item = document.createElement("div");
    item.className = "example-item";

    const number = document.createElement("span");
    number.className = "example-number";
    number.textContent = `${index + 1}`;

    const body = document.createElement("div");
    body.className = "example-body";

    const text = document.createElement("div");
    text.className = "example-text";

    const ja = document.createElement("p");
    ja.className = "example-ja";
    ja.lang = "ja";
    renderFurigana(ja, example.ja, example.furiganaEntries || []);

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
    button.className = "icon-button example-speak";
    button.type = "button";
    button.title = "播放例句";
    button.setAttribute("aria-label", `播放例句 ${index + 1}`);
    button.textContent = "▶";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => speak(example.ja));
    });

    text.append(ja, romaji, zh);
    body.append(text, button);
    item.append(number, body);
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
    elements.answerMeta.textContent = "";
    elements.exampleBlock.hidden = true;
    elements.examplesList.replaceChildren();
    elements.choiceFeedback.hidden = true;
    elements.choiceFeedback.replaceChildren();
    return;
  }

  elements.answerMain.textContent = selectedChoice?.isCorrect ? "回答正确" : "回答错误";
  elements.answerMain.lang = "zh-CN";
  elements.answerMeta.textContent = card.meta;
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
  elements.answerMeta.textContent = "";
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
  if (activeDeck === "vocab-mistakes" && !deckCards.length) {
    elements.roundStatusText.textContent = "暂无错题，去 N5 模块里练几张吧。";
    return;
  }
  if (activeDeck === "vocab-n4-mistakes" && !deckCards.length) {
    elements.roundStatusText.textContent = "暂无错题，去 N4 模块里练几张吧。";
    return;
  }
  if (activeDeck === "grammar-n5-mistakes" && !deckCards.length) {
    elements.roundStatusText.textContent = "暂无语法错题，去 N5 语法中→日练几张吧。";
    return;
  }
  if (activeDeck === "grammar-n4-mistakes" && !deckCards.length) {
    elements.roundStatusText.textContent = "暂无语法错题，去 N4 语法中→日练几张吧。";
    return;
  }

  elements.roundStatusText.textContent = deckCards.length ? "这一轮已经完成。" : "没有可用卡片";
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
  };
}

function applyRating(rating, details = {}) {
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

function sidebarFocusableElements() {
  return [...elements.deckSidebar.querySelectorAll("button:not(:disabled), [href], [tabindex]")].filter(
    (element) => element.tabIndex >= 0 && !element.closest("[hidden]"),
  );
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
    // The drawer remains usable when an embedded browser blocks History API writes.
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
    // Closing the drawer must not depend on History API availability.
  }
}

function canReceiveSidebarReturnFocus(element) {
  return Boolean(
    element?.isConnected &&
      !element.disabled &&
      !element.hidden &&
      !element.closest?.("[hidden]") &&
      !element.closest?.(".study-area")?.inert,
  );
}

function sidebarReturnTarget() {
  return [sidebarReturnFocus, elements.emptyDeckMenuButton, elements.deckMenuButton].find(
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

  elements.deckSidebar.classList.toggle("is-open", isOpen);
  elements.deckSidebar.setAttribute("aria-hidden", String(!isOpen));
  elements.deckMenuButton.setAttribute("aria-expanded", String(isOpen));
  elements.emptyDeckMenuButton.setAttribute("aria-expanded", String(isOpen));
  elements.sidebarBackdrop.hidden = !isOpen;
  elements.deckSidebar.inert = !isOpen;
  elements.studyArea.inert = isOpen;

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
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = sidebarFocusableElements();
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
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

function speak(text, options = {}) {
  if (!text) return;
  if (!supportsSpeech()) {
    setSpeechStatus("此浏览器不支持语音播放。", "error");
    return;
  }
  const synthesizer = window.speechSynthesis;
  speechGeneration += 1;
  const generation = speechGeneration;
  if (speechStartTimer !== null) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }

  const hasActiveSpeech = Boolean(
    activeSpeechUtterance || synthesizer.speaking || synthesizer.pending,
  );
  activeSpeechUtterance = null;
  if (hasActiveSpeech) {
    synthesizer.cancel();
    speechBlockedUntil = Math.max(speechBlockedUntil, Date.now() + 120);
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

  const firstExample = card.examples?.[0]?.ja;
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
  if (elements.studyArea) elements.studyArea.inert = false;
  if (elements.deckSidebar) {
    elements.deckSidebar.classList.remove("is-open");
    elements.deckSidebar.inert = true;
    elements.deckSidebar.setAttribute("aria-hidden", "true");
  }
  if (elements.deckMenuButton) elements.deckMenuButton.setAttribute("aria-expanded", "false");
  if (elements.emptyDeckMenuButton) {
    elements.emptyDeckMenuButton.setAttribute("aria-expanded", "false");
  }
  if (elements.sidebarBackdrop) elements.sidebarBackdrop.hidden = true;
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

function bindInteractions() {
  elements.cardReveal.addEventListener("click", revealCard);
  elements.studyCard.addEventListener("click", revealFromStudySurface);
  window.addEventListener("popstate", (event) =>
    runSafely(() => handleSidebarHistoryChange(event)),
  );
  window.addEventListener("storage", (event) => runSafely(() => handleStoreStorageChange(event)));

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
        expandSidebarForDeck(activeDeck);
        saveRoundState();
        setSidebarOpen(false, { restoreFocus: false });
        nextCard();
        focusPrimaryStudyAction();
      });
    });
  });

  elements.deckGroupToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => {
        const group = toggle.closest(".deck-group");
        setDeckGroupExpanded(group, toggle.getAttribute("aria-expanded") !== "true");
      });
    });
  });

  elements.deckLevelToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      runSafely(() => {
        const level = toggle.closest(".deck-level");
        setDeckLevelExpanded(level, toggle.getAttribute("aria-expanded") !== "true");
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

  elements.emptyDeckMenuButton.addEventListener("click", () => {
    runSafely(() => setSidebarOpen(true));
  });

  elements.deckMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    runSafely(() => setSidebarOpen(!elements.deckSidebar.classList.contains("is-open")));
  });

  elements.closeDeckMenu.addEventListener("click", () => {
    runSafely(() => setSidebarOpen(false));
  });

  elements.sidebarBackdrop.addEventListener("click", () => {
    runSafely(() => setSidebarOpen(false));
  });

  elements.deckSidebar.addEventListener("keydown", (event) =>
    runSafely(() => handleSidebarKeydown(event)),
  );
}

function initializeApp() {
  assertRequiredElements();
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
  loadRoundState();
  if (isDeckDataMissing(activeDeck)) {
    activeDeck = "hiragana";
  }
  applyDeckGroupState();
  applyDeckLevelState();
  expandSidebarForDeck(activeDeck);
  setSidebarOpen(isSidebarHistoryEntry(), { restoreFocus: false, syncHistory: false });
  renderLoadStatus();
  nextCard();
  if (storeNeedsCompaction) saveStore();
  finishLoadingStatus();
}

runSafely(initializeApp);
