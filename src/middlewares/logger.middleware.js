import fs from "fs";
import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: 'request-logging' },
    transports: [
        new winston.transports.File({ filename: 'log.txt' })
    ]
});

const logMiddleware = async (req, res, next) => {
    if (!req.url.includes('signin') && !req.url.includes('signup')) {
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        logger.info(logData);
    }
    next();
};

export default logMiddleware;
