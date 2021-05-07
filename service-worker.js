/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "28e94978bec6606a3f195d92644bf9d5"
  },
  {
    "url": "assets/css/0.styles.9a97baea.css",
    "revision": "e39d682fb24e2b1d0e21ef8fe6ac75e8"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9cc6b11d.js",
    "revision": "379150bef5a039ddcfef0aa3bad149e8"
  },
  {
    "url": "assets/js/10.7731c25a.js",
    "revision": "62912937382a816ee0cff6e356c545fd"
  },
  {
    "url": "assets/js/11.2ecdfbe8.js",
    "revision": "8263eef2de1977d4ac0ced73b65f3d4b"
  },
  {
    "url": "assets/js/12.274e0dff.js",
    "revision": "7957adf892adf1cda9dfbe9ae3b5e5e1"
  },
  {
    "url": "assets/js/13.58e97691.js",
    "revision": "28f851975558ac94d4b34fbbd4a30704"
  },
  {
    "url": "assets/js/14.e0de9253.js",
    "revision": "8cee9a3fde31de799bf9c6a13d221ffc"
  },
  {
    "url": "assets/js/15.d8851423.js",
    "revision": "e2771b1198e0a681d75e1679b81ccd73"
  },
  {
    "url": "assets/js/16.35d0e592.js",
    "revision": "a12599de5bd2b29ea70cab93003fce36"
  },
  {
    "url": "assets/js/17.7ac5ef11.js",
    "revision": "38f7d39e3482dfd76edc44189b4877a4"
  },
  {
    "url": "assets/js/18.ef03219f.js",
    "revision": "96905d2e722ccc855005703a5f68a256"
  },
  {
    "url": "assets/js/19.a01665a4.js",
    "revision": "bbacdcb5e8baa10fb1117c0d92f9a2c6"
  },
  {
    "url": "assets/js/20.652fd599.js",
    "revision": "77878cdc60bc0f6428aee460e5dd2378"
  },
  {
    "url": "assets/js/21.504a1a23.js",
    "revision": "b5531b86b98a90adb1e07120dc6ec1da"
  },
  {
    "url": "assets/js/22.b8a73e68.js",
    "revision": "f3914dbe38a359f96f010422aaf2d507"
  },
  {
    "url": "assets/js/23.23f058bb.js",
    "revision": "ca67b00f11dcdadeeabf86a323666d2c"
  },
  {
    "url": "assets/js/3.105665e5.js",
    "revision": "49e6beed0d2469205700611116833ced"
  },
  {
    "url": "assets/js/4.0e74bf5e.js",
    "revision": "d350bc2e44717663b8feeb17b66d2f64"
  },
  {
    "url": "assets/js/5.790db8a5.js",
    "revision": "e2c243123b75750f136f370cc21cf566"
  },
  {
    "url": "assets/js/6.dd07345d.js",
    "revision": "e52da53eeb35e57f88f873e14d4c63e4"
  },
  {
    "url": "assets/js/7.007cf54e.js",
    "revision": "e056613b106a9511a36197a9e9d8ac03"
  },
  {
    "url": "assets/js/8.e0f57e5d.js",
    "revision": "3b3af62c3cd6bd51f07f7b6bb8381720"
  },
  {
    "url": "assets/js/9.155c4710.js",
    "revision": "02509e07becd0198ab6edd617d599201"
  },
  {
    "url": "assets/js/app.d49fe05f.js",
    "revision": "9930555bccd0f156f8b657fdb88f0b9e"
  },
  {
    "url": "categories/C/index.html",
    "revision": "427a8b3c751c9eb45fdb8e9c83499f23"
  },
  {
    "url": "categories/index.html",
    "revision": "ab595ce1430780730a5259fe40a368c9"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "795d254790318da4dafa7d7ae2baaca2"
  },
  {
    "url": "categories/ORM/index.html",
    "revision": "b9d5decb4b8ed70ea9baa416d11f508b"
  },
  {
    "url": "categories/SpringBoot/index.html",
    "revision": "ccc8e8d54d392dfd0a3abebd93a033d9"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "7bfa15859e5073a89ad496ebef257f10"
  },
  {
    "url": "categories/技术杂文/index.html",
    "revision": "2e36f736d21460d4f071073356e8be5e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "50a4e15f8f69ba7babf79998cf571c3d"
  },
  {
    "url": "head.jpg",
    "revision": "74786171d894ec89f5f4b62c1cb92388"
  },
  {
    "url": "icon-72x72.png",
    "revision": "9d474b6934d3bc1c11df83825e10a22d"
  },
  {
    "url": "icons8-cursor-30.png",
    "revision": "d53d45c65e789ed24c4cdd2800b5ef3f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "9c7933210ec5250e7e01afcf99b3fda4"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "2bb94f28989644f27bc8433bc19b19f1"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "c187c1264f3f8b99ff2a126ca3495fb5"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "5384701ba1f6d68d6f41b24c4e259dc9"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "03ed6b7027db9d9b610bd5286f375e1c"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "0895b29c6e0f8f24ab4546b9854ab55d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "9d474b6934d3bc1c11df83825e10a22d"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "b759984de8f088921c0cadf44bafe26e"
  },
  {
    "url": "index.html",
    "revision": "ba364c7377553b430bf25a4cd18e4495"
  },
  {
    "url": "tag/C/index.html",
    "revision": "cf9dafb7d68604f5cae5f8979d7fd082"
  },
  {
    "url": "tag/Code/index.html",
    "revision": "1293fca9801200ebd50b5bf62bbba70b"
  },
  {
    "url": "tag/index.html",
    "revision": "53506a4604c3e579cf25b13608102130"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "49ae90181ad03ea1cf580aca6aa8a21d"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "23a754124b1442f28c8ad34f5cf16f33"
  },
  {
    "url": "tag/Mybatis/index.html",
    "revision": "a7cdbdd4d227e318cb7416f9fdcd9042"
  },
  {
    "url": "tag/NoSQL/index.html",
    "revision": "98479005f21836f76947589e79c22244"
  },
  {
    "url": "tag/Ribbon/index.html",
    "revision": "a1cc2184a68a6038098dc463eb5e4cbc"
  },
  {
    "url": "tag/Swagger/index.html",
    "revision": "616ff37eaa1381128da11d3fb3ac5097"
  },
  {
    "url": "tag/持久层/index.html",
    "revision": "2fc85258cb9eef982a9774331007dbae"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "8ad482740831f82b32059c00d08ebd06"
  },
  {
    "url": "tag/设备/index.html",
    "revision": "31d523dc8a3ebe2512b7d94bd09aca89"
  },
  {
    "url": "tag/负载均衡/index.html",
    "revision": "51537e2cb789486612f79a1a1b2d0b71"
  },
  {
    "url": "timeline/index.html",
    "revision": "daf2098cb783f9d502535de962d4c19c"
  },
  {
    "url": "views/Java/HashMapCode.html",
    "revision": "7601f603f6657b24c730cdde6e884654"
  },
  {
    "url": "views/Life/Info.html",
    "revision": "69b767c92783fbcdac0ede8a93bbb1dc"
  },
  {
    "url": "views/Life/Just_Chat.html",
    "revision": "3ace29b6b85ba1b128eead8d409653e7"
  },
  {
    "url": "views/Life/Twitter.html",
    "revision": "69cbc9d29cc93a0133bd81637c8905fe"
  },
  {
    "url": "views/other/guide.html",
    "revision": "4e8398918cdfae786c880be6a1c48faa"
  },
  {
    "url": "views/SpringBoot/About_Mybatis.html",
    "revision": "57d15a3ca30c49946da513bed2c13840"
  },
  {
    "url": "views/SpringBoot/JSR303.html",
    "revision": "2e3fd68a4b2a0139b5e21a05533c22ec"
  },
  {
    "url": "views/SpringBoot/Swagger_Configuration.html",
    "revision": "0edc5ffe850834c729da7dec9aa4d3af"
  },
  {
    "url": "views/Technical_Essay/CLanguageStandard.html",
    "revision": "838850a95166bddf08a1a2771723fb81"
  },
  {
    "url": "views/Technical_Essay/LoadBalancerRibbon.html",
    "revision": "b0b83d109e83beb54cb92232b599b725"
  },
  {
    "url": "views/Technical_Essay/MongoDB_Installation.html",
    "revision": "503605f9a2945b9cab676c2e7abd9bef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
