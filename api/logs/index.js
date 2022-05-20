const { transports, format } = require('winston');
const winston = require('winston');

const logger_info = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console({ level: 'info' }),
        new transports.File({ filename: 'info.log', level: 'info' })
    ]
});

const logger_error = winston.createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console({ level: 'info' }),
        new transports.File({ filename: 'error.log', level: 'info' })
    ]
});

module.exports = { 
    logger_info,
    logger_error
};