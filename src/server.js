const app = require("./app");
const config = require("./configs/config");
const logger = require("./utils/logger");

const server = app.listen(config.PORT);

(() => {
  try {
    // eslint-disable-next-line no-console
    logger.info(`APPLICATION_STARTED`, {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL,
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    logger.error(`APPLICATION_ERROR`, { meta: err });
    server.close((error) => {
      if (error) {
        // eslint-disable-next-line no-console
        logger.error(`APPLICATION_ERROR`, { meta: error });
        process.exit(1);
      }
    });
  }
})();
