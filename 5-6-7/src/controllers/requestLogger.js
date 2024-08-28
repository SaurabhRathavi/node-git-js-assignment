// // requestLogger.js
// import log from "./logger.js";

// const requestLogger = (req, res, next) => {
//   const { method, url, headers } = req;
//   const timestamp = new Date().toISOString();
//   const message = `${timestamp} ${method} ${url} - ${headers["user-agent"]}`;

//   log(message);
//   next();
// };

// export default requestLogger;



// requestLogger.js
import logger from './logger.js';

const requestLogger = (req, res, next) => {
  const { method, url, headers } = req;
  const message = `${method} ${url} - ${headers['user-agent']}`;
  
  logger.info(message); // Log the request details
  next();
};

export default requestLogger;
