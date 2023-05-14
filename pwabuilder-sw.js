// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // .then((cache) => cache.add(offlineFallbackPage))
      .then((cache) => cache.addAll([
        //   只要有一個載入失敗，就全部失敗，所以盡量少
        "0樣本(文檔).html",
        "0樣本.html",
        "AccelonLogo2017.html",
        "bookmarks_link.html",
        "C3_Example.html",
        "cbreader Font Big.css",
        "cbreader Font Middle.css",
        "cbreader2019.css",
        "CssClockmore.html",
        "CssClockred.html",
        "D3_Example.html",
        "D3_pack_layout_Tipitaka_History.html",
        "D3_tree_Vertical_2Kinds.html",
        "D3_tree_Vertical_Box.html",
        "D3_tree_Vertical_only.html",
        "D3_tree_Vertical_Tipitaka_History.html",
        "index.html",
        "Lum1.html",
        "Lum2.html",
        "README.md",
        "■正規集.html",
        "●傳誠手稿字型呈現測試.html",
        "七月牌位列印.html",
        "佛七時間表.html",
        "排班(表格抽籤)2.html",
        "整月回向文1.html",
        "日期計算機.html",
        "誦戒前懺悔1.html",
        "課誦回向法器板眼.html",
        "資料庫Link.html",
        "農曆台灣月曆-佛誕v.html",
        "農曆台灣月曆-個人月曆.html",
        "農曆台灣月曆-手機3.html",
        "農曆台灣月曆-手機4六個月的月曆.html",
        "農曆台灣月曆-課誦本佛誕日.html",
        "齋天年齡轉換.html",
        "pic/AccelonLogo2014.png",
        "pic/dead-other.jpg",
        "pic/dead.png",
        "pic/dead2-1.png",
        "pic/dead2.png",
        "pic/dead3.png",
        "pic/dead4-1.png",
        "pic/dead4.png",
        "pic/live-other.png",
        "pic/live.png",
        "pic/live2.png",
        "pic/live3.png",
        "pic/pic-bg",
        "pic/wun-1.png",
        "pic/wun.png",
        "pic/wun2-1.png",
        "pic/wun2.png",
        "pic/老和尚的蓮花.ico",
        "pic/pic-bg/live-other.png",
        "pic/pic-bg/live.png",
        "pic/pic-bg/live2.png",
        "pic/pic-bg/live3.png",
        "pic/pic-bg/wun2-1.png"
      ]))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});