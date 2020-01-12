importScripts("precache-manifest.cf0311f6f8c0a52aa6284162cc3a55ad.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  }
