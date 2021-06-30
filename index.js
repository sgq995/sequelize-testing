const config = require('./config');
const app = require('./app');

const port = config.server.port;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
