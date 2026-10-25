"use strict";

const { test, expect } = require("./fixtures");

const STORAGE_KEY = "ayaya-jp-srs-v1";
const HIRAGANA_IDS = Array.from({ length: 46 }, (_, index) => `hiragana-${index}`);

function cardState(rating = "clear", at = 1) {
  return {
    lastChoiceCorrectIndex: null,
    lastEvent: { rating, at, eventId: `fixture-${rating}-${at}` },
    lastRating: rating,
    lastRatedAt: at,
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
  // A held study-data script also holds the load event; such tests wait for the DOM.
  await page.goto("/", options.waitUntil ? { waitUntil: options.waitUntil } : undefined);
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
  await page.route(/\/app\.js(\?|$)/u, (route) => route.abort());
  await page.goto("/");

  await expect(page.locator(".study-area")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator("#appStatus")).toBeHidden();
  await expect(page.locator("#fatalErrorBanner")).toBeVisible();
  await expect(page.locator("#fatalErrorBanner")).toBeFocused();
});

test("revealing a card plays its pre-rendered VOICEVOX clip instead of speechSynthesis", async ({ page }) => {
  await page.addInitScript(() => {
    window.__clipPlays = [];
    window.__clipBlobs = [];
    window.__synthesisTexts = [];
    const nativeCreateObjectURL = URL.createObjectURL;
    URL.createObjectURL = (blob) => {
      const url = nativeCreateObjectURL.call(URL, blob);
      window.__clipBlobs.push(url);
      return url;
    };
    const nativePlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function play() {
      window.__clipPlays.push(this.src);
      return nativePlay.call(this);
    };
    if (window.speechSynthesis) {
      window.speechSynthesis.speak = (utterance) => window.__synthesisTexts.push(utterance.text);
    }
  });
  const clipRequests = [];
  page.on("request", (request) => {
    if (/\/audio\/[^/]+\/[0-9a-z]+\.mp3$/u.test(new URL(request.url()).pathname)) clipRequests.push(request);
  });
  const clipResponse = page.waitForResponse((response) =>
    /\/audio\/[^/]+\/[0-9a-z]+\.mp3$/u.test(new URL(response.url()).pathname),
  );
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0"]));
  // The card's clip is fetched while its front is shown, before any tap.
  expect((await clipResponse).ok()).toBe(true);
  await expect
    .poll(async () => clipRequests.length > 0 && (await page.evaluate(() => window.__clipBlobs.length)) === clipRequests.length)
    .toBe(true);
  const preloadedCount = clipRequests.length;

  await page.locator("#revealHint").click({ force: true });
  await expectAnswerRevealed(page);
  const plays = await page.evaluate(() => window.__clipPlays);
  expect(plays).toHaveLength(1);
  expect(plays[0]).toMatch(/^blob:/u);
  expect(await page.evaluate(() => window.__clipBlobs)).toContain(plays[0]);
  expect(clipRequests).toHaveLength(preloadedCount);
  expect(await page.evaluate(() => window.__synthesisTexts)).toEqual([]);
  await expect(page.locator("#deckSidebar .deck-credit")).toHaveText("音声：VOICEVOX:No.7");
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

  const speaker = page.locator("#speakWord");
  if (await speaker.isEnabled()) {
    await speaker.click();
  } else {
    await expect(page.locator("#speechStatus")).toContainText("不支持");
  }
  await expectAnswerHidden(page);

  // The hint ignores pointer events, so a tap on it lands on the study surface.
  await page.locator("#revealHint").click({ force: true });
  await expectAnswerRevealed(page);

  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#dueCount")).toHaveText("1");
  await expect(page.locator("#currentCount")).toHaveText("1");
  await expectAnswerHidden(page);

  await expect(page.locator("#memoryChain")).toHaveCount(0);
  await page.locator(".word-band").click({ position: { x: 4, y: 4 } });
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
  // The answer line lists the homophones ①② by frequency, each word with its
  // accent above its meaning; 会う is the more frequent あう and the card's own
  // word, so it comes first with its full meaning.
  await expect(page.locator("#answerMain .homophone")).toHaveText(["①会う1动见面；遇见", "②合う1动合适"]);
  await expect(page.locator("#answerMain .homophone-gloss .part-of-speech")).toHaveText(["动", "动"]);
  await expect(page.locator("#answerMain .homophone.is-current .homophone-word")).toHaveText("会う1");
  await expect(page.locator("#answerMain .homophone-word .pitch-accent")).toHaveText(["1", "1"]);
  await expect(page.locator("#cardSubtle")).toBeVisible();
  await expect(page.locator("#cardSubtle")).toHaveText("あう1");
  await expect(page.locator("#metaBlock")).toBeHidden();
});

