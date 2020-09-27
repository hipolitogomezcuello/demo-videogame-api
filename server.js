const dotenv = require("dotenv");
const logger = require("./src/config/logger");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
require("isomorphic-fetch");
const app = require("./src/app");
const db = require("./src/config/db");

const port = 3000;

db.sync().then(() => {
  const server = app.listen(port, () =>
    logger.info(`Server listening on port ${port}`)
  );
  server.setTimeout(5 * 60 * 1000);
});
