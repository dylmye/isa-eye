/** @type {import('workbox-build').GenerateSWOptions} */
module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{css,js,ttf,ico,html,json}"],
  swDest: "dist/service-worker.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      method: "GET",
      handler: "StaleWhileRevalidate",
      urlPattern: ({ request }) =>
        request.url.startsWith(
          "https://static-assets.isaeye.uk/default-bank-icons/",
        ),
    },
  ],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB limit
};
