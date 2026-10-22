"use strict";

// Offline study and instant repeat visits. GitHub Pages caches everything for
// only 10 minutes, so without this a returning visitor revalidates every data
// file and clip. Registered by app.js on https (and localhost) only.
//
// - Pages: network first (content fixes must reach learners), cached copy
//   when offline or after NAVIGATION_TIMEOUT_MS on a stalled connection.
// - ?v=<content hash> assets: cache first; a new hash is a new URL, and older
//   versions of the same file are dropped when it is stored.
// - Audio clips: cached copy at once, refreshed in the background, because a
//   clip re-rendered after a prosody fix keeps its URL.
// Bump CACHE_VERSION to discard every cache on the next activation.
const CACHE_VERSION = "v1";
const CACHE_PREFIX = "ayaya-jp-";
const PAGES = `${CACHE_PREFIX}pages-${CACHE_VERSION}`;
const ASSETS = `${CACHE_PREFIX}assets-${CACHE_VERSION}`;
const AUDIO = `${CACHE_PREFIX}audio-${CACHE_VERSION}`;
const NAVIGATION_TIMEOUT_MS = 3000;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const current = new Set([PAGES, ASSETS, AUDIO]);
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && !current.has(key))
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, PAGES, NAVIGATION_TIMEOUT_MS));
  } else if (url.pathname.endsWith(".mp3")) {
    const response = audioResponse(event);
    if (response) event.respondWith(response);
  } else if (url.searchParams.has("v")) {
    event.respondWith(cacheFirstVersioned(request));
  } else {
    event.respondWith(networkFirst(request, PAGES));
  }
});

function isCacheable(response) {
  return response.ok && response.status === 200 && response.type === "basic";
}

async function networkFirst(request, cacheName, timeoutMs = 0) {
  const cache = await caches.open(cacheName);
  const network = fetch(request).then((response) => {
    if (isCacheable(response)) cache.put(request, response.clone());
    return response;
  });
  // A cached copy may win the race; the network error is handled below.
  network.catch(() => undefined);

  let timer;
  const timeout = timeoutMs
    ? new Promise((resolve) => {
        timer = setTimeout(resolve, timeoutMs);
      }).then(() => cache.match(request))
    : null;
  try {
    const response = await (timeout
      ? Promise.race([network, timeout.then((cached) => cached || network)])
      : network);
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

async function cacheFirstVersioned(request) {
  const cache = await caches.open(ASSETS);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (isCacheable(response)) {
    const { pathname } = new URL(request.url);
    const stale = (await cache.keys()).filter(
      (key) => new URL(key.url).pathname === pathname && key.url !== request.url,
    );
    await Promise.all(stale.map((key) => cache.delete(key)));
    await cache.put(request, response.clone());
  }
  return response;
}

// Clips are stored whole. A Range request (an <audio> element streaming a clip
// that was not preloaded) is answered from a cached copy when there is one and
// otherwise left to the network.
function audioResponse(event) {
  const { request } = event;
  const range = request.headers.get("range");
  if (!range) return staleWhileRevalidate(event, AUDIO);
  return (async () => {
    const cached = await caches.match(request.url, { cacheName: AUDIO });
    if (!cached) return fetch(request);
    return (await rangeResponse(cached, range)) || fetch(request);
  })();
}

async function staleWhileRevalidate(event, cacheName) {
  const { request } = event;
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const refresh = fetch(request).then(async (response) => {
    if (isCacheable(response)) await cache.put(request, response.clone());
    return response;
  });
  if (cached) {
    event.waitUntil(refresh.catch(() => undefined));
    return cached;
  }
  return refresh;
}

async function rangeResponse(response, range) {
  const match = /^bytes=(\d*)-(\d*)$/u.exec(range.trim());
  if (!match) return null;
  const body = await response.arrayBuffer();
  const size = body.byteLength;
  let start;
  let end;
  if (match[1] === "") {
    const suffix = Number(match[2]);
    if (!suffix) return null;
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
  }
  if (start >= size || start > end) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  }
  return new Response(body.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "audio/mpeg",
      "Content-Length": String(end - start + 1),
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
    },
  });
}
