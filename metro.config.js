// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push(
  /** Prevents canvaskit-wasm dependency errors */
  "wasm",
);

// modified by nativewind
module.exports = withNativeWind(config, {
  input: "./assets/styles/global.css",
});
