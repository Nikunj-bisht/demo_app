import { logger } from "react-native-logs";
const defaultConfig = {
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    },
    transportOptions: {
      colors: {
        debug: 'greenBright',
        info: 'blueBright',
        warn: 'yellowBright',
        error: 'redBright',
      },
    },
  };
const log = logger.createLogger(defaultConfig);
function loggerInfo(data) {
  log.info(data);
}
function loggerError(data) {
  log.error(data);
}
function loggerWarn(data) {
  log.warn(data);
}
const Logger = {
  loggerError,
  loggerInfo,
  loggerWarn
};
export default Logger;