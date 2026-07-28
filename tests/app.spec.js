"use strict";

const { test, expect } = require("@playwright/test");

const STORAGE_KEY = "ayaya-jp-srs-v1";
const HIRAGANA_IDS = Array.from({ length: 46 }, (_, index) => `hiragana-${index}`);

function cardState(rating = "clear", at = 1) {
  return {
    lastChoiceCorrectIndex: null,
    lastRating: rating,
    lastRatedAt: at,
    ratingHistory: [{ rating, at, eventId: `fixture-${rating}-${at}` }],
    reviews: 1,
  };
}

function progressFixture({ deck, queue, completed = [], rounds = 0, cards = {} }) {
  return {
    ...cards,
    __rounds: {
      activeDeck: deck,
      decks: {
        [deck]: {
          queue,
          queueOrderVersion: 1,
          completed,
          rounds,
        },
      },
    },
  };
}

function isolatedHiraganaFixture(queue, cards = {}) {
  return progressFixture({
    deck: "hiragana",
    queue,
    completed: HIRAGANA_IDS.filter((cardId) => !queue.includes(cardId)),
    cards,
  });
}

async function openWithStore(page, state, options = {}) {
  await page.addInitScript(
    ({ storageKey, storedState, ignoreStorageEvents, fixedRandom }) => {
      localStorage.clear();
      localStorage.setItem(storageKey, JSON.stringify(storedState));
      if (typeof fixedRandom === "number") Math.random = () => fixedRandom;

      if (ignoreStorageEvents) {
        const nativeAddEventListener = window.addEventListener;
        window.addEventListener = function addEventListener(type, listener, eventOptions) {
          if (type === "storage") return undefined;
          return nativeAddEventListener.call(this, type, listener, eventOptions);
        };
      }
    },
    {
      storageKey: STORAGE_KEY,
      storedState: state,
      ignoreStorageEvents: options.ignoreStorageEvents === true,
      fixedRandom: options.fixedRandom,
    },
  );
  await page.goto("/");
  await waitForApp(page);
}

async function waitForApp(page) {
  await expect(page.locator(".study-area")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator("#fatalErrorBanner")).toBeHidden();
}

async function expectAnswerHidden(page) {
  await expect(page.locator("#answerPanel")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator("#answerPanel")).not.toHaveClass(/\bis-revealed\b/);
}

async function expectAnswerRevealed(page) {
  await expect(page.locator("#answerPanel")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("#answerPanel")).toHaveClass(/\bis-revealed\b/);
}

async function boundingBox(locator) {
  const box = await locator.boundingBox();
  expect(box).not.toBeNull();
  return box;
}

function expectContainedBy(outer, inner, tolerance = 1) {
  expect(inner.x).toBeGreaterThanOrEqual(outer.x - tolerance);
  expect(inner.y).toBeGreaterThanOrEqual(outer.y - tolerance);
  expect(inner.x + inner.width).toBeLessThanOrEqual(outer.x + outer.width + tolerance);
  expect(inner.y + inner.height).toBeLessThanOrEqual(outer.y + outer.height + tolerance);
}

async function expectNoHorizontalOverflow(page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
}

test("raw and initialized page never exposes a ready or loading banner", async ({ page, request }) => {
  const response = await request.get("/");
  expect(response.ok()).toBeTruthy();
  const rawHtml = await response.text();
  expect(rawHtml).not.toMatch(/应用已就绪|正在准备学习卡片/);

  await openWithStore(
    page,
    isolatedHiraganaFixture(["hiragana-0"]),
  );

  await expect(page.locator("#appStatus")).toBeHidden();
  await expect(page.locator("#appStatus")).toHaveText("");
  await expect(page.locator("#loadErrorBanner")).toBeHidden();
  await expect(page.locator("body")).not.toContainText("应用已就绪");
  await expect(page.locator("body")).not.toContainText("正在准备学习卡片");
});

test("a failed main script exposes the fatal fallback instead of a blank app", async ({ page }) => {
  await page.route("**/app.js", (route) => route.abort());
  await page.goto("/");

  await expect(page.locator(".study-area")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator("#appStatus")).toBeHidden();
  await expect(page.locator("#fatalErrorBanner")).toBeVisible();
  await expect(page.locator("#fatalErrorBanner")).toBeFocused();
});

