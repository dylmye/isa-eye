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
          "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/",
        ),
    },
  ],
};