test("words written alike list every reading on the 日→中 answer", async ({ page }) => {
  await openWithStore(
    page,
    progressFixture({
      deck: "vocab-ja-zh",
      queue: ["vocab-entry-n5-451-ja"],
    }),
  );

  // 十 is also read じゅう (another card): the front keeps the kana hidden and
  // the answer lists both readings, this card's first.
  await expect(page.locator("#cardPrompt")).toHaveText("十");
  await expect(page.locator("#cardSubtle")).toBeHidden();
  await page.locator("#cardReveal").click();
  await expectAnswerRevealed(page);
  await expect(page.locator("#cardSubtle")).toHaveText("とお1");
  const rows = page.locator("#answerMain .homophone.is-homograph");
  await expect(rows).toHaveCount(2);
  await expect(rows.nth(0)).toHaveClass(/is-current/);
  await expect(rows.nth(0).locator(".homophone-word")).toHaveText("とお1");
  await expect(rows.nth(1).locator(".homophone-word")).toContainText("じゅう");
  // Each reading sits on its own row, its meaning beside it.
  const [first, second] = await Promise.all([
    boundingBox(rows.nth(0).locator(".homophone-gloss")),
    boundingBox(rows.nth(1).locator(".homophone-gloss")),
  ]);
  expect(second.y).toBeGreaterThanOrEqual(first.y + first.height - 1);
  expect(Math.abs(second.x - first.x)).toBeLessThanOrEqual(1);
});

test("日→中 meanings lead with their part of speech", async ({ page }) => {
  await openWithStore(
    page,
    progressFixture({
      deck: "vocab-ja-zh",
      queue: ["vocab-entry-n5-006-ja"],
    }),
  );
  await page.locator("#cardReveal").click();
  await expectAnswerRevealed(page);
  await expect(page.locator("#answerMain")).toHaveText("形红色的");
  await expect(page.locator("#answerMain .part-of-speech")).toHaveText("形");
  // Small grey type on the meaning's own line.
  const [markBox, answerBox] = await Promise.all([
    boundingBox(page.locator("#answerMain .part-of-speech")),
    boundingBox(page.locator("#answerMain")),
  ]);
  expect(markBox.y).toBeGreaterThanOrEqual(answerBox.y);
  expect(markBox.y + markBox.height).toBeLessThanOrEqual(answerBox.y + answerBox.height);
});

test("中→日 vocab answers show no part of speech", async ({ page }) => {
  await openWithStore(
    page,
    progressFixture({
      deck: "vocab-zh-ja",
      queue: ["vocab-entry-n5-006-zh"],
    }),
  );
  await expect(page.locator("#cardPrompt")).toHaveText("红色的");
  await page.locator("#cardReveal").click();
  await expectAnswerRevealed(page);
  await expect(page.locator(".part-of-speech")).toHaveCount(0);
});

test("the module page footer stays on screen after rating", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]));
  await page.locator("#cardReveal").click({ force: true });
  await expectAnswerRevealed(page);
  await page.locator('[data-rating="clear"]').click();

  await page.locator("#deckMenuButton").click();
  const footer = page.locator(".deck-footer");
  await expect(footer).toBeVisible();
  const footerBox = await footer.boundingBox();
  const viewport = page.viewportSize();
  expect(footerBox.y + footerBox.height).toBeLessThanOrEqual(viewport.height + 1);
  expect(footerBox.x + footerBox.width).toBeLessThanOrEqual(viewport.width + 1);
});

