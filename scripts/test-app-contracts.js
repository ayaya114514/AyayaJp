"use strict";

const vm = require("vm");

const { read } = require("./validation-lib");

class FakeClassList {
  constructor() {
    this.values = new Set();
  }

  add(...names) {
    names.forEach((name) => this.values.add(name));
  }

  contains(name) {
    return this.values.has(name);
  }

  remove(...names) {
    names.forEach((name) => this.values.delete(name));
  }

  toggle(name, force) {
    const enabled = force === undefined ? !this.values.has(name) : Boolean(force);
    if (enabled) this.values.add(name);
    else this.values.delete(name);
    return enabled;
  }
}

// The 说明 rows rendered from card meta, as [key, value] text pairs.
function metaRowTexts(answerMeta) {
  return answerMeta.children.map((row) => row.children.map((cell) => cell.textContent));
}

class FakeElement {
  constructor(document, id = "", tagName = "div") {
    this.attributes = new Map();
    this.children = [];
    this.classList = new FakeClassList();
    this.dataset = {};
    this.disabled = false;
    this.document = document;
    this.hidden = false;
    this.id = id;
    this.inert = false;
    this.isConnected = true;
    this.lang = "";
    this.listeners = new Map();
    this.parentElement = null;
    this.tabIndex = 0;
    this.textContent = "";
    this.title = "";
    this.tagName = tagName.toUpperCase();
  }

  get className() {
    return [...this.classList.values].join(" ");
  }

  set className(value) {
    this.classList.values = new Set(String(value).split(/\s+/u).filter(Boolean));
  }

  addEventListener(type, listener, options = {}) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push({ listener, once: Boolean(options?.once) });
  }

  append(...children) {
    children.forEach((child) => {
      if (child instanceof FakeElement && child.parentElement) {
        child.parentElement.children = child.parentElement.children.filter((item) => item !== child);
      }
      this.children.push(child);
      if (child instanceof FakeElement) child.parentElement = this;
    });
  }

  prepend(...children) {
    [...children].reverse().forEach((child) => {
      if (child instanceof FakeElement && child.parentElement) {
        child.parentElement.children = child.parentElement.children.filter((item) => item !== child);
      }
      this.children.unshift(child);
      if (child instanceof FakeElement) child.parentElement = this;
    });
  }

  matches(selector) {
    const candidate = selector.trim();
    if (!candidate) return false;
    if (candidate === "button:not(:disabled)") {
      return this.tagName === "BUTTON" && !this.disabled;
    }
    if (candidate.endsWith(":not(:disabled)")) {
      return !this.disabled && this.matches(candidate.slice(0, -":not(:disabled)".length));
    }
    if (candidate.startsWith("#")) return this.id === candidate.slice(1);
    if (candidate.startsWith(".")) return this.classList.contains(candidate.slice(1));
    const attribute = candidate.match(/^\[([^=\]]+)(?:=['"]?([^'"\]]+)['"]?)?\]$/);
    if (attribute) {
      const [, name, expected] = attribute;
      if (name === "hidden") return this.hidden;
      if (name === "tabindex") return this.tabIndex !== undefined;
      const actual = this.getAttribute(name);
      return expected === undefined ? actual !== null : actual === expected;
    }
    return this.tagName === candidate.toUpperCase();
  }

  closest(selectors) {
    const candidates = selectors.split(",");
    let current = this;
    while (current) {
      if (candidates.some((selector) => current.matches(selector))) return current;
      current = current.parentElement;
    }
    return null;
  }

  dispatch(type, properties = {}) {
    if (type === "click" && this.disabled) return false;
    const event = {
      defaultPrevented: false,
      propagationStopped: false,
      target: properties.target || this,
      preventDefault() {
        this.defaultPrevented = true;
      },
      stopPropagation() {
        this.propagationStopped = true;
      },
      ...properties,
    };
    let current = this;
    while (current && !event.propagationStopped) {
      event.currentTarget = current;
      const registered = [...(current.listeners.get(type) || [])];
      registered.forEach(({ listener, once }) => {
        listener(event);
        if (once) {
          const remaining = (current.listeners.get(type) || []).filter(
            (registration) => registration.listener !== listener,
          );
          current.listeners.set(type, remaining);
        }
      });
      current = current.parentElement;
    }
    return !event.defaultPrevented;
  }

  click() {
    return this.dispatch("click");
  }

  focus() {
    this.document.activeElement = this;
  }

  getAttribute(name) {
    return this.attributes.has(name) ? this.attributes.get(name) : null;
  }

  insertBefore(child, reference) {
    if (child instanceof FakeElement && child.parentElement) {
      child.parentElement.children = child.parentElement.children.filter((item) => item !== child);
    }
    const index = this.children.indexOf(reference);
    this.children.splice(index < 0 ? this.children.length : index, 0, child);
    if (child instanceof FakeElement) child.parentElement = this;
    return child;
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  querySelectorAll(selector) {
    const matches = [];
    const visit = (child) => {
      if (!(child instanceof FakeElement)) return;
      if (child.matches(selector)) matches.push(child);
      child.children.forEach(visit);
    };
    this.children.forEach(visit);
    return matches;
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  replaceChildren(...children) {
    this.children = [];
    this.append(...children);
  }

  remove() {
    if (!this.parentElement) return;
    this.parentElement.children = this.parentElement.children.filter((item) => item !== this);
    this.parentElement = null;
    this.isConnected = false;
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }
}

class FakeDocument {
  constructor(tabDecks) {
    this.activeElement = null;
    this.elements = new Map();
    this.listeners = new Map();
    this.body = new FakeElement(this, "body");
    this.documentElement = new FakeElement(this, "html");
    this.tabs = tabDecks.map((deck) => {
      const tab = new FakeElement(this, "", "button");
      tab.dataset.deck = deck;
      return tab;
    });
    this.feedback = ["clear", "forgot"].map((rating) => {
      const button = new FakeElement(this, "", "button");
      button.className = `feedback ${rating}`;
      button.dataset.rating = rating;
      return button;
    });

    const studyArea = this.querySelector(".study-area");
    const studyCard = this.querySelector("#studyCard");
    const statsGrid = this.querySelector(".stats-grid");
    const flashcard = this.querySelector("#flashcard");
    const answerPanel = this.querySelector("#answerPanel");
    const feedbackRow = this.querySelector(".feedback-row");
    const emptyState = this.querySelector("#emptyState");
    const bottomBar = this.querySelector(".bottom-bar");
    studyArea.append(studyCard, emptyState, bottomBar);
    studyCard.append(statsGrid, flashcard, answerPanel);
    statsGrid.append(
      this.querySelector("#undoRating"),
      this.querySelector("#dueCount"),
      this.querySelector("#reviewedCount"),
    );
    bottomBar.append(
      this.querySelector("#currentPoolTab"),
      this.querySelector("#poolToggle"),
      this.querySelector("#deckMenuButton"),
    );
    flashcard.append(this.querySelector("#cardReveal"), this.querySelector("#speakWord"));
    answerPanel.append(
      this.querySelector("#choiceBlock"),
      this.querySelector("#answerMain"),
      this.querySelector("#answerMeta"),
      this.querySelector("#exampleBlock"),
      feedbackRow,
      this.querySelector("#choiceNext"),
    );
    this.querySelector("#choiceBlock").append(
      this.querySelector("#choiceList"),
      this.querySelector("#choiceFeedback"),
    );
    feedbackRow.append(...this.feedback);
    emptyState.append(
      this.querySelector("#roundStatusText"),
      this.querySelector("#studyAnyWay"),
    );
    this.querySelector("#deckSidebar").append(
      this.querySelector("#closeDeckMenu"),
      ...this.tabs,
    );
  }

  addEventListener(type, listener, options = {}) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push({ listener, once: Boolean(options?.once) });
  }

  createElement(tagName = "div") {
    return new FakeElement(this, "", tagName);
  }

  createTextNode(text) {
    return String(text);
  }

  getElementById(id) {
    return this.querySelector(`#${id}`);
  }

  querySelector(selector) {
    if (!this.elements.has(selector)) {
      const id = selector.startsWith("#") ? selector.slice(1) : "";
      const buttonIds = new Set([
        "cardReveal",
        "choiceNext",
        "closeDeckMenu",
        "currentPoolTab",
        "deckMenuButton",
        "poolToggle",
        "speakWord",
        "studyAnyWay",
        "undoRating",
      ]);
      this.elements.set(
        selector,
        new FakeElement(this, id, buttonIds.has(id) ? "button" : "div"),
      );
    }
    return this.elements.get(selector);
  }

  querySelectorAll(selector) {
    if (selector === ".tab-button") return this.tabs;
    if (selector === ".feedback") return this.feedback;
    return [];
  }
}

class FakeUtterance {
  constructor(text) {
    this.lang = "";
    this.listeners = new Map();
    this.rate = 1;
    this.text = text;
  }

  addEventListener(type, listener) {
    this.listeners.set(type, listener);
  }

  emitEnd() {
    this.listeners.get("end")?.();
  }

  emitError(error) {
    this.listeners.get("error")?.({ error });
  }
}

function baseCard(overrides = {}) {
  return {
    answer: "answer",
    answerLang: "ja",
    deck: "hiragana",
    examples: [],
    frontSpeech: "prompt",
    id: "card-a",
    meta: "",
    prompt: "prompt",
    promptLang: "ja",
    speech: "answer",
    subtle: "",
    type: "fixture",
    ...overrides,
  };
}

