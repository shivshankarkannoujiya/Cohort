import winston from "winston";

export const logger = winston.createLogger({
  level: "Info",
  format: winston.format.json(),
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);
