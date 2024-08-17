import winston, {Logger} from "winston";

let logger: Logger;

function createLogger() {
  let date_ob = new Date();
  const date = ("0" + date_ob.getDate()).slice(-2);
  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  const year = date_ob.getFullYear();

  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {service: "user-service"},
    transports: [
      new winston.transports.File({
        filename: "log/" + year + "-" + month + "-" + date + "-error.log",
        level: "error",
      }),
      new winston.transports.File({
        filename: "log/" + year + "-" + month + "-" + date + "-combined.log",
      }),
    ],
  });
}

function getLogger() {
  if (!logger) {
    logger = createLogger();
  }
  return logger;
}

export async function writeLog(level: string, message: any) {
  const logger = getLogger();
  const time = new Date().toISOString();

  logger.log({
    level: level,
    time: time,
    message: message,
  });

  return null;
}