function createHarness({
  grammarCards = [],
  initialStore,
  kanaCards = [baseCard()],
  random = Math.random,
  sharedStorage = null,
  storageWriteError = null,
  tabDecks = ["hiragana"],
  vocabCards = [],
} = {}) {
  const document = new FakeDocument(tabDecks);
  const storage = sharedStorage || new Map();
  if (initialStore !== undefined) storage.set("ayaya-jp-srs-v1", initialStore);
  const localStorage = {
    getItem(key) {
      return storage.has(key) ? storage.get(key) : null;
    },
    setItem(key, value) {
      if (storageWriteError) throw storageWriteError;
      storage.set(key, value);
    },
  };

  const spoken = [];
  const speechSynthesis = {
    cancelCount: 0,
    cancel() {
      this.cancelCount += 1;
    },
    speak(utterance) {
      spoken.push(utterance);
    },
  };
  const windowListeners = new Map();
  const window = {
    AYAYA_GRAMMAR_DATA: { entries: [{}] },
    AYAYA_JP_CARD_DATA: {
      furiganaEntries: [],
      makeGrammarCards(level) {
        return grammarCards.filter(
          (card) => !level || card.grammarLevel === level || card.deck.includes(level.toLowerCase()),
        );
      },
      makeKanaCards() {
        return kanaCards;
      },
      makeVocabCards(level) {
        if (level === "N5") return vocabCards.filter((card) => !card.deck.includes("n4"));
        if (level === "N4") return vocabCards.filter((card) => card.deck.includes("n4"));
        return vocabCards;
      },
    },
    AYAYA_N4_CODEX_VOCAB: { entries: [{}] },
    AYAYA_N5_CODEX_VOCAB: { entries: [{}] },
    addEventListener(type, listener) {
      if (!windowListeners.has(type)) windowListeners.set(type, []);
      windowListeners.get(type).push(listener);
    },
    dispatchEvent(type, event) {
      (windowListeners.get(type) || []).forEach((listener) => listener(event));
    },
    clearTimeout() {},
    requestAnimationFrame(callback) {
      callback();
      return 1;
    },
    setTimeout(callback) {
      callback();
      return 1;
    },
    speechSynthesis,
  };
  const context = {
    HTMLElement: FakeElement,
    Math: Object.assign(Object.create(Math), { random }),
    SpeechSynthesisUtterance: FakeUtterance,
    clearTimeout,
    console,
    document,
    localStorage,
    setTimeout,
    window,
  };
  vm.createContext(context);
  vm.runInContext(read("app.js"), context, { filename: "app.js" });
  return {
    context,
    document,
    element(id) {
      return document.querySelector(`#${id}`);
    },
    emitWindow(type, event) {
      window.dispatchEvent(type, event);
    },
    localStorage,
    speechSynthesis,
    spoken,
    storage,
    tabs: document.tabs,
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function testStorageFailureFallsBackToMemory() {
  const error = new Error("quota full");
  error.name = "QuotaExceededError";
  const harness = createHarness({ storageWriteError: error });
  assert(harness.element("studyCard").hidden === false, "study card did not initialize");
  assert(
    harness.element("loadErrorBanner").textContent.includes("无法写入"),
    "storage write failure is not visible to the user",
  );
}

function testInvalidArrayStoreIsReplaced() {
  const harness = createHarness({ initialStore: "[]" });
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  assert(saved && !Array.isArray(saved), "an invalid array store remained the persisted root");
  assert(saved.__meta?.schemaVersion >= 2, "the replacement store has no schema metadata");
}

function testLegacyRatingHistoryCompactsToBoundedState() {
  const card = baseCard({ id: "history-card" });
  const legacyHistory = Array.from({ length: 15 }, (_, index) => ({
    at: index + 1,
    eventId: `legacy-history-${index + 1}`,
    rating: index % 2 ? "clear" : "forgot",
  }));
  const harness = createHarness({
    initialStore: JSON.stringify({
      [card.id]: {
        lastRatedAt: 15,
        lastRating: "clear",
        ratingHistory: legacyHistory,
        reviews: 15,
      },
      __rounds: {
        activeDeck: "hiragana",
        decks: {
          hiragana: {
            completed: [],
            queue: [card.id],
            queueOrderVersion: 1,
            rounds: 0,
          },
        },
      },
    }),
    kanaCards: [card],
  });
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const state = saved[card.id];
  assert(state.reviews === 15, "legacy history migration lost the aggregate review count");
  assert(state.lastEvent.eventId === "legacy-history-15", "legacy history migration lost the latest event");
  assert(!Object.hasOwn(state, "ratingHistory"), "unbounded rating history remained persisted");
  assert(!Object.hasOwn(state, "ratingTombstones"), "legacy Undo tombstones remained persisted");
  assert(saved.__meta.schemaVersion === 4, "bounded storage migration did not advance the schema");
  assert(
    JSON.stringify(state).length < 400,
    "a migrated card retained storage proportional to its rating history",
  );
}

function testN4LegacyProgressAndRoundQueueMigration() {
  const deck = "vocab-n4-ja-zh";
  const legacyId = "vocab-n4-100-ja";
  const card = baseCard({
    deck,
    id: "vocab-entry-n4-101-ja",
    isVocab: true,
    legacyIds: [legacyId],
    sourceId: "n4-101",
    wordKey: "vocab-entry-n4-101",
  });
  const legacyHistory = [
    { at: 10, rating: "forgot" },
    { at: 20, rating: "clear" },
  ];
  const harness = createHarness({
    initialStore: JSON.stringify({
      [legacyId]: {
        lastRatedAt: 20,
        lastRating: "clear",
        ratingHistory: legacyHistory,
        reviews: 4,
      },
      __rounds: {
        activeDeck: deck,
        decks: {
          [deck]: {
            completed: [],
            queue: [legacyId],
            rounds: 3,
          },
        },
      },
    }),
    tabDecks: ["hiragana", deck],
    vocabCards: [card],
  });
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const migrated = saved[card.id];
  const round = saved.__rounds.decks[deck];

  assert(card.id !== legacyId, "the stable N4 ID still collides with its legacy ID");
  assert(migrated?.reviews === 4, "N4 migration did not preserve the review count");
  assert(migrated.lastEvent.at === 20, "N4 migration did not retain the newest rating event");
  assert(!Object.hasOwn(migrated, "ratingHistory"), "N4 migration retained unbounded history");
  assert(migrated.lastRating === "clear" && migrated.lastRatedAt === 20, "N4 latest rating drifted");
  assert(!Object.hasOwn(saved, legacyId), "N4 legacy progress key was not deleted");
  assert(round.rounds === 3, "N4 migration did not preserve the completed round count");
  assert(
    JSON.stringify(round.queue) === JSON.stringify([card.id]),
    "N4 round queue was not remapped to the stable ID",
  );
}

function testN5DuplicateAliasesMergeWithoutDuplicateQueueEntries() {
  const deck = "vocab-ja-zh";
  const legacyIds = ["vocab-39-ja", "vocab-40-ja"];
  const card = baseCard({
    deck,
    id: "vocab-entry-n5-040-ja",
    isVocab: true,
    legacyIds,
    sourceId: "n5-040",
    wordKey: "vocab-entry-n5-040",
  });
  const historyItem = (at) => ({
    at,
    rating: at % 2 === 0 ? "forgot" : "clear",
  });
  const firstHistory = Array.from({ length: 8 }, (_, index) => historyItem(index + 1));
  const secondHistory = Array.from({ length: 8 }, (_, index) => historyItem(index + 8));
  const harness = createHarness({
    initialStore: JSON.stringify({
      [legacyIds[0]]: {
        lastRatedAt: 8,
        lastRating: "forgot",
        ratingHistory: firstHistory,
        reviews: 8,
      },
      [legacyIds[1]]: {
        lastRatedAt: 15,
        lastRating: "clear",
        ratingHistory: secondHistory,
        reviews: 8,
      },
      __rounds: {
        activeDeck: deck,
        decks: {
          [deck]: {
            completed: [],
            queue: [legacyIds[0], legacyIds[1], legacyIds[0]],
            rounds: 1,
          },
        },
      },
    }),
    tabDecks: ["hiragana", deck],
    vocabCards: [card],
  });
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const migrated = saved[card.id];

  assert(migrated.reviews === 16, "N5 alias merge did not preserve both review counts");
  assert(migrated.lastEvent.at === 15, "N5 alias merge lost the newest rating");
  assert(!Object.hasOwn(migrated, "ratingHistory"), "N5 alias merge retained unbounded history");
  assert(
    legacyIds.every((legacyId) => !Object.hasOwn(saved, legacyId)),
    "one or more N5 legacy progress keys were not deleted",
  );
  assert(
    JSON.stringify(saved.__rounds.decks[deck].queue) === JSON.stringify([card.id]),
    "N5 alias queue was not remapped and deduplicated",
  );
}

function testRetiredStableSourceIdMigratesToRetainedEntry() {
  const deck = "vocab-n4-ja-zh";
  const retiredId = "vocab-entry-n4-247-ja";
  const card = baseCard({
    deck,
    id: "vocab-entry-n4-246-ja",
    isVocab: true,
    legacyIds: ["vocab-n4-245-ja", retiredId],
    sourceId: "n4-246",
    wordKey: "vocab-entry-n4-246",
  });
  const harness = createHarness({
    initialStore: JSON.stringify({
      [retiredId]: {
        lastRatedAt: 42,
        lastRating: "unsure",
        reviews: 6,
      },
      __rounds: {
        activeDeck: deck,
        decks: {
          [deck]: {
            completed: [],
            queue: [retiredId],
            rounds: 2,
          },
        },
      },
    }),
    tabDecks: ["hiragana", deck],
    vocabCards: [card],
  });
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  assert(saved[card.id]?.reviews === 6, "retired stable source ID lost its review count");
  assert(saved[card.id]?.lastRating === "unsure", "retired stable source ID lost its latest rating");
  assert(!Object.hasOwn(saved, retiredId), "retired stable source ID was not removed after migration");
  assert(
    JSON.stringify(saved.__rounds.decks[deck].queue) === JSON.stringify([]),
    "a legacy 不确定 card stayed in the main pool queue",
  );
  harness.element("poolToggle").dispatch("click");
  const unknownRound = JSON.parse(harness.storage.get("ayaya-jp-srs-v1")).__rounds.decks[`${deck}-unknown`];
  assert(
    JSON.stringify(unknownRound?.queue) === JSON.stringify([card.id]),
    "retired stable source ID was not migrated into the 不认识 pool queue",
  );
}

function testDirectUpgradeCrossLevelAliasDropsFromOldDeckQueue() {
  const n4Deck = "vocab-n4-ja-zh";
  const n5Deck = "vocab-ja-zh";
  const retiredId = "vocab-n4-118-ja";
  const card = baseCard({
    deck: n5Deck,
    id: "vocab-entry-n5-158-ja",
    isVocab: true,
    legacyIds: ["vocab-157-ja", retiredId, "vocab-entry-n4-119-ja"],
    sourceId: "n5-158",
    wordKey: "vocab-entry-n5-158",
  });
  const harness = createHarness({
    initialStore: JSON.stringify({
      [retiredId]: {
        lastRatedAt: 84,
        lastRating: "clear",
        reviews: 5,
      },
      __rounds: {
        activeDeck: n4Deck,
        decks: {
          [n4Deck]: { completed: [], queue: [retiredId], rounds: 1 },
          [n5Deck]: { completed: [], queue: [retiredId], rounds: 0 },
        },
      },
    }),
    tabDecks: ["hiragana", n4Deck, n5Deck],
    vocabCards: [card],
  });

  harness.tabs.find((tab) => tab.dataset.deck === n5Deck).dispatch("click");
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  assert(saved[card.id]?.reviews === 5, "cross-level migration lost retained progress");
  assert(
    JSON.stringify(saved.__rounds.decks[n4Deck].queue) === JSON.stringify([]),
    "cross-level migration left an N5 target inside the retired N4 queue",
  );
  assert(
    JSON.stringify(saved.__rounds.decks[n5Deck].queue) === JSON.stringify([card.id]),
    "cross-level migration did not map a compatible N5 queue entry",
  );
}

function testRetiredVocabProgressMovesToGrammarFamily() {
  const vocabDeck = "vocab-n4-ja-zh";
  const grammarDeck = "grammar-n4-ja-zh";
  const retiredId = "vocab-entry-n4-757-ja";
  const grammarCard = baseCard({
    deck: grammarDeck,
    grammarKey: "n4-grammar-102",
    grammarLevel: "N4",
    id: "grammar-n4-grammar-102-ja",
    isGrammar: true,
    legacyIds: [retiredId, "vocab-n4-756-ja"],
  });
  const harness = createHarness({
    grammarCards: [grammarCard],
    initialStore: JSON.stringify({
      [retiredId]: {
        lastRatedAt: 96,
        lastRating: "forgot",
        reviews: 7,
      },
      __rounds: {
        activeDeck: vocabDeck,
        decks: {
          [vocabDeck]: { completed: [], queue: [retiredId], rounds: 2 },
          [grammarDeck]: { completed: [], queue: [retiredId], rounds: 1 },
        },
      },
    }),
    kanaCards: [],
    tabDecks: ["hiragana", vocabDeck, grammarDeck],
    vocabCards: [],
  });

  harness.tabs.find((tab) => tab.dataset.deck === grammarDeck).dispatch("click");
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  assert(saved[grammarCard.id]?.reviews === 7, "vocabulary-to-grammar migration lost review count");
  assert(
    saved[grammarCard.id]?.lastRating === "forgot",
    "vocabulary-to-grammar migration lost the latest rating",
  );
  assert(!Object.hasOwn(saved, retiredId), "retired vocabulary state remained after grammar migration");
  assert(
    JSON.stringify(saved.__rounds.decks[vocabDeck].queue) === JSON.stringify([]),
    "retired grammar target remained in the vocabulary queue",
  );
  harness.element("poolToggle").dispatch("click");
  const unknownRound = JSON.parse(harness.storage.get("ayaya-jp-srs-v1")).__rounds.decks[
    `${grammarDeck}-unknown`
  ];
  assert(
    JSON.stringify(unknownRound?.queue) === JSON.stringify([grammarCard.id]),
    "retired vocabulary card did not move into the matching grammar 不认识 queue",
  );
}

function testSidebarFocusAndInertLifecycle() {
  const harness = createHarness();
  const opener = harness.element("deckMenuButton");
  const closeButton = harness.element("closeDeckMenu");
  const sidebar = harness.element("deckSidebar");
  const studyCard = harness.element("studyCard");
  const unknownTab = harness.element("poolToggle");

  opener.focus();
  opener.dispatch("click");

  assert(sidebar.classList.contains("is-open"), "module page did not open");
  assert(sidebar.inert === false, "open module page remained inert");
  assert(studyCard.inert === true, "the covered study card was not made inert");
  assert(!unknownTab.inert && !opener.inert, "the bottom bar was made inert under the module page");
  assert(harness.document.activeElement === closeButton, "sidebar did not focus its close button");

  sidebar.dispatch("keydown", { key: "Escape" });

  assert(!sidebar.classList.contains("is-open"), "Escape did not close the sidebar");
  assert(sidebar.inert === true, "closed module page did not become inert");
  assert(studyCard.inert === false, "study card remained inert after closing the module page");
  assert(harness.document.activeElement === opener, "module page did not restore focus to its opener");
  assert(opener.getAttribute("aria-expanded") === "false", "module page opener ARIA state stayed expanded");

  opener.dispatch("click");
  harness.element("currentPoolTab").dispatch("click");
  assert(!sidebar.classList.contains("is-open"), "当前 did not leave the module page");
  assert(studyCard.inert === false, "当前 left the study card inert");
}

function testLegacyMistakeRatingsOpenInUnknownPool() {
  const card = baseCard({
    deck: "vocab-ja-zh",
    id: "vocab-entry-n5-002-ja",
    isVocab: true,
    legacyIds: ["vocab-1-ja"],
    prompt: "会う",
    sourceId: "n5-002",
    wordKey: "vocab-entry-n5-002",
  });
  const harness = createHarness({
    initialStore: JSON.stringify({
      [card.id]: {
        lastRatedAt: 10,
        lastRating: "unsure",
        ratingHistory: [{ at: 10, rating: "unsure" }],
        reviews: 1,
      },
      __rounds: { activeDeck: "vocab-mistakes", decks: {} },
    }),
    tabDecks: ["hiragana", "vocab-ja-zh"],
    vocabCards: [card],
  });

  const toggle = harness.element("poolToggle");
  assert(toggle.getAttribute("aria-pressed") === "true", "the legacy mistake deck did not reopen as 不认识");
  assert(harness.tabs[1].classList.contains("active"), "the 不认识 pool did not highlight its tab");
  assert(harness.element("studyCard").hidden === false, "the 不认识 pool incorrectly opened empty");
  assert(harness.element("dueCount").textContent === 1, "a legacy 不确定 card was excluded from 不认识");
  assert(harness.element("cardPrompt").textContent === card.prompt, "the 不认识 card was not queued");

  toggle.dispatch("click");
  assert(toggle.getAttribute("aria-pressed") === "true", "tapping the active 不认识 tab left the pool");
  harness.element("currentPoolTab").dispatch("click");
  assert(toggle.getAttribute("aria-pressed") === "false", "the toggle did not return to the main pool");
  assert(harness.element("studyCard").hidden === true, "a 不认识 card stayed in the main pool");
  assert(harness.element("unknownCount").textContent === 1, "the toggle did not count 不认识 cards");
}

function testRatingsMoveCardsBetweenPools() {
  const cards = ["a", "b"].map((key) =>
    baseCard({
      deck: "vocab-zh-ja",
      frontSpeech: "",
      id: `vocab-entry-n5-00${key}-zh`,
      isVocab: true,
      prompt: `见面-${key}`,
      sourceId: `n5-00${key}`,
      wordKey: `vocab-entry-n5-00${key}`,
    }),
  );
  const harness = createHarness({
    random: () => 0,
    tabDecks: ["hiragana", "vocab-zh-ja"],
    vocabCards: cards,
  });
  const forgot = harness.document.feedback.find((button) => button.dataset.rating === "forgot");
  const clear = harness.document.feedback.find((button) => button.dataset.rating === "clear");
  const toggle = harness.element("poolToggle");

  harness.tabs[1].dispatch("click");
  const unknownPrompt = harness.element("cardPrompt").textContent;
  harness.element("cardReveal").dispatch("click");
  forgot.dispatch("click");
  assert(harness.element("dueCount").textContent === 1, "不认识 did not leave the main pool");
  assert(harness.element("unknownCount").textContent === 1, "不认识 did not enter the 不认识 pool");

  harness.element("cardReveal").dispatch("click");
  clear.dispatch("click");
  assert(harness.element("studyCard").hidden === true, "the main round did not finish");
  assert(
    harness.element("roundStatusText").textContent.includes("认识 1，不认识 1"),
    "the finished round did not split into 认识 and 不认识",
  );

  toggle.dispatch("click");
  assert(harness.element("cardPrompt").textContent === unknownPrompt, "the 不认识 pool lost the card");
  harness.element("cardReveal").dispatch("click");
  clear.dispatch("click");
  assert(harness.element("unknownCount").textContent === 0, "认识 did not leave the 不认识 pool");
  assert(toggle.getAttribute("aria-pressed") === "true", "the 不认识 tab lost its selected state");

  harness.element("undoRating").dispatch("click");
  assert(harness.element("unknownCount").textContent === 1, "Undo did not return the card to 不认识");
  assert(harness.element("cardPrompt").textContent === unknownPrompt, "Undo did not restore the card");
  clear.dispatch("click");

  harness.element("currentPoolTab").dispatch("click");
  assert(harness.element("studyCard").hidden === true, "a card marked 认识 was queued again this round");
  assert(harness.element("reviewedCount").textContent === 2, "the main pool lost the returned card");
  assert(
    harness.element("roundStatusText").textContent.includes("认识 2，不认识 0"),
    "the returned card was not counted as 认识",
  );
}

function testNewUnknownCardKeepsFinishedUnknownRounds() {
  const cards = [baseCard({ id: "pool-a", prompt: "a" }), baseCard({ id: "pool-b", prompt: "b" })];
  const harness = createHarness({ kanaCards: cards, random: () => 0 });
  const forgot = harness.document.feedback.find((button) => button.dataset.rating === "forgot");
  const toggle = harness.element("poolToggle");
  const firstPrompt = harness.element("cardPrompt").textContent;

  harness.element("cardReveal").dispatch("click");
  forgot.dispatch("click");
  toggle.dispatch("click");
  harness.element("cardReveal").dispatch("click");
  forgot.dispatch("click");
  const unknownRounds = () =>
    JSON.parse(harness.storage.get("ayaya-jp-srs-v1")).__rounds.decks["hiragana-unknown"].rounds;
  assert(unknownRounds() === 1, "finishing the 不认识 pool did not count a round");

  harness.element("currentPoolTab").dispatch("click");
  assert(harness.element("cardPrompt").textContent !== firstPrompt, "the main pool repeated a moved card");
  harness.element("cardReveal").dispatch("click");
  forgot.dispatch("click");
  assert(unknownRounds() === 1, "a newly unknown card rolled back the finished 不认识 round");
  toggle.dispatch("click");
  assert(harness.element("dueCount").textContent === 1, "the newly unknown card was not queued");
  assert(harness.element("reviewedCount").textContent === 1, "the finished 不认识 card was requeued");
}

function testUndoReturnsUnknownCardToMainPool() {
  const card = baseCard({ id: "undo-move" });
  const harness = createHarness({ kanaCards: [card] });

  harness.element("cardReveal").dispatch("click");
  harness.document.feedback.find((button) => button.dataset.rating === "forgot").dispatch("click");
  assert(harness.element("unknownCount").textContent === 1, "不认识 did not move the card");
  harness.element("undoRating").dispatch("click");

  assert(harness.element("unknownCount").textContent === 0, "Undo left the card in 不认识");
  assert(harness.element("cardPrompt").textContent === card.prompt, "Undo did not restore the main card");
  harness.element("poolToggle").dispatch("click");
  assert(harness.element("studyCard").hidden === true, "Undo left a stale card in the 不认识 queue");
}

function dispatchDocumentKey(harness, key, properties = {}) {
  const event = {
    defaultPrevented: false,
    key,
    repeat: false,
    target: harness.document.body,
    preventDefault() {
      this.defaultPrevented = true;
    },
    ...properties,
  };
  (harness.document.listeners.get("keydown") || []).forEach(({ listener }) => listener(event));
  return event;
}

function testNumberKeysRateRevealedCards() {
  const first = baseCard({ id: "shortcut-a", prompt: "a" });
  const second = baseCard({ id: "shortcut-b", prompt: "b" });
  const harness = createHarness({ kanaCards: [first, second] });
  const promptBefore = harness.element("cardPrompt").textContent;

  dispatchDocumentKey(harness, "2");
  assert(harness.element("cardPrompt").textContent === promptBefore, "a shortcut rated a hidden answer");
  harness.element("cardReveal").dispatch("click");
  assert(dispatchDocumentKey(harness, "3").defaultPrevented === false, "the retired shortcut 3 still rates");
  assert(dispatchDocumentKey(harness, "2", { repeat: true }).defaultPrevented === false, "auto-repeat rated a card");
  const event = dispatchDocumentKey(harness, "2");
  assert(event.defaultPrevented, "rating shortcut was not handled");
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const ratedId = promptBefore === "a" ? first.id : second.id;
  assert(saved[ratedId]?.lastRating === "forgot", "shortcut 2 did not record 不认识");
  assert(harness.element("cardPrompt").textContent !== promptBefore, "rating shortcut did not advance");
}

function testWrongChoiceEntersUnknownPool() {
  const choiceCard = baseCard({
    choices: [
      { id: "right", isCorrect: true, reason: "correct", text: "正确" },
      { id: "wrong", isCorrect: false, reason: "wrong", text: "错误" },
    ],
    correctChoiceId: "right",
    deck: "grammar-n5-choice",
    grammarLevel: "N5",
    id: "grammar-choice-mistake",
    isChoice: true,
    isGrammar: true,
    prompt: "选择「〜たい」的正确意思",
  });
  const harness = createHarness({
    grammarCards: [choiceCard],
    random: () => 0.99,
    tabDecks: ["hiragana", "grammar-n5-choice"],
  });
  const toggle = harness.element("poolToggle");

  harness.tabs[1].dispatch("click");
  const options = harness.element("choiceList").children;
  const wrongIndex = options.findIndex((option) => option.dataset.choiceId === "wrong");
  assert(wrongIndex >= 0, "fixture wrong option is missing");
  dispatchDocumentKey(harness, String(wrongIndex + 1));
  assert(harness.element("answerMain").textContent === "回答错误", "number key did not pick the choice");
  assert(harness.element("unknownCount").textContent === 1, "a wrong choice did not enter 不认识");

  harness.element("choiceNext").dispatch("click");
  toggle.dispatch("click");
  assert(harness.element("studyCard").hidden === false, "a wrong choice did not open in 不认识");
  assert(harness.element("cardPrompt").textContent === choiceCard.prompt, "不认识 did not show the choice");

  const rightIndex = harness.element("choiceList").children.findIndex(
    (option) => option.dataset.choiceId === "right",
  );
  harness.element("choiceList").children[rightIndex].dispatch("click");
  harness.element("choiceNext").dispatch("click");
  assert(harness.element("studyCard").hidden === true, "a corrected choice stayed in 不认识");
  assert(harness.element("unknownCount").textContent === 0, "a corrected choice was still counted");
}

function testStudyCardSurfaceRevealsAnswer() {
  const harness = createHarness();

  harness.element("studyCard").dispatch("click");

  assert(
    harness.element("cardReveal").getAttribute("aria-expanded") === "true",
    "blank study-card surface did not reveal the answer",
  );
  assert(
    harness.element("answerPanel").getAttribute("aria-hidden") === "false",
    "study-card surface reveal left the answer hidden",
  );
}

function testStudySurfaceExcludesInteractiveDescendants() {
  const harness = createHarness();
  const studyCard = harness.element("studyCard");
  const button = harness.document.createElement("button");
  const buttonLabel = harness.document.createElement("span");
  const blankSurface = harness.document.createElement("span");
  button.append(buttonLabel);
  studyCard.append(button, blankSurface);

  buttonLabel.dispatch("click");
  assert(
    harness.element("cardReveal").getAttribute("aria-expanded") === "false",
    "a nested interactive control incorrectly revealed the answer",
  );

  blankSurface.dispatch("click");
  assert(
    harness.element("cardReveal").getAttribute("aria-expanded") === "true",
    "a non-interactive descendant did not reveal the answer",
  );
}

function testRevealAndRatingMoveFocusToValidActions() {
  const cards = [baseCard({ id: "focus-a" }), baseCard({ id: "focus-b" })];
  const harness = createHarness({ kanaCards: cards });
  const reveal = harness.element("cardReveal");
  reveal.focus();
  reveal.dispatch("click");

  assert(
    harness.document.activeElement === harness.element("answerPanel"),
    "reveal left focus on the now-disabled reveal control",
  );
  assert(
    harness.element("answerPanel").getAttribute("aria-live") === "polite",
    "revealed answers are not exposed through a live region",
  );
  assert(
    !reveal.getAttribute("aria-describedby").includes("cardRevealHint"),
    "the revealed card still announces the instruction to reveal it",
  );

  harness.document.feedback[0].dispatch("click");
  assert(
    harness.document.activeElement === reveal && !reveal.disabled,
    "rating did not move focus to the next card's reveal action",
  );
  assert(
    !harness.element("answerPanel").classList.contains("is-revealed"),
    "the next unrevealed card retained a stale revealed class",
  );
}

function testLastCardUndoRemainsVisibleAndRestoresFocus() {
  const harness = createHarness();
  harness.element("cardReveal").dispatch("click");
  harness.document.feedback[0].dispatch("click");

  const undo = harness.element("undoRating");
  assert(harness.element("studyCard").hidden === true, "last-card completion did not show empty state");
  assert(
    undo.parentElement === harness.element("emptyState") && !undo.disabled,
    "last-card Undo remained inside the hidden study card",
  );
  assert(harness.document.activeElement === undo, "last-card completion did not focus visible Undo");

  undo.dispatch("click");
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  assert(harness.element("studyCard").hidden === false, "Undo did not restore the reviewed card");
  assert(
    undo.parentElement === harness.document.querySelector(".stats-grid"),
    "Undo was not returned to its header after restoring a card",
  );
  assert((saved["card-a"]?.reviews || 0) === 0, "Undo did not restore the previous card state");
  assert(
    harness.document.activeElement === harness.element("answerPanel"),
    "Undo did not focus the restored card's next valid action",
  );
}

function testContextChangesClearStaleUndo() {
  const hiragana = baseCard({ id: "undo-context-hiragana", prompt: "ひらがな" });
  const katakana = baseCard({
    deck: "katakana",
    id: "undo-context-katakana",
    prompt: "カタカナ",
  });
  const switched = createHarness({
    kanaCards: [hiragana, katakana],
    tabDecks: ["hiragana", "katakana"],
  });
  switched.element("cardReveal").dispatch("click");
  switched.document.feedback[0].dispatch("click");
  assert(!switched.element("undoRating").disabled, "rating did not enable Undo");

  switched.tabs[1].dispatch("click");
  assert(
    switched.element("cardPrompt").textContent === "カタカナ",
    "deck switch did not show the selected deck",
  );
  assert(switched.element("undoRating").disabled, "deck switch retained a stale Undo");
  assert(
    switched.element("undoRating").parentElement === switched.document.querySelector(".stats-grid"),
    "deck switch left disabled Undo inside the previous deck's empty state",
  );
  switched.element("undoRating").dispatch("click");
  assert(
    switched.element("cardPrompt").textContent === "カタカナ",
    "stale Undo returned to the previous deck",
  );

  const restarted = createHarness();
  restarted.element("cardReveal").dispatch("click");
  restarted.document.feedback[0].dispatch("click");
  restarted.element("studyAnyWay").dispatch("click");
  assert(restarted.element("studyCard").hidden === false, "restart did not reopen the deck");
  assert(restarted.element("undoRating").disabled, "restart retained the previous round's Undo");
  assert(
    restarted.element("undoRating").parentElement === restarted.document.querySelector(".stats-grid"),
    "restart left disabled Undo inside the completed state",
  );
}

function testCompletedRoundCanRestartWithoutStaleMerge() {
  const harness = createHarness();
  harness.element("cardReveal").dispatch("click");
  harness.document.feedback[0].dispatch("click");
  harness.element("studyAnyWay").dispatch("click");

  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const round = saved.__rounds.decks.hiragana;
  assert(harness.element("studyCard").hidden === false, "restart left the completed deck empty");
  assert(
    round.queue.includes("card-a") && round.completed.length === 0,
    "save-time merge restored stale completion state over an intentional restart",
  );
  assert(round.rounds === 1, "restarting a deck lost its completed-round count");
}

function testLegacyCompletedRoundCannotOverrideRestartedEpoch() {
  const card = baseCard({ id: "legacy-restart-card" });
  const legacyStore = {
    [card.id]: {
      lastChoiceCorrectIndex: null,
      lastRatedAt: 10,
      lastRating: "clear",
      ratingHistory: [{ at: 10, eventId: "legacy-completion", rating: "clear" }],
      ratingTombstones: [],
      reviews: 1,
    },
    __rounds: {
      activeDeck: "hiragana",
      decks: {
        hiragana: {
          completed: [card.id],
          completionEvents: { [card.id]: ["legacy-completion"] },
          queue: [],
          roundCompletionEvents: ["legacy-completion"],
          rounds: 1,
        },
      },
    },
  };
  const harness = createHarness({
    initialStore: JSON.stringify(legacyStore),
    kanaCards: [card],
  });

  harness.element("studyAnyWay").dispatch("click");
  let saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  let round = saved.__rounds.decks.hiragana;
  assert(round.roundGeneration === 1, "legacy completed round restarted at the wrong generation");
  assert(round.roundId === "round:hiragana:1", "restart did not persist its canonical epoch ID");
  assert(round.queue.includes(card.id) && round.completed.length === 0, "restart did not open a new round");

  const staleLegacyStore = JSON.parse(JSON.stringify(legacyStore));
  staleLegacyStore.__meta = {
    revision: (saved.__meta?.revision || 0) + 1,
    schemaVersion: 2,
    writerId: "stale-legacy-round-writer",
    writeToken: "stale-legacy-round-write",
  };
  harness.storage.set("ayaya-jp-srs-v1", JSON.stringify(staleLegacyStore));
  harness.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(staleLegacyStore),
  });

  saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  round = saved.__rounds.decks.hiragana;
  assert(round.roundGeneration === 1, "stale legacy completion rolled back the restarted generation");
  assert(round.roundId === "round:hiragana:1", "stale legacy payload replaced the new epoch ID");
  assert(
    round.queue.includes(card.id) && round.completed.length === 0,
    "stale legacy completion overwrote the restarted queue",
  );
}

