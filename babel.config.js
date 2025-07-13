/** biome-ignore-all lint/complexity/useArrowFunction: config file */

// Learn more https://docs.expo.dev/versions/latest/config/babel/

/** @type {(api: import('@babel/core').ConfigAPI) => import('@babel/core').TransformOptions} */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // added by nativewind
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