test("whole study surface reveals while interactive controls do not leak clicks", async ({ page }) => {
  await openWithStore(
    page,
    isolatedHiraganaFixture(
      ["hiragana-0", "hiragana-1"],
      { "hiragana-0": cardState() },
    ),
  );

  await expectAnswerHidden(page);

  await page.locator("#deckMenuButton").click();
  await expect(page.locator("#deckSidebar")).toHaveClass(/\bis-open\b/);
  await expectAnswerHidden(page);
  await page.locator("#closeDeckMenu").click();

  await page.locator("#speakWord").click();
  await expectAnswerHidden(page);

  await page.locator("#reviewedCount").click();
  await expectAnswerRevealed(page);

  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#dueCount")).toHaveText("1");
  await expectAnswerHidden(page);

  await page.locator("#memoryChain").click();
  await expectAnswerRevealed(page);
});

test("Japanese-to-Chinese vocab hides reading until the answer is revealed", async ({ page }) => {
  await openWithStore(
    page,
    progressFixture({
      deck: "vocab-ja-zh",
      queue: ["vocab-entry-n5-002-ja"],
    }),
  );

  await expect(page.locator("#cardPrompt")).toHaveText("会う");
  await expect(page.locator("#cardSubtle")).toBeHidden();
  await expect(page.locator("#cardSubtle")).toHaveText("");
  await expect(page.locator("#cardReveal")).not.toHaveAttribute(
    "aria-describedby",
    /cardSubtle/,
  );
  await expect(page.locator("#answerMeta")).toHaveText("");
  await expect(page.locator("#flashcard")).not.toContainText("あう");

  await page.locator("#cardReveal").click();
  await expectAnswerRevealed(page);
  await expect(page.locator("#answerMain")).toHaveText("见面；遇见");
  await expect(page.locator("#answerMeta")).toContainText("读音：あう");
  await expect(page.locator("#answerMeta")).toContainText("罗马音：au");
  await expect(page.locator("#cardSubtle")).toBeHidden();
});

test("legacy fixed kana order reshuffles once and remains stable on reload", async ({
  page,
  context,
}) => {
  const legacyQueue = ["hiragana-0", "hiragana-1", "hiragana-2", "hiragana-3"];
  const legacyState = isolatedHiraganaFixture(legacyQueue);
  delete legacyState.__rounds.decks.hiragana.queueOrderVersion;

  await openWithStore(page, legacyState, { fixedRandom: 0 });
  const firstQueue = await page.evaluate(
    (storageKey) => JSON.parse(localStorage.getItem(storageKey)).__rounds.decks.hiragana.queue,
    STORAGE_KEY,
  );
  expect(firstQueue).toEqual(["hiragana-1", "hiragana-2", "hiragana-3", "hiragana-0"]);

  const reloadPage = await context.newPage();
  await reloadPage.goto("/");
  await waitForApp(reloadPage);
  const reloadedQueue = await reloadPage.evaluate(
    (storageKey) => JSON.parse(localStorage.getItem(storageKey)).__rounds.decks.hiragana.queue,
    STORAGE_KEY,
  );
  expect(reloadedQueue).toEqual(firstQueue);
});

test("long mobile cards stay contained and never overlap the answer", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "mobile geometry regression");

  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n4-ja-zh",
      queue: ["grammar-n4-grammar-064-ja"],
    }),
  );

  for (const height of [640, 720]) {
    await page.setViewportSize({ width: 320, height });
    await page.reload();
    await waitForApp(page);

    await expect(page.locator("#cardPrompt")).not.toHaveText("");
    await expect(page.locator("#cardSubtle")).not.toHaveText("");

    const studyBox = await boundingBox(page.locator("#studyCard"));
    const flashcardBox = await boundingBox(page.locator("#flashcard"));
    const promptBox = await boundingBox(page.locator("#cardPrompt"));
    const subtleBox = await boundingBox(page.locator("#cardSubtle"));

    expect(studyBox.height).toBeGreaterThanOrEqual(height - 32);
    expectContainedBy(flashcardBox, promptBox);
    expectContainedBy(flashcardBox, subtleBox);
    await expectNoHorizontalOverflow(page);

    await page.locator("#cardReveal").click();
    await expectAnswerRevealed(page);

    const revealedFlashcardBox = await boundingBox(page.locator("#flashcard"));
    const revealedPromptBox = await boundingBox(page.locator("#cardPrompt"));
    const revealedSubtleBox = await boundingBox(page.locator("#cardSubtle"));
    const answerBox = await boundingBox(page.locator("#answerMain"));

    expectContainedBy(revealedFlashcardBox, revealedPromptBox);
    expectContainedBy(revealedFlashcardBox, revealedSubtleBox);
    expect(revealedSubtleBox.y + revealedSubtleBox.height).toBeLessThanOrEqual(answerBox.y + 1);
    await expectNoHorizontalOverflow(page);

    await page.locator("#deckMenuButton").click();
    await page.locator('[data-deck="vocab-mistakes"]').click();
    await expect(page.locator("#emptyState")).toBeVisible();
    const emptyBox = await boundingBox(page.locator("#emptyState"));
    expect(emptyBox.height).toBeGreaterThanOrEqual(height - 32);
    expect(emptyBox.x).toBeGreaterThanOrEqual(0);
    expect(emptyBox.x + emptyBox.width).toBeLessThanOrEqual(320);
    await expectNoHorizontalOverflow(page);
  }
});