test("a vocab block page lists its blocks and studies only the picked block", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0"]));
  await page.locator("#deckMenuButton").click();
  await page.locator('[data-deck="vocab-n3-ja-zh"]').click();
  const grid = page.locator("#blockGrid");
  await expect(grid).toBeVisible();
  await expect(page.locator(".deck-tabs")).toBeHidden();
  await expect(page.locator("#deckSidebarTitle")).toHaveText("N3 词汇 · 日→中");
  // N3 has 1526 words: 61 blocks of 25 or 26, after 全部.
  await expect(grid.locator(".block-tile")).toHaveCount(62);
  await expect(grid.locator('.block-tile[data-block=""] .block-status')).toHaveText("剩 1526");

  // The page scrolls inside the module page, never sideways.
  const overflow = await page.evaluate(() => {
    const element = document.querySelector("#blockGrid");
    return {
      page: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      grid: element.scrollWidth - element.clientWidth,
    };
  });
  expect(overflow.page).toBeLessThanOrEqual(0);
  expect(overflow.grid).toBeLessThanOrEqual(0);
  const lastTile = grid.locator(".block-tile").last();
  await lastTile.scrollIntoViewIfNeeded();
  await expect(lastTile).toBeInViewport();

  await grid.locator('.block-tile[data-block="3"]').click();
  await expect(page.locator("#deckSidebar")).not.toHaveClass(/\bis-open\b/);
  const left = Number(await page.locator("#currentCount").textContent());
  expect(left).toBeGreaterThanOrEqual(25);
  expect(left).toBeLessThanOrEqual(26);
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="unsure"]').click();
  await expect(page.locator("#fuzzyCount")).toHaveText("1");

  // 模块 from a block reopens that deck's block page, not the module grid.
  await page.locator("#deckMenuButton").click();
  await expect(grid).toBeVisible();
  await expect(page.locator(".deck-tabs")).toBeHidden();
  await expect(page.locator("#deckSidebarTitle")).toHaveText("N3 词汇 · 日→中");
  const tile = grid.locator('.block-tile[data-block="3"]');
  await expect(tile).toBeFocused();
  await expect(tile).toHaveAttribute("aria-pressed", "true");
  await expect(tile.locator(".block-status")).toHaveText(`剩 ${left - 1}`);
  await expect(tile).toHaveAttribute("data-state", "fuzzy");
  await expect(tile).toHaveAttribute("aria-label", /模糊 1 张/u);
  // The 模糊 card fills its share of the tile in amber, after no 认识 yet.
  await expect(tile).toHaveCSS("border-top-color", "rgb(227, 184, 79)");
  const fill = await tile.evaluate((element) => [
    element.style.getPropertyValue("--fill-known"),
    element.style.getPropertyValue("--fill-fuzzy"),
  ]);
  expect(fill[0]).toBe("0%");
  expect(Number.parseFloat(fill[1])).toBeCloseTo(100 / (left), 1);
  await page.locator("#closeDeckMenu").click();
  await expect(page.locator(".deck-tabs")).toBeVisible();
  await expect(page.locator('[data-deck="vocab-n3-ja-zh"]')).toBeFocused();
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
    await expect(page.locator("#cardPattern")).not.toHaveText("");
    await expect(page.locator("#cardPattern")).not.toContainText("文型");
    await expect(page.locator("#cardSubtle")).toBeHidden();

    const areaBox = await boundingBox(page.locator(".study-area"));
    const studyBox = await boundingBox(page.locator("#studyCard"));
    const barBox = await boundingBox(page.locator(".bottom-bar"));
    const flashcardBox = await boundingBox(page.locator("#flashcard"));
    const promptBox = await boundingBox(page.locator("#cardPrompt"));
    const patternBox = await boundingBox(page.locator("#cardPattern"));

    expect(areaBox.height).toBeGreaterThanOrEqual(height - 32);
    expect(studyBox.y + studyBox.height).toBeLessThanOrEqual(barBox.y + 1);
    expectContainedBy(flashcardBox, promptBox);
    expectContainedBy(flashcardBox, patternBox);
    expect(patternBox.y + patternBox.height).toBeLessThanOrEqual(promptBox.y + 1);
    const [patternSize, sentenceSize] = await Promise.all(
      ["#cardPattern", "#cardPrompt"].map((selector) =>
        page.locator(selector).evaluate((node) => parseFloat(getComputedStyle(node).fontSize)),
      ),
    );
    expect(patternSize).toBeGreaterThan(sentenceSize);
    await expectNoHorizontalOverflow(page);

    await page.locator("#cardReveal").click();
    await expectAnswerRevealed(page);

    const revealedFlashcardBox = await boundingBox(page.locator("#flashcard"));
    const revealedPromptBox = await boundingBox(page.locator("#cardPrompt"));
    const revealedPatternBox = await boundingBox(page.locator("#cardPattern"));
    const answerBox = await boundingBox(page.locator("#answerMain"));

    expectContainedBy(revealedFlashcardBox, revealedPromptBox);
    expectContainedBy(revealedFlashcardBox, revealedPatternBox);
    expect(revealedPromptBox.y + revealedPromptBox.height).toBeLessThanOrEqual(answerBox.y + 1);
    await expect(page.locator('.feedback[data-rating="clear"]')).toBeInViewport();
    await expectNoHorizontalOverflow(page);

    await page.locator("#poolToggle").click();
    await expect(page.locator("#emptyState")).toBeVisible();
    await expect(page.locator(".bottom-bar #poolToggle")).toBeVisible();
    const emptyBox = await boundingBox(page.locator("#emptyState"));
    const emptyBarBox = await boundingBox(page.locator(".bottom-bar"));
    expect(emptyBox.height + emptyBarBox.height).toBeGreaterThanOrEqual(height - 32);
    expect(emptyBox.y + emptyBox.height).toBeLessThanOrEqual(emptyBarBox.y + 1);
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