function testStaleTabCannotCompleteCardInNewerRound() {
  const card = baseCard({ id: "stale-round-card" });
  const sharedStorage = new Map();
  const first = createHarness({ kanaCards: [card], sharedStorage });
  const stale = createHarness({ kanaCards: [card], sharedStorage });

  first.element("cardReveal").dispatch("click");
  first.document.feedback[0].dispatch("click");
  first.element("studyAnyWay").dispatch("click");
  stale.element("cardReveal").dispatch("click");
  stale.document.feedback[0].dispatch("click");

  const saved = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const round = saved.__rounds.decks.hiragana;
  assert(round.roundGeneration === 1, "stale tab rolled the round generation back");
  assert(round.roundId === "round:hiragana:1", "stale tab replaced the new round epoch");
  assert(
    round.queue.includes(card.id) && round.completed.length === 0,
    "a rating from the stale old round completed the same card in the new round",
  );
  assert(saved[card.id].reviews === 2, "cross-epoch merge lost one tab's rating history");
  assert(stale.element("studyCard").hidden === false, "stale tab did not converge to the new round UI");
}

function testSimultaneousFirstOpenUsesOneSharedEpoch() {
  const cards = [
    baseCard({ id: "first-open-a", prompt: "A" }),
    baseCard({ id: "first-open-b", prompt: "B" }),
  ];
  const first = createHarness({ kanaCards: cards });
  const second = createHarness({ kanaCards: cards });
  const firstPayload = JSON.parse(first.storage.get("ayaya-jp-srs-v1"));
  const secondPayload = JSON.parse(second.storage.get("ayaya-jp-srs-v1"));
  const firstRound = firstPayload.__rounds.decks.hiragana;
  const secondRound = secondPayload.__rounds.decks.hiragana;

  assert(firstRound.roundGeneration === 0, "first open did not start at generation zero");
  assert(
    firstRound.roundId === "round:hiragana:0" && firstRound.roundId === secondRound.roundId,
    "simultaneous first opens created unrelated random epochs",
  );

  const makeCompletionBranch = (payload, card, otherCard, writerId, at) => {
    const branch = JSON.parse(JSON.stringify(payload));
    const eventId = `${writerId}-event`;
    branch[card.id] = {
      lastChoiceCorrectIndex: null,
      lastRatedAt: at,
      lastRating: "clear",
      ratingHistory: [{ at, eventId, rating: "clear" }],
      ratingTombstones: [],
      reviews: 1,
    };
    branch.__rounds.decks.hiragana = {
      ...branch.__rounds.decks.hiragana,
      completed: [card.id],
      completionEvents: { [card.id]: [eventId] },
      queue: [otherCard.id],
      roundCompletionEvents: [],
      rounds: 0,
    };
    branch.__meta = {
      ...branch.__meta,
      revision: (branch.__meta?.revision || 0) + 1,
      writerId,
      writeToken: `${writerId}-write`,
    };
    return branch;
  };
  const branchA = makeCompletionBranch(firstPayload, cards[0], cards[1], "first-open-writer-a", 100);
  const branchB = makeCompletionBranch(secondPayload, cards[1], cards[0], "first-open-writer-b", 101);
  const sharedStorage = new Map([["ayaya-jp-srs-v1", JSON.stringify(branchA)]]);
  const observer = createHarness({ kanaCards: cards, sharedStorage });

  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(branchB));
  observer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(branchB),
  });

  const converged = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const round = converged.__rounds.decks.hiragana;
  assert(round.roundId === "round:hiragana:0", "first-open merge changed the shared epoch");
  assert(round.queue.length === 0, "first-open branches left completed cards queued");
  assert(
    round.completed.includes(cards[0].id) && round.completed.includes(cards[1].id),
    "first-open branches lost one tab's completion",
  );
  assert(round.rounds === 1, "first-open branches did not converge on one completed round");
}

