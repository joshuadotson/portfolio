const withTM = require('next-transpile-modules')([
  '@joshuadotson/ui',
  '@joshuadotson/features'
]);

module.exports = withTM({
  reactStrictMode: true
});