// Renders every card through the app's own render() (face down, then
// revealed; choice cards answered with a wrong option, which shows the most) and
// fails if the answer panel or the page would need scrolling.
test("every revealed card fits one screen without scrolling", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "sizes are set explicitly below");
  test.setTimeout(240_000);

  // Phone, laptop, and 11-inch iPad Air in Safari (portrait, and landscape
  // with the tab bar showing).
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1280, height: 800 },
    { width: 820, height: 1100 },
    { width: 1180, height: 700 },
  ]) {
    await page.setViewportSize(viewport);
    await openWithStore(page, {});
    const overflowing = await page.evaluate(() => {
      const families = [
        "hiragana",
        "vocab-ja-zh",
        "vocab-n4-ja-zh",
        "vocab-n3-ja-zh",
        "grammar-n5-zh-ja",
        "grammar-n4-zh-ja",
        "grammar-n3-zh-ja",
      ];
      const panel = document.querySelector("#answerPanel");
      const band = document.querySelector("#flashcard");
      const root = document.scrollingElement;
      const failures = [];
      const measure = (label) => {
        const overflow = Math.max(
          panel.scrollHeight - panel.clientHeight,
          band.scrollHeight - band.clientHeight,
          root.scrollHeight - innerHeight,
          root.scrollWidth - innerWidth,
        );
        if (overflow > 1) failures.push(`${label} +${overflow}px`);
      };
      for (const card of families.flatMap((deck) => getFamilyCards(deck))) {
        activeDeck = card.deck;
        currentCard = card;
        currentChoiceOptions = card.isChoice ? buildChoiceOptions(card) : [];
        selectedChoiceId = null;
        choiceHintShown = false;
        isRevealed = false;
        render();
        if (card.isChoice) {
          // The open 提示 sits above the four options before answering.
          choiceHintShown = true;
          render();
          measure(`${card.id} (提示)`);
          choiceHintShown = false;
          selectedChoiceId = currentChoiceOptions.find((option) => !option.isCorrect).id;
        }
        isRevealed = true;
        render();
        measure(card.id);
      }
      return failures;
    });
    expect(overflowing, `${viewport.width}x${viewport.height}`).toEqual([]);
  }
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

  const areaBox = await boundingBox(page.locator(".study-area"));
  const flashcardBox = await boundingBox(page.locator("#flashcard"));
  const promptBox = await boundingBox(page.locator("#cardPrompt"));
  const patternBox = await boundingBox(page.locator("#cardPattern"));
  expect(areaBox.height).toBeGreaterThanOrEqual(358);
  expectContainedBy(flashcardBox, promptBox);
  expectContainedBy(flashcardBox, patternBox);
  await expectNoHorizontalOverflow(page);

  await page.locator("#cardReveal").click();
  const answerBox = await boundingBox(page.locator("#answerMain"));
  const revealedPromptBox = await boundingBox(page.locator("#cardPrompt"));
  expect(revealedPromptBox.y + revealedPromptBox.height).toBeLessThanOrEqual(answerBox.y + 1);
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
  await page.locator('[data-deck="vocab-ja-zh"]').click();
  await page.locator('.block-tile[data-block=""]').click();
  await page.locator("#poolToggle").click();
  await expect(page.locator("#emptyState")).toBeVisible();
  await expect(page.locator("#deckMenuButton")).toBeFocused();
});