test("speaker hover preserves its vertical position", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "mouse hover regression");

  await openWithStore(
    page,
    isolatedHiraganaFixture(["hiragana-0"]),
  );

  const speaker = page.locator("#speakWord");
  const before = await boundingBox(speaker);
  await speaker.hover();
  await page.waitForTimeout(200);
  const after = await boundingBox(speaker);

  expect(Math.abs(after.y - before.y)).toBeLessThanOrEqual(0.75);
});

test("short landscape cards keep their content and answer separated", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "landscape geometry regression");

  await page.setViewportSize({ width: 844, height: 390 });
  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n4-ja-zh",
      queue: ["grammar-n4-grammar-064-ja"],
    }),
  );

  const studyBox = await boundingBox(page.locator("#studyCard"));
  const flashcardBox = await boundingBox(page.locator("#flashcard"));
  const promptBox = await boundingBox(page.locator("#cardPrompt"));
  const subtleBox = await boundingBox(page.locator("#cardSubtle"));
  expect(studyBox.height).toBeGreaterThanOrEqual(358);
  expectContainedBy(flashcardBox, promptBox);
  expectContainedBy(flashcardBox, subtleBox);
  await expectNoHorizontalOverflow(page);

  await page.locator("#cardReveal").click();
  const answerBox = await boundingBox(page.locator("#answerMain"));
  const revealedSubtleBox = await boundingBox(page.locator("#cardSubtle"));
  expect(revealedSubtleBox.y + revealedSubtleBox.height).toBeLessThanOrEqual(answerBox.y + 1);
  await expectNoHorizontalOverflow(page);
});

test("reveal, rating, next card, and empty deck keep a useful focus target", async ({ page }) => {
  await openWithStore(
    page,
    isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]),
  );

  await page.locator("#cardReveal").click();
  await expect(page.locator("#answerPanel")).toBeFocused();

  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#cardReveal")).toBeFocused();
  await expectAnswerHidden(page);

  await page.locator("#deckMenuButton").click();
  await page.locator('[data-deck="vocab-mistakes"]').click();
  await expect(page.locator("#emptyState")).toBeVisible();
  await expect(page.locator("#emptyDeckMenuButton")).toBeFocused();
});

test("the last card keeps Undo visible, focused, and usable", async ({ page }) => {
  await openWithStore(
    page,
    isolatedHiraganaFixture(["hiragana-0"]),
  );

  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();

  await expect(page.locator("#emptyState")).toBeVisible();
  const undo = page.locator("#emptyState #undoRating");
  await expect(undo).toBeVisible();
  await expect(undo).toBeEnabled();
  await expect(undo).toBeFocused();

  await undo.click();
  await expect(page.locator("#studyCard")).toBeVisible();
  await expect(page.locator("#emptyState")).toBeHidden();
  await expectAnswerRevealed(page);
  await expect(page.locator("#answerPanel")).toBeFocused();
});

test("a stale tab cannot overwrite progress saved by another tab", async ({ page, context }) => {
  const initialState = isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]);
  await openWithStore(page, initialState, { ignoreStorageEvents: true });

  const freshTab = await context.newPage();
  await freshTab.goto("/");
  await waitForApp(freshTab);

  await freshTab.locator("#cardReveal").click();
  await freshTab.locator('.feedback[data-rating="clear"]').click();
  await expect(freshTab.locator("#dueCount")).toHaveText("1");

  // The first page deliberately ignored the storage event, so this write is genuinely stale.
  await expect(page.locator("#dueCount")).toHaveText("2");
  await page.locator("#deckMenuButton").click();
  await page.locator('[data-deck="katakana"]').click();

  await expect
    .poll(() =>
      freshTab.evaluate((storageKey) => {
        const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
        return {
          completed: stored.__rounds?.decks?.hiragana?.completed || [],
          history: stored["hiragana-0"]?.ratingHistory || [],
          lastRating: stored["hiragana-0"]?.lastRating || null,
          reviews: stored["hiragana-0"]?.reviews || 0,
        };
      }, STORAGE_KEY),
    )
    .toMatchObject({
      completed: expect.arrayContaining(["hiragana-0"]),
      history: expect.arrayContaining([expect.objectContaining({ rating: "clear" })]),
      lastRating: "clear",
      reviews: 1,
    });

  await freshTab.close();
});

