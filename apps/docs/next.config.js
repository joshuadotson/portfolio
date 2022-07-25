const withTM = require("next-transpile-modules")(["@joshuadotson/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