function testConcurrentRestartsPreserveBothNewRoundRatings() {
  const card = baseCard({ id: "concurrent-restart-card" });
  const initialEvent = { at: 10, eventId: "initial-round-event", rating: "clear" };
  const initialStore = JSON.stringify({
    [card.id]: {
      lastChoiceCorrectIndex: null,
      lastRatedAt: initialEvent.at,
      lastRating: initialEvent.rating,
      ratingHistory: [initialEvent],
      ratingTombstones: [],
      reviews: 1,
    },
    __rounds: {
      activeDeck: "hiragana",
      decks: {
        hiragana: {
          completed: [card.id],
          completionEvents: { [card.id]: [initialEvent.eventId] },
          queue: [],
          roundCompletionEvents: [initialEvent.eventId],
          roundGeneration: 0,
          roundId: "round:hiragana:0",
          rounds: 1,
        },
      },
    },
  });
  const first = createHarness({ initialStore, kanaCards: [card] });
  const second = createHarness({ initialStore, kanaCards: [card] });
  const completeRestartedRound = (harness, rating) => {
    harness.element("studyAnyWay").dispatch("click");
    harness.element("cardReveal").dispatch("click");
    harness.document.feedback.find((button) => button.dataset.rating === rating).dispatch("click");
    return JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  };
  const branchA = completeRestartedRound(first, "clear");
  const branchB = completeRestartedRound(second, "forgot");
  const branchARound = branchA.__rounds.decks.hiragana;
  const branchBRound = branchB.__rounds.decks.hiragana;

  assert(
    branchARound.roundId === "round:hiragana:1" && branchARound.roundId === branchBRound.roundId,
    "concurrent restarts created unrelated epochs",
  );

  const sharedStorage = new Map([["ayaya-jp-srs-v1", JSON.stringify(branchA)]]);
  const observer = createHarness({ kanaCards: [card], sharedStorage });
  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(branchB));
  observer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(branchB),
  });

  const converged = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const round = converged.__rounds.decks.hiragana;
  const state = converged[card.id];
  const completionEvents = round.completionEvents[card.id];
  assert(round.roundGeneration === 1 && round.roundId === "round:hiragana:1", "restart epochs diverged");
  assert(round.queue.length === 0 && round.completed.includes(card.id), "restarted round did not converge");
  assert(round.rounds === 2, "concurrent restart merge double-counted or lost the completed round");
  assert(state.reviews === 3, "one restarted-round rating was lost");
  assert(!Object.hasOwn(state, "ratingHistory"), "restart merge recreated unbounded history");
  assert(
    completionEvents.length === 2,
    "one restarted-round completion event was silently discarded",
  );
}