test("不认识 moves a card into its own pool and 认识 moves it back", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]));
  const toggle = page.locator("#poolToggle");
  await expect(page.locator(".feedback")).toHaveText(["认识", "模糊", "不认识"]);
  await expect(page.locator(".bottom-bar .bottom-tab-label")).toHaveText(["当前", "模糊", "不认识", "模块"]);
  await expect(toggle).toHaveAttribute("aria-pressed", "false");

  const unknownPrompt = await page.locator("#cardPrompt").textContent();
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="forgot"]').click();
  await expect(page.locator("#unknownCount")).toHaveText("1");
  await expect(page.locator("#dueCount")).toHaveText("1");

  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#roundStatusText")).toContainText("认识 45，不认识 1");

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#cardPrompt")).toHaveText(unknownPrompt);
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#emptyState")).toBeVisible();
  await expect(page.locator("#roundStatusText")).toHaveText("没有不认识的卡片。");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#unknownCount")).toBeHidden();

  await page.locator("#currentPoolTab").click();
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("#roundStatusText")).toContainText("认识 46，不认识 0");
  await expectNoHorizontalOverflow(page);
});

test("模糊 moves a card into the 模糊 pool between 当前 and 不认识", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]));
  const fuzzyTab = page.locator("#fuzzyPoolTab");
  const fuzzyPrompt = await page.locator("#cardPrompt").textContent();
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="unsure"]').click();
  await expect(page.locator("#fuzzyCount")).toHaveText("1");
  await expect(page.locator("#unknownCount")).toBeHidden();

  await fuzzyTab.click();
  await expect(fuzzyTab).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#cardPrompt")).toHaveText(fuzzyPrompt);
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="forgot"]').click();
  await expect(page.locator("#roundStatusText")).toHaveText("没有模糊的卡片。");
  await expect(page.locator("#unknownCount")).toHaveText("1");
  await expectNoHorizontalOverflow(page);
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

test("changing modules clears Undo from the previous deck", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0"]));
  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#emptyState #undoRating")).toBeEnabled();

  const emptyMenuButton = page.locator("#deckMenuButton");
  await expect(emptyMenuButton).toHaveAttribute("aria-controls", "deckSidebar");
  await expect(emptyMenuButton).toHaveAttribute("aria-expanded", "false");
  await emptyMenuButton.click();
  await expect(emptyMenuButton).toHaveAttribute("aria-expanded", "true");
  await page.locator('[data-deck="katakana"]').click();

  await expect(page.locator("#studyCard")).toBeVisible();
  await expect(page.locator(".stats-grid #undoRating")).toBeDisabled();
  await expect(page.locator('[data-deck="katakana"]')).toHaveAttribute("aria-pressed", "true");
  await expect(emptyMenuButton).toHaveAttribute("aria-expanded", "false");
});

