importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({ modulePathPrefix: 'workbox-v3.6.3/' });

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);

const cachingGroup = [
    {
        "url": 'jsonplaceholder.typicode',
        "cachingTime": 60 * 60 * 4 
    },
    {
        "url": 'yahoo',
        "cachingTime": 60 * 60 * 1
    }
]

workbox.routing.registerRoute(/.*.(?:png|jpg|jpeg|svg|ico)$/, workbox.strategies.cacheFirst({
    cacheName: 'meme-images'
}), 'GET');


cachingGroup.map((data,index)=>{
    var arr = data.url.split(".");
    var regexUrl = (arr.length > 1)?data.url.replace(".", "\\."):data.url;
    var expurl = new RegExp('.*(?:'+regexUrl+')\\.com.*$');
    (
        workbox.routing.registerRoute(expurl, workbox.strategies.cacheFirst({
            cacheName: 'dummy-data',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: data.cachingTime,
                }),
            ],
        }))
    )
})