function testChoiceAndEmptyDeckFocusLifecycle() {
  const choiceCard = baseCard({
    choices: [
      { id: "right", isCorrect: true, reason: "correct", text: "正确" },
      { id: "wrong", isCorrect: false, reason: "wrong", text: "错误" },
    ],
    correctChoiceId: "right",
    deck: "grammar-n5-choice",
    grammarLevel: "N5",
    id: "choice-a",
    isChoice: true,
    isGrammar: true,
  });
  const harness = createHarness({
    grammarCards: [choiceCard],
    tabDecks: ["hiragana", "grammar-n5-choice", "vocab-mistakes"],
  });

  harness.tabs[1].dispatch("click");
  const firstChoice = harness.element("choiceList").children[0];
  assert(firstChoice && harness.document.activeElement === firstChoice, "choice deck did not focus an option");
  firstChoice.dispatch("click");
  assert(
    harness.document.activeElement === harness.element("choiceNext"),
    "selected choice left focus on a replaced, disabled option",
  );

  harness.tabs[2].dispatch("click");
  assert(harness.element("studyCard").hidden === true, "empty deck kept the study card visible");
  assert(
    harness.document.activeElement === harness.element("deckMenuButton"),
    "empty deck sent focus to a hidden study-card control",
  );
}

function testStaleTabsMergeIndependentProgressAndRounds() {
  const hiragana = baseCard({ deck: "hiragana", id: "shared-hiragana" });
  const katakana = baseCard({ deck: "katakana", id: "shared-katakana" });
  const sharedStorage = new Map();
  const options = {
    kanaCards: [hiragana, katakana],
    sharedStorage,
    tabDecks: ["hiragana", "katakana"],
  };
  const firstTab = createHarness(options);
  const staleTab = createHarness(options);

  firstTab.element("cardReveal").dispatch("click");
  firstTab.document.feedback[0].dispatch("click");
  staleTab.tabs[1].dispatch("click");
  staleTab.element("cardReveal").dispatch("click");
  staleTab.document.feedback[1].dispatch("click");

  const saved = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  assert(saved[hiragana.id]?.reviews === 1, "stale tab overwrote the other tab's card progress");
  assert(saved[katakana.id]?.reviews === 1, "stale tab failed to save its own card progress");
  assert(
    saved.__rounds.decks.hiragana.completed.includes(hiragana.id) &&
      saved.__rounds.decks.katakana.completed.includes(katakana.id),
    "stale tab merge lost a completed round queue",
  );
}

function testConcurrentRatingsOnSameCardAreDeduplicatedSafely() {
  const sharedStorage = new Map();
  const options = { sharedStorage };
  const firstTab = createHarness(options);
  const staleTab = createHarness(options);

  firstTab.element("cardReveal").dispatch("click");
  firstTab.document.feedback[0].dispatch("click");
  staleTab.element("cardReveal").dispatch("click");
  staleTab.document.feedback[1].dispatch("click");

  const saved = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"))["card-a"];
  assert(saved.reviews === 2, "concurrent ratings on one card lost a review count");
  assert(
    typeof saved.lastEvent?.eventId === "string" && saved.lastEvent.eventId,
    "concurrent ratings did not retain a stable latest-event identity",
  );
  assert(!Object.hasOwn(saved, "ratingHistory"), "concurrent rating merge recreated history");
}

function testStorageEventRefreshesStaleVisibleQueue() {
  const sharedStorage = new Map();
  const firstTab = createHarness({ sharedStorage });
  const staleTab = createHarness({ sharedStorage });
  firstTab.element("cardReveal").dispatch("click");
  firstTab.document.feedback[0].dispatch("click");
  staleTab.element("cardReveal").focus();

  staleTab.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: sharedStorage.get("ayaya-jp-srs-v1"),
  });

  assert(staleTab.element("studyCard").hidden === true, "storage event left a completed card visible");
  assert(staleTab.element("dueCount").textContent === 0, "storage event did not refresh due count");
  assert(staleTab.element("reviewedCount").textContent === 1, "storage event did not refresh review count");
  assert(
    staleTab.document.activeElement === staleTab.element("studyAnyWay"),
    "storage refresh left focus inside the newly hidden study card",
  );
}

function testStorageWritePreservesCompletedChoiceExplanation() {
  const choiceCard = baseCard({
    choices: [
      { id: "right", isCorrect: true, reason: "correct", text: "正确" },
      { id: "wrong", isCorrect: false, reason: "wrong", text: "错误" },
    ],
    correctChoiceId: "right",
    deck: "grammar-n5-choice",
    grammarLevel: "N5",
    id: "choice-storage",
    isChoice: true,
    isGrammar: true,
  });
  const katakana = baseCard({ deck: "katakana", id: "choice-external-write" });
  const sharedStorage = new Map();
  const options = {
    grammarCards: [choiceCard],
    kanaCards: [baseCard(), katakana],
    sharedStorage,
    tabDecks: ["hiragana", "katakana", "grammar-n5-choice"],
  };
  const viewer = createHarness(options);
  const writer = createHarness(options);

  viewer.tabs[2].dispatch("click");
  viewer.element("choiceList").children[0].dispatch("click");
  const explanation = viewer.element("answerMain").textContent;
  writer.tabs[1].dispatch("click");
  writer.element("cardReveal").dispatch("click");
  writer.document.feedback[0].dispatch("click");
  viewer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: sharedStorage.get("ayaya-jp-srs-v1"),
  });

  assert(viewer.element("choiceNext").hidden === false, "storage write hid the completed choice result");
  assert(
    viewer.element("answerMain").textContent === explanation,
    "storage write replaced the completed choice explanation",
  );
  assert(
    viewer.document.activeElement === viewer.element("choiceNext"),
    "storage write moved focus away from the completed choice action",
  );
}

function testStorageWriteMovesFocusOffInvalidatedUndo() {
  const sharedStorage = new Map();
  const viewer = createHarness({ sharedStorage });
  viewer.element("cardReveal").dispatch("click");
  viewer.document.feedback[0].dispatch("click");
  assert(viewer.document.activeElement === viewer.element("undoRating"), "Undo was not focused");

  const invalidatingStore = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const ownEvent = invalidatingStore["card-a"].lastEvent;
  const remoteEvent = {
    at: (ownEvent.at || 0) + 1,
    eventId: "remote-replacement-event",
    rating: "clear",
  };
  invalidatingStore["card-a"] = {
    ...invalidatingStore["card-a"],
    lastEvent: remoteEvent,
    lastRatedAt: remoteEvent.at,
    lastRating: remoteEvent.rating,
    reviews: 1,
  };
  invalidatingStore.__rounds.decks.hiragana.completionEvents = {
    "card-a": [remoteEvent.eventId],
  };
  invalidatingStore.__meta = {
    ...invalidatingStore.__meta,
    revision: invalidatingStore.__meta.revision + 1,
    writerId: "undo-invalidating-writer",
    writeToken: "undo-invalidating-token",
  };
  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(invalidatingStore));
  viewer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(invalidatingStore),
  });

  assert(
    viewer.element("undoRating").parentElement === viewer.document.querySelector(".stats-grid"),
    "invalidated Undo was not returned to its home",
  );
  assert(
    viewer.document.activeElement === viewer.element("studyAnyWay"),
    "focus remained on Undo after it moved into the hidden study card",
  );
}

