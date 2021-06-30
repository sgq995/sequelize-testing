const provider = require('./api/provider');
const part = require('./api/part');

module.exports = function routes(app) {
  // Provider
  app.use('/api/provider', provider);

  // Part
  app.use('/api/part', part);
}
