module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // drizzle orm: https://orm.drizzle.team/docs/get-started/expo-new#step-7---update-babel-config
    plugins: [["inline-import", { extensions: [".sql"] }]],
  };
};