function testUnrelatedStorageWriteKeepsUndoAvailable() {
  const hiragana = baseCard({ deck: "hiragana", id: "undo-keep-hiragana" });
  const katakana = baseCard({ deck: "katakana", id: "undo-keep-katakana" });
  const sharedStorage = new Map();
  const options = {
    kanaCards: [hiragana, katakana],
    sharedStorage,
    tabDecks: ["hiragana", "katakana"],
  };
  const viewer = createHarness(options);
  const writer = createHarness(options);
  viewer.element("cardReveal").dispatch("click");
  viewer.document.feedback[0].dispatch("click");
  writer.tabs[1].dispatch("click");

  viewer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: sharedStorage.get("ayaya-jp-srs-v1"),
  });

  assert(!viewer.element("undoRating").disabled, "unrelated storage write disabled valid Undo");
  assert(
    viewer.element("undoRating").parentElement === viewer.element("emptyState"),
    "unrelated storage write hid valid Undo",
  );
  assert(
    viewer.document.activeElement === viewer.element("undoRating"),
    "unrelated storage write moved focus away from valid Undo",
  );
}

function testConcurrentRatingUndoKeepsRemoteReviewConsistent() {
  const sharedStorage = new Map();
  const firstTab = createHarness({ sharedStorage });
  const staleTab = createHarness({ sharedStorage });
  firstTab.element("cardReveal").dispatch("click");
  firstTab.document.feedback[0].dispatch("click");
  const firstEventId = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"))["card-a"]
    .lastEvent.eventId;
  staleTab.element("cardReveal").dispatch("click");
  staleTab.document.feedback[1].dispatch("click");

  firstTab.element("undoRating").dispatch("click");
  const saved = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const state = saved["card-a"];
  const round = saved.__rounds.decks.hiragana;
  assert(state.reviews === 1, "Undo removed or retained the wrong concurrent review count");
  assert(state.lastEvent?.eventId !== firstEventId, "Undo retained its own review event");
  assert(!Object.hasOwn(state, "ratingHistory"), "Undo recreated unbounded history");
  assert(!Object.hasOwn(state, "ratingTombstones"), "Undo persisted unbounded tombstones");
  assert(
    round.completed.includes("card-a") && !round.queue.includes("card-a"),
    "Undo restored a queued card that still has a concurrent remote review",
  );
  assert(firstTab.element("studyCard").hidden === true, "concurrent Undo showed an inconsistent card");
}

function testOutOfOrderStorageEventCannotRollbackNewerWriterRevision() {
  const hiragana = baseCard({ deck: "hiragana", id: "ordered-hiragana" });
  const katakana = baseCard({ deck: "katakana", id: "ordered-katakana" });
  const sharedStorage = new Map();
  const options = {
    kanaCards: [hiragana, katakana],
    sharedStorage,
    tabDecks: ["hiragana", "katakana"],
  };
  const writer = createHarness(options);
  const observer = createHarness(options);
  writer.element("cardReveal").dispatch("click");
  writer.document.feedback[0].dispatch("click");
  const olderPayload = sharedStorage.get("ayaya-jp-srs-v1");
  writer.tabs[1].dispatch("click");
  writer.element("cardReveal").dispatch("click");
  writer.document.feedback[0].dispatch("click");
  const newerPayload = sharedStorage.get("ayaya-jp-srs-v1");

  observer.emitWindow("storage", { key: "ayaya-jp-srs-v1", newValue: newerPayload });
  observer.emitWindow("storage", { key: "ayaya-jp-srs-v1", newValue: olderPayload });

  const saved = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  assert(saved[hiragana.id]?.reviews === 1, "out-of-order event lost the older valid review");
  assert(saved[katakana.id]?.reviews === 1, "out-of-order event rolled back the newer review");
}

function testOverwrittenBranchIsReconciledBackToStorage() {
  const sharedStorage = new Map();
  const observer = createHarness({ sharedStorage });
  observer.element("cardReveal").dispatch("click");
  observer.document.feedback[0].dispatch("click");
  const localPayload = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const localEvent = localPayload["card-a"].lastEvent;
  const remoteEvent = {
    at: (localEvent.at || 0) + 1,
    eventId: "remote-overwrite-event",
    rating: "forgot",
  };
  const overwrittenBranch = JSON.parse(JSON.stringify(localPayload));
  overwrittenBranch["card-a"] = {
    ...overwrittenBranch["card-a"],
    lastEvent: remoteEvent,
    lastRatedAt: remoteEvent.at,
    lastRating: remoteEvent.rating,
    reviews: 1,
  };
  overwrittenBranch.__meta = {
    ...overwrittenBranch.__meta,
    revision: overwrittenBranch.__meta.revision + 1,
    writerId: "remote-overwriter",
    writeToken: "remote-overwriter-token",
  };
  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(overwrittenBranch));

  observer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(overwrittenBranch),
  });

  const reconciled = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  assert(reconciled["card-a"].reviews === 2, "reconciliation produced the wrong review count");
  assert(
    reconciled["card-a"].lastEvent.eventId === remoteEvent.eventId,
    "reconciliation did not retain the newest remote event",
  );
  assert(
    reconciled.__meta.revision > overwrittenBranch.__meta.revision,
    "reconciliation did not publish a newer store revision",
  );
}

function testUndoAgainstOtherCardCompletionReopensOnlyUndoneCard() {
  const cardA = baseCard({ id: "same-deck-a", prompt: "A" });
  const cardB = baseCard({ id: "same-deck-b", prompt: "B" });
  const initialStore = JSON.stringify({
    __rounds: {
      activeDeck: "hiragana",
      decks: {
        hiragana: {
          completed: [],
          completionEvents: {},
          queue: [cardA.id, cardB.id],
          queueOrderVersion: 1,
          roundCompletionEvents: [],
          rounds: 0,
        },
      },
    },
  });
  const harness = createHarness({ initialStore, kanaCards: [cardA, cardB] });
  harness.element("cardReveal").dispatch("click");
  harness.document.feedback[0].dispatch("click");
  const localPayload = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const eventA = localPayload[cardA.id].lastEvent;
  const eventB = {
    at: (eventA.at || 0) + 1,
    eventId: "remote-card-b-completion",
    rating: "clear",
  };
  const remotePayload = JSON.parse(JSON.stringify(localPayload));
  remotePayload[cardB.id] = {
    lastChoiceCorrectIndex: null,
    lastEvent: eventB,
    lastRatedAt: eventB.at,
    lastRating: eventB.rating,
    reviews: 1,
  };
  remotePayload.__rounds.decks.hiragana = {
    completed: [cardA.id, cardB.id],
    completionEvents: {
      [cardA.id]: [eventA.eventId],
      [cardB.id]: [eventB.eventId],
    },
    queue: [],
    roundCompletionEvents: [eventA.eventId, eventB.eventId],
    rounds: 1,
  };
  remotePayload.__meta = {
    ...remotePayload.__meta,
    revision: remotePayload.__meta.revision + 1,
    writerId: "remote-card-b-writer",
    writeToken: "remote-card-b-write",
  };
  harness.storage.set("ayaya-jp-srs-v1", JSON.stringify(remotePayload));

  harness.element("undoRating").dispatch("click");
  const saved = JSON.parse(harness.storage.get("ayaya-jp-srs-v1"));
  const round = saved.__rounds.decks.hiragana;
  assert((saved[cardA.id]?.reviews || 0) === 0, "Undo left card A rated");
  assert(saved[cardB.id].reviews === 1, "Undo removed remote card B progress");
  assert(
    JSON.stringify(round.queue) === JSON.stringify([cardA.id]),
    "Undo did not reopen exactly card A",
  );
  assert(
    JSON.stringify(round.completed) === JSON.stringify([cardB.id]),
    "Undo re-added card A to completed or lost card B",
  );
  assert(round.rounds === 0, "Undo left the reopened round counted as complete");
  assert(harness.element("cardPrompt").textContent === "A", "Undo did not render reopened card A");

  const reloaded = createHarness({
    kanaCards: [cardA, cardB],
    sharedStorage: harness.storage,
  });
  assert(reloaded.element("cardPrompt").textContent === "A", "reload hid reopened card A");
  assert(reloaded.element("dueCount").textContent === 1, "reload changed reopened queue size");
  assert(reloaded.element("reviewedCount").textContent === 1, "reload lost card B completion");
}

function testDistributedLastCardCompletionIncrementsRoundOnce() {
  const cardA = baseCard({ id: "distributed-a" });
  const cardB = baseCard({ id: "distributed-b" });
  const initialStore = JSON.stringify({
    __rounds: {
      activeDeck: "hiragana",
      decks: {
        hiragana: {
          completed: [],
          completionEvents: {},
          queue: [cardA.id, cardB.id],
          queueOrderVersion: 1,
          roundCompletionEvents: [],
          rounds: 0,
        },
      },
    },
  });
  const sharedStorage = new Map();
  const observer = createHarness({
    initialStore,
    kanaCards: [cardA, cardB],
    sharedStorage,
  });
  const basePayload = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  const makeBranch = (card, queuedCard, writerId, at) => {
    const event = { at, eventId: `${writerId}-event`, rating: "clear" };
    const branch = JSON.parse(JSON.stringify(basePayload));
    branch[card.id] = {
      lastChoiceCorrectIndex: null,
      lastEvent: event,
      lastRatedAt: at,
      lastRating: "clear",
      reviews: 1,
    };
    branch.__rounds.decks.hiragana = {
      completed: [card.id],
      completionEvents: { [card.id]: [event.eventId] },
      queue: [queuedCard.id],
      roundCompletionEvents: [],
      rounds: 0,
    };
    branch.__meta = {
      ...branch.__meta,
      revision: (branch.__meta?.revision || 0) + 1,
      writerId,
      writeToken: `${writerId}-write`,
    };
    return branch;
  };
  const branchA = makeBranch(cardA, cardB, "distributed-writer-a", 100);
  const branchB = makeBranch(cardB, cardA, "distributed-writer-b", 101);

  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(branchA));
  observer.emitWindow("storage", { key: "ayaya-jp-srs-v1", newValue: JSON.stringify(branchA) });
  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(branchB));
  observer.emitWindow("storage", { key: "ayaya-jp-srs-v1", newValue: JSON.stringify(branchB) });

  let converged = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  let round = converged.__rounds.decks.hiragana;
  assert(round.queue.length === 0, "distributed completions left a card queued");
  assert(
    new Set(round.completed).size === 2 && round.completed.includes(cardA.id) && round.completed.includes(cardB.id),
    "distributed completions did not converge to the completed set",
  );
  assert(round.rounds === 1, "distributed last-card completion did not increment one round");

  const unrelatedMerge = JSON.parse(JSON.stringify(converged));
  unrelatedMerge.__meta = {
    ...unrelatedMerge.__meta,
    revision: unrelatedMerge.__meta.revision + 1,
    writerId: "distributed-unrelated-writer",
    writeToken: "distributed-unrelated-write",
  };
  sharedStorage.set("ayaya-jp-srs-v1", JSON.stringify(unrelatedMerge));
  observer.emitWindow("storage", {
    key: "ayaya-jp-srs-v1",
    newValue: JSON.stringify(unrelatedMerge),
  });
  converged = JSON.parse(sharedStorage.get("ayaya-jp-srs-v1"));
  round = converged.__rounds.decks.hiragana;
  assert(round.rounds === 1, "an unrelated merge counted the completed round twice");

  const reloaded = createHarness({
    kanaCards: [cardA, cardB],
    sharedStorage,
  });
  assert(reloaded.element("studyCard").hidden === true, "reload reopened a converged completed round");
  assert(reloaded.element("reviewedCount").textContent === 2, "reload lost distributed completions");
}

