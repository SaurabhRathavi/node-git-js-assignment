// import fs from "fs";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// // Get the current directory of the module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const logFilePath = join(__dirname, "logs", "api.log");


// const getTimestamp = () => new Date().toISOString();

// // Define a function to log messages to the file
// const log = (message) => {
//   const timestamp = getTimestamp();
//   const formattedMessage = `[${timestamp}] ${message}\n`;

//   // Ensure the logs directory exists
//   fs.mkdir(dirname(logFilePath), { recursive: true }, (err) => {
//     if (err) {
//       console.error("Failed to create logs directory:", err);
//     } else {
//       // Log to file
//       fs.appendFile(logFilePath, formattedMessage, (err) => {
//         if (err) {
//           console.error("Failed to write to log file:", err);
//         }
//       });
//     }
//   });
// };

// export default log;


// logger.js
import winston from 'winston';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current directory of the module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the path for the log file
const logFilePath = join(__dirname, 'logs', 'api.log');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info', // Default log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: logFilePath }),
    new winston.transports.Console() // Optional: log to console as well
  ],
});

export default logger;