test("Undo reopens only its card after another tab completes the same round", async ({
  page,
  context,
}) => {
  const initialState = isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]);
  await openWithStore(page, initialState, { ignoreStorageEvents: true });

  // Give the second tab the opposite queue order while leaving the first tab's
  // in-memory round untouched. Both tabs now act on genuinely independent cards.
  await page.evaluate((storageKey) => {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    stored.__rounds.decks.hiragana.queue = ["hiragana-1", "hiragana-0"];
    localStorage.setItem(storageKey, JSON.stringify(stored));
  }, STORAGE_KEY);

  const remoteTab = await context.newPage();
  await remoteTab.addInitScript(() => {
    const nativeAddEventListener = window.addEventListener;
    window.addEventListener = function addEventListener(type, listener, eventOptions) {
      if (type === "storage") return undefined;
      return nativeAddEventListener.call(this, type, listener, eventOptions);
    };
  });
  await remoteTab.goto("/");
  await waitForApp(remoteTab);

  await expect(page.locator("#cardPrompt")).toHaveText("あ");
  await expect(remoteTab.locator("#cardPrompt")).toHaveText("い");

  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await remoteTab.locator("#cardReveal").click();
  await remoteTab.locator('.feedback[data-rating="clear"]').click();

  await expect
    .poll(() =>
      remoteTab.evaluate((storageKey) => {
        const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
        return stored.__rounds?.decks?.hiragana?.rounds;
      }, STORAGE_KEY),
    )
    .toBe(1);

  await page.locator("#undoRating").click();

  await expect
    .poll(() =>
      page.evaluate((storageKey) => {
        const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
        const round = stored.__rounds?.decks?.hiragana || {};
        return {
          completed: round.completed || [],
          queue: round.queue || [],
          rounds: round.rounds,
        };
      }, STORAGE_KEY),
    )
    .toMatchObject({
      completed: expect.arrayContaining(["hiragana-1"]),
      queue: expect.arrayContaining(["hiragana-0"]),
      rounds: 0,
    });

  const verifyTab = await context.newPage();
  await verifyTab.goto("/");
  await waitForApp(verifyTab);
  await expect(verifyTab.locator("#dueCount")).toHaveText("1");
  await expect(verifyTab.locator("#reviewedCount")).toHaveText("45");
  await expect(verifyTab.locator("#cardPrompt")).toHaveText("あ");

  await verifyTab.close();
  await remoteTab.close();
});

test("a stale old-round tab cannot overwrite a restarted round", async ({ page, context }) => {
  const initialState = isolatedHiraganaFixture(["hiragana-0"]);
  await openWithStore(page, initialState);

  const staleTab = await context.newPage();
  await staleTab.addInitScript(() => {
    const nativeAddEventListener = window.addEventListener;
    window.addEventListener = function addEventListener(type, listener, eventOptions) {
      if (type === "storage") return undefined;
      return nativeAddEventListener.call(this, type, listener, eventOptions);
    };
  });
  await staleTab.goto("/");
  await waitForApp(staleTab);

  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#emptyState")).toBeVisible();
  await page.locator("#studyAnyWay").click();
  await expect(page.locator("#dueCount")).toHaveText("46");
  await expect(page.locator("#reviewedCount")).toHaveText("0");

  // This tab still believes it is rating the final card of the previous round.
  await staleTab.locator("#cardReveal").click();
  await staleTab.locator('.feedback[data-rating="clear"]').click();

  await expect
    .poll(() =>
      page.evaluate((storageKey) => {
        const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
        const round = stored.__rounds?.decks?.hiragana || {};
        return {
          completed: round.completed?.length,
          queue: round.queue?.length,
          rounds: round.rounds,
        };
      }, STORAGE_KEY),
    )
    .toEqual({ completed: 0, queue: 46, rounds: 1 });

  await expect(page.locator("#dueCount")).toHaveText("46");
  await expect(page.locator("#reviewedCount")).toHaveText("0");

  const verifyTab = await context.newPage();
  await verifyTab.goto("/");
  await waitForApp(verifyTab);
  await expect(verifyTab.locator("#dueCount")).toHaveText("46");
  await expect(verifyTab.locator("#reviewedCount")).toHaveText("0");

  await verifyTab.close();
  await staleTab.close();
});