function testRepeatedReviewAndUndoKeepsStorageBounded() {
  const harness = createHarness();
  harness.element("cardReveal").dispatch("click");
  let firstSize = 0;

  for (let index = 0; index < 70; index += 1) {
    harness.document.feedback[index % harness.document.feedback.length].dispatch("click");
    harness.element("undoRating").dispatch("click");
    if (index === 0) firstSize = harness.storage.get("ayaya-jp-srs-v1").length;
  }

  const raw = harness.storage.get("ayaya-jp-srs-v1");
  const saved = JSON.parse(raw);
  const round = saved.__rounds.decks.hiragana;
  assert((saved["card-a"]?.reviews || 0) === 0, "repeated Undo retained a review");
  assert(!raw.includes("ratingHistory"), "repeated reviews recreated unbounded history");
  assert(!raw.includes("ratingTombstones"), "repeated Undo recreated an unbounded tombstone list");
  assert(round.reopened.length === 1, "repeated Undo duplicated its bounded reopened marker");
  assert(round.queue.includes("card-a"), "repeated Undo did not keep the card pending");
  assert(raw.length <= firstSize + 120, "storage kept growing with repeated review and Undo cycles");
}

function testReadyStatusDoesNotFlash() {
  const harness = createHarness();
  const appStatus = harness.element("appStatus");

  assert(appStatus.hidden === true, "ready status remains visible after initialization");
  assert(
    !appStatus.textContent.includes("应用已就绪"),
    "initialization writes an unwanted ready-status message",
  );
}

function testFreshRoundStartsInRandomOrder() {
  const cards = ["a", "b", "c", "d"].map((id) => baseCard({ id: `card-${id}` }));
  const sourceOrder = cards.map((card) => card.id);
  const harness = createHarness({ kanaCards: cards, random: () => 0 });
  const round = JSON.parse(harness.storage.get("ayaya-jp-srs-v1")).__rounds.decks.hiragana;

  assert(
    JSON.stringify(round.queue) === JSON.stringify(["card-b", "card-c", "card-d", "card-a"]),
    "fresh round did not use the Fisher-Yates result",
  );
  assert(
    JSON.stringify(round.queue) !== JSON.stringify(sourceOrder),
    "fresh round retained the source data order",
  );
  assert(round.queueOrderVersion === 1, "fresh round did not persist its queue order version");
}

function testLegacyQueueOrderMigratesOnlyOnce() {
  const cards = ["a", "b", "c", "d", "done"].map((id) =>
    baseCard({ id: `card-${id}` }),
  );
  const legacyQueue = cards.slice(0, 4).map((card) => card.id);
  const initialStore = JSON.stringify({
    __rounds: {
      activeDeck: "hiragana",
      decks: {
        hiragana: {
          completed: ["card-done"],
          queue: legacyQueue,
          roundGeneration: 3,
          roundId: "round:hiragana:3",
          rounds: 3,
        },
      },
    },
  });
  const firstLoad = createHarness({ initialStore, kanaCards: cards, random: () => 0 });
  const firstSaved = JSON.parse(firstLoad.storage.get("ayaya-jp-srs-v1"));
  const firstRound = firstSaved.__rounds.decks.hiragana;

  assert(
    JSON.stringify(firstRound.queue) !== JSON.stringify(legacyQueue),
    "legacy fixed queue was not reshuffled",
  );
  assert(
    JSON.stringify([...firstRound.queue].sort()) === JSON.stringify([...legacyQueue].sort()),
    "legacy queue migration lost or duplicated pending cards",
  );
  assert(
    JSON.stringify(firstRound.completed) === JSON.stringify(["card-done"]),
    "legacy queue migration changed completed progress",
  );
  assert(
    firstRound.rounds === 3 &&
      firstRound.roundGeneration === 3 &&
      firstRound.roundId === "round:hiragana:3",
    "legacy queue migration changed the round epoch",
  );
  assert(firstRound.queueOrderVersion === 1, "legacy queue migration was not marked complete");

  const secondLoad = createHarness({
    initialStore: JSON.stringify(firstSaved),
    kanaCards: cards,
    random: () => 0.75,
  });
  const secondRound = JSON.parse(secondLoad.storage.get("ayaya-jp-srs-v1")).__rounds.decks.hiragana;
  assert(
    JSON.stringify(secondRound.queue) === JSON.stringify(firstRound.queue),
    "current round reshuffled again on reload",
  );
}

function testConcurrentQueueMergePreservesCanonicalRandomOrder() {
  const cards = ["a", "b", "c"].map((id) => baseCard({ id: `card-${id}` }));
  const harness = createHarness({ kanaCards: cards, random: () => 0 });
  const baseRound = {
    completed: [],
    queue: [],
    queueOrderVersion: 1,
    roundGeneration: 0,
    roundId: "round:hiragana:0",
    rounds: 0,
  };
  const localRound = { ...baseRound, queue: ["card-c", "card-a", "card-b"] };
  const remoteRound = { ...baseRound, queue: ["card-b", "card-c", "card-a"] };
  const merge = (left, right) =>
    harness.context.mergeConcurrentDeckRound(
      "hiragana",
      baseRound,
      left,
      right,
      {},
      new Set(),
    ).queue;
  const leftFirst = merge(localRound, remoteRound);
  const rightFirst = merge(remoteRound, localRound);

  assert(
    JSON.stringify(leftFirst) === JSON.stringify(rightFirst),
    "concurrent queue merge depends on local/remote argument order",
  );
  assert(
    JSON.stringify(leftFirst) !== JSON.stringify(["card-a", "card-b", "card-c"]),
    "concurrent queue merge sorted cards back into ID order",
  );
}

function testConcurrentUndosReopenCardsInCanonicalOrder() {
  const cards = ["a", "b", "c"].map((id) => baseCard({ id: `card-${id}` }));
  const harness = createHarness({ kanaCards: cards, random: () => 0 });
  const baseRound = {
    completed: ["card-a", "card-b"],
    completionEvents: {
      "card-a": ["event-a"],
      "card-b": ["event-b"],
    },
    queue: ["card-c"],
    queueOrderVersion: 1,
    roundGeneration: 0,
    roundId: "round:hiragana:0",
    rounds: 0,
  };
  const leftRound = {
    ...baseRound,
    completed: ["card-b"],
    completionEvents: { "card-b": ["event-b"] },
    queue: ["card-a", "card-c"],
    reopened: ["card-a"],
  };
  const rightRound = {
    ...baseRound,
    completed: ["card-a"],
    completionEvents: { "card-a": ["event-a"] },
    queue: ["card-b", "card-c"],
    reopened: ["card-b"],
  };
  const cardStates = {};
  const merge = (left, right) =>
    harness.context.mergeConcurrentDeckRound(
      "hiragana",
      baseRound,
      left,
      right,
      cardStates,
    ).queue;
  const leftFirst = merge(leftRound, rightRound);
  const rightFirst = merge(rightRound, leftRound);

  assert(
    JSON.stringify(leftFirst) === JSON.stringify(rightFirst),
    "simultaneous Undo queue depends on local/remote argument order",
  );
  assert(
    JSON.stringify(leftFirst) === JSON.stringify(["card-c", "card-a", "card-b"]),
    "simultaneous Undo did not preserve the canonical pending-card order",
  );
}

function testJapaneseToChineseVocabHidesReadingUntilReveal() {
  ["vocab-ja-zh", "vocab-n4-ja-zh"].forEach((deck) => {
    const card = baseCard({
      answer: "见面；遇见",
      answerLang: "zh-CN",
      deck,
      id: `${deck}-fixture`,
      isVocab: true,
      meta: "读音：あう　罗马音：au",
      prompt: "会う",
      subtle: "读音：あう",
      subtleLang: "zh-CN",
      type: `${deck.includes("n4") ? "N4" : "N5"} 搭配 日文 → 中文`,
    });
    const harness = createHarness({
      tabDecks: ["hiragana", deck],
      vocabCards: [card],
    });
    harness.tabs[1].dispatch("click");

    assert(harness.element("cardPrompt").textContent === "会う", `${deck} lost its word prompt`);
    assert(
      harness.element("cardType").textContent === "搭配" && !harness.element("cardType").hidden,
      `${deck} did not expose its learning category label`,
    );
    assert(
      harness.element("cardReveal").getAttribute("aria-describedby").includes("cardType"),
      `${deck} learning category is missing from the accessible description`,
    );
    assert(harness.element("cardSubtle").hidden, `${deck} front reading remains visible`);
    assert(harness.element("cardSubtle").textContent === "", `${deck} front reading remains in DOM text`);
    assert(
      !harness.element("cardReveal").getAttribute("aria-describedby").includes("cardSubtle"),
      `${deck} front reading remains in the accessible description`,
    );
    assert(harness.element("answerMeta").textContent === "", `${deck} answer leaked before reveal`);

    harness.element("cardReveal").dispatch("click");
    assert(
      harness.element("answerMain").textContent === "见面；遇见",
      `${deck} did not reveal the Chinese meaning`,
    );
    assert(
      JSON.stringify(metaRowTexts(harness.element("answerMeta"))) ===
        JSON.stringify([["读音", "あう"], ["罗马音", "au"]]),
      `${deck} did not restore the reading after reveal`,
    );
    assert(harness.element("cardSubtle").hidden, `${deck} front reading reappeared after reveal`);
  });
}

function testChinesePromptDoesNotSpeakHiddenAnswer() {
  const hiddenAnswer = baseCard({
    answer: "会う",
    deck: "vocab-zh-ja",
    frontSpeech: "",
    id: "vocab-n5-002-zh",
    isVocab: true,
    prompt: "见面",
    promptLang: "zh-CN",
    sentenceAnswer: "友達に会います",
    speech: "あう",
  });
  const harness = createHarness({
    tabDecks: ["hiragana", "vocab-zh-ja"],
    vocabCards: [hiddenAnswer],
  });
  harness.tabs[1].dispatch("click");
  const speaker = harness.element("speakWord");
  assert(speaker.hidden && speaker.disabled, "speaker exposes a Chinese-prompt answer before reveal");
  const before = harness.spoken.length;
  speaker.dispatch("click");
  assert(harness.spoken.length === before, "disabled front speaker still played the hidden answer");

  harness.element("cardReveal").dispatch("click");
  assert(!speaker.hidden && !speaker.disabled, "answer replay is unavailable after reveal");
  assert(harness.spoken.at(-1)?.text === "あう", "reveal did not play the modeled Japanese answer");
}