test("browser Back closes the module page before leaving the app", async ({ page, baseURL }) => {
  await page.goto("/?previous=1");
  await waitForApp(page);
  await page.goto("/");
  await waitForApp(page);

  await page.locator("#deckMenuButton").click();
  await expect(page.locator("#deckSidebar")).toHaveClass(/\bis-open\b/);
  await expect(page.locator("#studyCard")).toHaveJSProperty("inert", true);
  await expect(page.locator("#poolToggle")).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(`${baseURL}/`);
  await expect(page.locator("#deckSidebar")).not.toHaveClass(/\bis-open\b/);
  await expect(page.locator("#deckSidebar")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator("#studyCard")).toHaveJSProperty("inert", false);
  await expect(page.locator("#deckMenuButton")).toBeFocused();

  await page.goForward();
  await expect(page.locator("#deckSidebar")).toHaveClass(/\bis-open\b/);
  await page.reload();
  await waitForApp(page);
  await expect(page.locator("#deckSidebar")).toHaveClass(/\bis-open\b/);
  await page.locator("#closeDeckMenu").click();
  await expect(page.locator("#deckSidebar")).not.toHaveClass(/\bis-open\b/);
  await expect
    .poll(() => page.evaluate(() => history.state?.__ayayaJpSidebarOpen === true))
    .toBe(false);

  await page.goBack();
  await expect(page).toHaveURL(`${baseURL}/?previous=1`);
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
          lastEvent: stored["hiragana-0"]?.lastEvent || null,
          lastRating: stored["hiragana-0"]?.lastRating || null,
          reviews: stored["hiragana-0"]?.reviews || 0,
        };
      }, STORAGE_KEY),
    )
    .toMatchObject({
      completed: expect.arrayContaining(["hiragana-0"]),
      lastEvent: expect.objectContaining({ rating: "clear" }),
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
  test.skip(testInfo.project.name !== "iphone-14-webkit", "iPhone 14 viewport regression");

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
    const area = document.querySelector(".study-area").getBoundingClientRect();
    const focusedStyle = getComputedStyle(document.activeElement);
    return {
      bodyOverflow: getComputedStyle(document.body).overflowY,
      documentHeight: document.documentElement.scrollHeight,
      inputMode: document.documentElement.dataset.inputMode,
      outlineStyle: focusedStyle.outlineStyle,
      scrollY: window.scrollY,
      areaHeight: area.height,
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
  expect(layout.inputMode).toBe("pointer");
  expect(layout.outlineStyle).toBe("none");
  await expect(page.locator("#memoryChain")).toHaveCount(0);
  expect(layout.study).toMatchObject({ x: 0, y: 0 });
  expect(layout.study.width).toBeGreaterThanOrEqual(layout.viewportWidth);
  expect(layout.areaHeight).toBeGreaterThanOrEqual(layout.viewportHeight);

  await page.keyboard.press("Tab");
  await expect
    .poll(() => page.evaluate(() => document.documentElement.dataset.inputMode))
    .toBe("keyboard");
});

test("说明 and 例句 stay inside the answer panel and only sit side by side when they fit", async ({
  page,
}, testInfo) => {
  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n5-pattern-zh",
      queue: ["grammar-n5-grammar-048-pattern"],
    }),
  );
  await page.locator("#cardReveal").click({ force: true });
  await expectAnswerRevealed(page);

  const layout = await page.evaluate(() => {
    const panel = document.querySelector("#answerPanel") || document.querySelector(".answer-panel");
    const style = getComputedStyle(panel);
    const box = panel.getBoundingClientRect();
    const contentLeft = box.left + parseFloat(style.paddingLeft);
    const contentRight = box.right - parseFloat(style.paddingRight);
    const sections = [...document.querySelectorAll(".answer-details > .answer-section:not([hidden])")].map(
      (section) => section.getBoundingClientRect(),
    );
    return {
      contentLeft,
      contentRight,
      sections: sections.map((rect) => ({ left: rect.left, right: rect.right, top: rect.top })),
    };
  });

  expect(layout.sections).toHaveLength(2);
  layout.sections.forEach((section) => {
    expect(section.left).toBeGreaterThanOrEqual(layout.contentLeft - 0.5);
    expect(section.right).toBeLessThanOrEqual(layout.contentRight + 0.5);
  });
  const sideBySide = layout.sections[0].top === layout.sections[1].top;
  expect(sideBySide).toBe(layout.contentRight - layout.contentLeft >= 380 * 2 + 12);
  if (testInfo.project.name === "desktop-chromium") expect(sideBySide).toBe(true);
});

