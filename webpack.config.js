// webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "@noble/secp256k1": require.resolve('@noble/secp256k1'),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),
      "util": require.resolve("util/")
    }
  },
  // Other configurations (if any) go here
};