function testStaleSpeechCallbackCannotUseNextCard() {
  const first = baseCard({
    deck: "hiragana",
    examples: [{ ja: "A-example", zh: "A", romaji: "a" }],
    frontSpeech: "A-word",
    id: "a",
    prompt: "A",
    speech: "A-word",
  });
  const second = baseCard({
    deck: "katakana",
    examples: [{ ja: "B-example", zh: "B", romaji: "b" }],
    frontSpeech: "B-word",
    id: "b",
    prompt: "B",
    speech: "B-word",
  });
  const harness = createHarness({ kanaCards: [first, second], tabDecks: ["hiragana", "katakana"] });
  harness.element("cardReveal").dispatch("click");
  const oldUtterance = harness.spoken.at(-1);
  harness.tabs[1].dispatch("click");
  const countAfterTransition = harness.spoken.length;
  oldUtterance.emitEnd();
  assert(
    harness.spoken.length === countAfterTransition,
    "a stale speech callback played audio after the card changed",
  );
}

function testExamplesSpeakReviewedKana() {
  const card = baseCard({
    examples: [{ ja: "毎年、夏に海へ行きます", romaji: "mainen, natsu ni umi e ikimasu", speech: "まいねん、なつにうみえいきます", zh: "每年夏天去海边" }],
    frontSpeech: "まいねん",
    id: "example-speech",
    prompt: "毎年",
    speech: "まいねん",
  });
  const harness = createHarness({ kanaCards: [card] });
  harness.element("cardReveal").dispatch("click");
  harness.spoken.at(-1).emitEnd();
  assert(
    harness.spoken.map((utterance) => utterance.text).join("|") === "まいねん|まいねん、なつにうみえいきます",
    `reveal did not speak the reviewed example kana: ${harness.spoken.map((utterance) => utterance.text).join("|")}`,
  );

  const findButton = (element) =>
    element.classList?.contains("example-speak") ? element : element.children?.map(findButton).find(Boolean);
  findButton(harness.element("examplesList")).dispatch("click");
  assert(
    harness.spoken.at(-1)?.text === "まいねん、なつにうみえいきます",
    `example button spoke ${harness.spoken.at(-1)?.text} instead of its reviewed kana`,
  );
}

function testIdleSpeechAvoidsSafariCancelRace() {
  const harness = createHarness({ kanaCards: [baseCard({ id: "speech-race" })] });

  harness.element("cardReveal").dispatch("click");
  assert(harness.spoken.length === 1, "reveal did not start speech");
  assert(harness.element("speechStatus").hidden, "normal speech exposed a playback notice");
  assert(
    harness.spoken[0].voice == null,
    "speech forced a device-specific voice instead of using the browser default",
  );
  assert(
    harness.speechSynthesis.cancelCount === 0,
    "idle speech was canceled immediately before playback",
  );

  harness.element("speakWord").dispatch("click");
  assert(harness.speechSynthesis.cancelCount === 1, "active replay did not cancel the old utterance");
  assert(harness.spoken.length === 2, "active replay did not schedule a replacement utterance");
}

function testSpeechFailureIsVisibleAndRetriesOnce() {
  const harness = createHarness({ kanaCards: [baseCard({ id: "speech-error" })] });
  harness.element("cardReveal").dispatch("click");
  harness.spoken[0].emitError("audio-hardware");

  assert(harness.spoken.length === 2, "transient speech failure did not retry once");
  assert(
    harness.element("speechStatus").textContent.includes("自动重试"),
    "speech retry did not expose its retry state",
  );

  harness.spoken[1].emitError("audio-hardware");
  assert(
    harness.element("speechStatus").textContent.includes("播放失败"),
    "final speech failure remained silent",
  );
  assert(
    harness.element("speechStatus").dataset.state === "error",
    "speech failure status is not marked as an error",
  );
}

function testChoiceAnswerMarksRelevantMobileDetails() {
  const choiceCard = baseCard({
    choices: [
      { id: "correct", isCorrect: true, reason: "correct reason", text: "correct" },
      { id: "wrong-a", isCorrect: false, reason: "wrong a reason", text: "wrong a" },
      { id: "wrong-b", isCorrect: false, reason: "wrong b reason", text: "wrong b" },
      { id: "wrong-c", isCorrect: false, reason: "wrong c reason", text: "wrong c" },
    ],
    correctChoiceId: "correct",
    deck: "grammar-n5-choice",
    examples: [{ ja: "例文", romaji: "reibun", zh: "例句" }],
    grammarLevel: "N5",
    id: "choice-mobile",
    isChoice: true,
    isGrammar: true,
  });
  const harness = createHarness({
    grammarCards: [choiceCard],
    tabDecks: ["hiragana", "grammar-n5-choice"],
  });

  harness.tabs[1].dispatch("click");
  const wrongChoice = harness
    .element("choiceList")
    .children.find((choice) => choice.dataset.choiceId !== "correct");
  wrongChoice.dispatch("click");

  assert(
    harness.element("choiceList").classList.contains("is-answered"),
    "answered choice list is missing its compact-layout state",
  );
  assert(
    harness.element("choiceList").children.length === 4,
    "answered choice removed desktop distractors from the DOM",
  );
  assert(
    harness.element("choiceFeedback").children.length === 4,
    "answered choice removed desktop explanations from the DOM",
  );
  assert(!harness.element("exampleBlock").hidden, "answered choice removed its desktop examples");
}

function testShuffleDoesNotUseRandomSort() {
  assert(
    !/\.sort\(\s*\(\s*\)\s*=>\s*Math\.random\(\)\s*-\s*0\.5\s*\)/u.test(read("app.js")),
    "shuffle still uses a biased random sort comparator",
  );
}

const tests = [
  ["storage failure falls back to memory", testStorageFailureFallsBackToMemory],
  ["invalid array storage is replaced", testInvalidArrayStoreIsReplaced],
  ["legacy rating history compacts to bounded state", testLegacyRatingHistoryCompactsToBoundedState],
  ["N4 legacy progress and queue migrate to stable IDs", testN4LegacyProgressAndRoundQueueMigration],
  ["N5 duplicate aliases merge and deduplicate", testN5DuplicateAliasesMergeWithoutDuplicateQueueEntries],
  ["retired stable source IDs migrate to retained entries", testRetiredStableSourceIdMigratesToRetainedEntry],
  ["direct-upgrade cross-level aliases leave old deck queues", testDirectUpgradeCrossLevelAliasDropsFromOldDeckQueue],
  ["retired vocabulary progress moves to grammar", testRetiredVocabProgressMovesToGrammarFamily],
  ["sidebar focus and inert lifecycle", testSidebarFocusAndInertLifecycle],
  ["legacy mistake ratings open in the 不认识 pool", testLegacyMistakeRatingsOpenInUnknownPool],
  ["ratings move cards between 认识 and 不认识", testRatingsMoveCardsBetweenPools],
  ["Undo returns a 不认识 card to the main pool", testUndoReturnsUnknownCardToMainPool],
  ["new 不认识 cards keep finished 不认识 rounds", testNewUnknownCardKeepsFinishedUnknownRounds],
  ["number keys rate revealed cards", testNumberKeysRateRevealedCards],
  ["wrong choices enter the 不认识 pool", testWrongChoiceEntersUnknownPool],
  ["blank study-card surface reveals the answer", testStudyCardSurfaceRevealsAnswer],
  ["study surface excludes interactive descendants", testStudySurfaceExcludesInteractiveDescendants],
  ["reveal and rating focus valid actions", testRevealAndRatingMoveFocusToValidActions],
  ["last-card Undo remains visible", testLastCardUndoRemainsVisibleAndRestoresFocus],
  ["context changes clear stale Undo", testContextChangesClearStaleUndo],
  ["completed rounds can restart safely", testCompletedRoundCanRestartWithoutStaleMerge],
  ["legacy completed rounds cannot override restarts", testLegacyCompletedRoundCannotOverrideRestartedEpoch],
  ["stale tabs cannot complete cards in newer rounds", testStaleTabCannotCompleteCardInNewerRound],
  ["simultaneous first opens share one epoch", testSimultaneousFirstOpenUsesOneSharedEpoch],
  ["concurrent restarts preserve both ratings", testConcurrentRestartsPreserveBothNewRoundRatings],
  ["choice and empty decks keep valid focus", testChoiceAndEmptyDeckFocusLifecycle],
  ["stale tabs merge independent progress", testStaleTabsMergeIndependentProgressAndRounds],
  ["concurrent ratings preserve bounded aggregate progress", testConcurrentRatingsOnSameCardAreDeduplicatedSafely],
  ["storage events refresh stale queues", testStorageEventRefreshesStaleVisibleQueue],
  ["storage writes preserve choice explanations", testStorageWritePreservesCompletedChoiceExplanation],
  ["storage writes move focus off invalid Undo", testStorageWriteMovesFocusOffInvalidatedUndo],
  ["unrelated storage writes keep Undo", testUnrelatedStorageWriteKeepsUndoAvailable],
  ["concurrent Undo keeps the remote review", testConcurrentRatingUndoKeepsRemoteReviewConsistent],
  ["out-of-order storage events cannot roll back", testOutOfOrderStorageEventCannotRollbackNewerWriterRevision],
  ["overwritten branches reconcile to storage", testOverwrittenBranchIsReconciledBackToStorage],
  ["Undo reopens only its card across same-deck writes", testUndoAgainstOtherCardCompletionReopensOnlyUndoneCard],
  ["distributed last-card completion counts once", testDistributedLastCardCompletionIncrementsRoundOnce],
  ["repeated review and Undo keep storage bounded", testRepeatedReviewAndUndoKeepsStorageBounded],
  ["ready status does not flash", testReadyStatusDoesNotFlash],
  ["fresh rounds start in random order", testFreshRoundStartsInRandomOrder],
  ["legacy fixed queues migrate only once", testLegacyQueueOrderMigratesOnlyOnce],
  ["concurrent queue merge preserves random order", testConcurrentQueueMergePreservesCanonicalRandomOrder],
  ["concurrent Undo reopens cards canonically", testConcurrentUndosReopenCardsInCanonicalOrder],
  ["Japanese-to-Chinese vocab hides reading until reveal", testJapaneseToChineseVocabHidesReadingUntilReveal],
  ["Chinese prompts do not speak hidden answers", testChinesePromptDoesNotSpeakHiddenAnswer],
  ["stale TTS callbacks are ignored", testStaleSpeechCallbackCannotUseNextCard],
  ["examples speak their reviewed kana", testExamplesSpeakReviewedKana],
  ["idle TTS avoids Safari cancel races", testIdleSpeechAvoidsSafariCancelRace],
  ["speech failures are visible and retry once", testSpeechFailureIsVisibleAndRetriesOnce],
  ["choice answers mark relevant mobile details", testChoiceAnswerMarksRelevantMobileDetails],
  ["shuffle avoids random sort", testShuffleDoesNotUseRandomSort],
];

const failures = [];
tests.forEach(([name, test]) => {
  try {
    test();
    console.log(`ok - ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.stack || error.message}`);
    console.error(`not ok - ${name}`);
  }
});

if (failures.length) {
  console.error(`\n${failures.length} app contract test(s) failed:`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`All ${tests.length} app contract tests passed.`);
}
