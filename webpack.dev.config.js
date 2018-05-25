const server = require('./webpack/webpack.server.dev.config.js');
const client = require('./webpack/webpack.client.dev.config.js');

module.exports = [
  server,
  client,
];