test("iPhone 14 fills the viewport and keeps pointer focus rings hidden", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "iphone-14-chromium", "iPhone 14 viewport regression");

  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n4-ja-zh",
      queue: ["grammar-n4-grammar-064-ja"],
    }),
  );
  await page.locator("#cardReveal").tap();
  await expectAnswerRevealed(page);

  const layout = await page.evaluate(() => {
    window.scrollTo(0, 200);
    const study = document.querySelector("#studyCard").getBoundingClientRect();
    const memory = document.querySelector("#memoryChain");
    const focusedStyle = getComputedStyle(document.activeElement);
    return {
      bodyOverflow: getComputedStyle(document.body).overflowY,
      documentHeight: document.documentElement.scrollHeight,
      inputMode: document.documentElement.dataset.inputMode,
      memoryOverflow: getComputedStyle(memory).overflowY,
      memoryTouchAction: getComputedStyle(memory).touchAction,
      outlineStyle: focusedStyle.outlineStyle,
      scrollY: window.scrollY,
      study: {
        height: study.height,
        width: study.width,
        x: study.x,
        y: study.y,
      },
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
    };
  });

  expect(layout.scrollY).toBe(0);
  expect(layout.documentHeight).toBe(layout.viewportHeight);
  expect(layout.bodyOverflow).toBe("hidden");
  expect(layout.memoryOverflow).toBe("auto");
  expect(layout.memoryTouchAction).toBe("pan-y");
  expect(layout.inputMode).toBe("pointer");
  expect(layout.outlineStyle).toBe("none");
  expect(layout.study).toMatchObject({ x: 0, y: 0 });
  expect(layout.study.width).toBeGreaterThanOrEqual(layout.viewportWidth);
  expect(layout.study.height).toBeGreaterThanOrEqual(layout.viewportHeight);

  await page.keyboard.press("Tab");
  await expect
    .poll(() => page.evaluate(() => document.documentElement.dataset.inputMode))
    .toBe("keyboard");
  await expect
    .poll(() => page.evaluate(() => getComputedStyle(document.activeElement).outlineStyle))
    .toBe("solid");
});

test("iPhone 14 choice cards fit without a second scrolling panel", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "iphone-14-chromium", "iPhone 14 viewport regression");

  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n5-choice",
      queue: ["grammar-n5-grammar-001-choice"],
    }),
  );

  const memory = page.locator("#memoryChain");
  const lastChoice = page.locator(".choice-option").last();
  let memoryBox = await boundingBox(memory);
  let lastChoiceBox = await boundingBox(lastChoice);
  expect(lastChoiceBox.y + lastChoiceBox.height).toBeLessThanOrEqual(memoryBox.y + 1);

  await page
    .locator('.choice-option:not([data-choice-id="n5-grammar-001-correct"])')
    .first()
    .tap();
  await expect(page.locator("#choiceNext")).toBeVisible();
  await expect(page.locator(".choice-option:visible")).toHaveCount(2);
  await expect(page.locator(".choice-reason:visible")).toHaveCount(2);

  const answeredLayout = await page.evaluate(() => {
    const answer = document.querySelector("#answerPanel").getBoundingClientRect();
    const feedback = document.querySelector("#choiceFeedback");
    const memoryChain = document.querySelector("#memoryChain").getBoundingClientRect();
    return {
      answerBottom: answer.bottom,
      feedbackClientHeight: feedback.clientHeight,
      feedbackOverflow: getComputedStyle(feedback).overflowY,
      feedbackScrollHeight: feedback.scrollHeight,
      memoryBottom: memoryChain.bottom,
      memoryTop: memoryChain.top,
      viewportHeight: window.innerHeight,
    };
  });

  expect(answeredLayout.answerBottom).toBeLessThanOrEqual(answeredLayout.memoryTop + 1);
  expect(answeredLayout.feedbackScrollHeight).toBe(answeredLayout.feedbackClientHeight);
  expect(answeredLayout.feedbackOverflow).toBe("hidden");
  expect(answeredLayout.memoryBottom).toBeLessThanOrEqual(answeredLayout.viewportHeight);
});
