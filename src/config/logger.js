const { createLogger, format, transports } = require("winston");

const { combine, timestamp, printf } = format;

const customFormat = printf(
  ({ timestamp, level, message }) =>
    `${timestamp} [${level.toUpperCase()}]: ${message}`
);

const logger = createLogger({
  format: combine(timestamp(), customFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