test("iPhone 14 landscape scrolls only inside the study card", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name !== "iphone-14-landscape-webkit",
    "iPhone 14 landscape regression",
  );

  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n4-ja-zh",
      queue: ["grammar-n4-grammar-064-ja"],
    }),
  );
  await page.locator("#cardReveal").tap();
  await expectAnswerRevealed(page);

  const beforeScroll = await page.evaluate(() => {
    const study = document.querySelector("#studyCard");
    return {
      bodyOverflow: getComputedStyle(document.body).overflowY,
      documentHeight: document.documentElement.scrollHeight,
      overflowY: getComputedStyle(study).overflowY,
      scrollHeight: study.scrollHeight,
      studyHeight: study.clientHeight,
      viewportHeight: window.innerHeight,
      windowScrollY: window.scrollY,
    };
  });
  expect(beforeScroll.bodyOverflow).toBe("hidden");
  expect(beforeScroll.documentHeight).toBe(beforeScroll.viewportHeight);
  expect(beforeScroll.overflowY).toBe("auto");
  expect(beforeScroll.scrollHeight).toBeGreaterThan(beforeScroll.studyHeight);
  expect(beforeScroll.windowScrollY).toBe(0);

  await page.locator("#studyCard").evaluate((element) => {
    element.scrollTop = element.scrollHeight;
  });
  await expect(page.locator('.feedback[data-rating="forgot"]')).toBeInViewport();
  await expectNoHorizontalOverflow(page);
  await expect(page.locator("#memoryChain")).toHaveCount(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test("iPhone 14 choice cards fit without a second scrolling panel", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "iphone-14-webkit", "iPhone 14 viewport regression");

  await openWithStore(
    page,
    progressFixture({
      deck: "grammar-n5-choice",
      queue: ["grammar-n5-grammar-001-choice"],
    }),
  );

  const study = page.locator("#studyCard");
  const lastChoice = page.locator(".choice-option").last();
  const studyBox = await boundingBox(study);
  const lastChoiceBox = await boundingBox(lastChoice);
  expect(lastChoiceBox.y + lastChoiceBox.height).toBeLessThanOrEqual(
    studyBox.y + studyBox.height + 1,
  );
  // The choices get a row tall enough for them instead of overflowing it (and
  // growing up over the prompt).
  const choicePanel = await page.locator("#answerPanel").evaluate((element) => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
  }));
  expect(choicePanel.scrollHeight).toBeLessThanOrEqual(choicePanel.clientHeight + 1);

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
    const studyCard = document.querySelector("#studyCard").getBoundingClientRect();
    return {
      answerBottom: answer.bottom,
      feedbackClientHeight: feedback.clientHeight,
      feedbackOverflow: getComputedStyle(feedback).overflowY,
      feedbackScrollHeight: feedback.scrollHeight,
      studyBottom: studyCard.bottom,
      viewportHeight: window.innerHeight,
    };
  });

  expect(answeredLayout.answerBottom).toBeLessThanOrEqual(answeredLayout.studyBottom + 1);
  expect(answeredLayout.feedbackScrollHeight).toBe(answeredLayout.feedbackClientHeight);
  expect(answeredLayout.feedbackOverflow).toBe("hidden");
  expect(answeredLayout.studyBottom).toBeLessThanOrEqual(answeredLayout.viewportHeight);
  await expect(page.locator("#memoryChain")).toHaveCount(0);
});

test("revealed vocab shows its reviewed pitch accent", async ({ page }) => {
  await openWithStore(
    page,
    progressFixture({ deck: "vocab-ja-zh", queue: ["vocab-entry-n5-037-ja"] }),
  );
  await expect(page.locator("#cardPrompt")).toHaveText("雨");
  await expect(page.locator("#cardSubtle")).toBeHidden();

  // The kana sit under the word like phonetics, with the accent as a superscript.
  await page.locator("#cardReveal").click();
  await expect(page.locator("#cardSubtle")).toBeVisible();
  await expect(page.locator("#cardSubtle")).toHaveText("あめ1");
  await expect(page.locator("#cardSubtle sup.pitch-accent")).toHaveText("1");
  await expect(page.locator("#metaBlock")).toBeHidden();
});

test("returning to the page re-measures a stale viewport height", async ({ page }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0"]));
  await page.evaluate(() => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight + 240}px`);
  });
  expect(await page.evaluate(() => document.body.getBoundingClientRect().height)).toBeGreaterThan(
    await page.evaluate(() => window.innerHeight),
  );

  await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent("pageshow", { persisted: true })));
  await expect
    .poll(() =>
      page.evaluate(() => Math.round(document.body.getBoundingClientRect().height) - window.innerHeight),
    )
    .toBe(0);
  const studyBottom = await page.evaluate(() => document.querySelector("#studyCard").getBoundingClientRect().bottom);
  expect(studyBottom).toBeLessThanOrEqual(await page.evaluate(() => window.innerHeight));
});

// The study data (vocab, grammar, readings, card-data.js) loads after the first
// card; holding one of those files keeps all of it pending, since they run in
// order.
async function holdStudyData(page) {
  let release;
  const held = new Promise((resolve) => {
    release = resolve;
  });
  await page.route(/\/n5-codex-vocab\.js(\?|$)/u, async (route) => {
    await held;
    await route.continue();
  });
  return release;
}

test("kana cards show before the study data arrives", async ({ page }) => {
  const release = await holdStudyData(page);
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0"]), { waitUntil: "domcontentloaded" });
  await expect(page.locator("#cardPrompt")).toHaveText("あ");
  await expect(page.locator("#cardType")).toBeHidden();
  await page.locator("#cardReveal").click();
  await expectAnswerRevealed(page);

  release();
  await page.locator("#deckMenuButton").click();
  await page.locator('.tab-button[data-deck="vocab-ja-zh"]').click();
  await page.locator('.block-tile[data-block=""]').click();
  await expect(page.locator("#cardPrompt")).not.toHaveText("");
  await expect(page.locator("#emptyState")).toBeHidden();
});

test("a deck waiting for the study data keeps its stored round", async ({ page }) => {
  const release = await holdStudyData(page);
  const queue = ["vocab-entry-n5-001-ja", "vocab-entry-n5-002-ja"];
  await openWithStore(page, progressFixture({ deck: "vocab-ja-zh", queue }), {
    waitUntil: "domcontentloaded",
  });

  await expect(page.locator("#emptyState")).toBeVisible();
  await expect(page.locator("#emptyTitle")).toHaveText("正在加载…");
  await expect(page.locator("#studyAnyWay")).toBeHidden();
  const storedQueue = () =>
    page.evaluate(
      (storageKey) => JSON.parse(localStorage.getItem(storageKey)).__rounds.decks["vocab-ja-zh"].queue,
      STORAGE_KEY,
    );
  expect(await storedQueue()).toEqual(queue);

  release();
  await expect(page.locator("#cardPrompt")).toHaveText("ああ");
  await expect(page.locator("#emptyState")).toBeHidden();
  expect((await storedQueue()).slice(0, 2)).toEqual(queue);
});

test("a hidden tab merges another tab's ratings once it is shown again", async ({ page, context }) => {
  await openWithStore(page, isolatedHiraganaFixture(["hiragana-0", "hiragana-1"]));
  const hiddenTab = await context.newPage();
  await hiddenTab.addInitScript(() => {
    let state = "visible";
    Object.defineProperty(Document.prototype, "visibilityState", {
      configurable: true,
      get: () => state,
    });
    window.setTestVisibility = (next) => {
      state = next;
      document.dispatchEvent(new Event("visibilitychange"));
    };
  });
  await hiddenTab.goto("/");
  await waitForApp(hiddenTab);
  await expect(hiddenTab.locator("#dueCount")).toHaveText("2");
  await hiddenTab.evaluate(() => window.setTestVisibility("hidden"));

  await page.locator("#cardReveal").click();
  await page.locator('.feedback[data-rating="clear"]').click();
  await expect(page.locator("#dueCount")).toHaveText("1");

  // Hidden, it only notes the write.
  await hiddenTab.waitForTimeout(300);
  await expect(hiddenTab.locator("#dueCount")).toHaveText("2");

  await hiddenTab.evaluate(() => window.setTestVisibility("visible"));
  await expect(hiddenTab.locator("#dueCount")).toHaveText("1");
  await hiddenTab.close();
});

test("the service worker keeps the app usable offline", async ({ page, context, baseURL, browserName }) => {
  // The worker only registers on https or localhost; the other tests use 127.0.0.1.
  const origin = baseURL.replace("127.0.0.1", "localhost");
  await page.goto(`${origin}/`);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true);
  await expect(page.locator("#cardPrompt")).not.toHaveText("");
  await expect(page.locator("#loadErrorBanner")).toBeHidden();

  // Playwright's WebKit offline emulation fails the navigation itself ("internal
  // error") before a service worker can answer, so the offline reload is only
  // checked in Chromium; WebKit still checks that the worker takes control.
  if (browserName === "webkit") return;
  await context.setOffline(true);
  try {
    await page.reload();
    await expect(page.locator("#cardPrompt")).not.toHaveText("");
    await expect(page.locator("#fatalErrorBanner")).toBeHidden();
    await expect(page.locator("#loadErrorBanner")).toBeHidden();
  } finally {
    await context.setOffline(false);
  }
});
