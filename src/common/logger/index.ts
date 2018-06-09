import * as winston from 'winston';

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);

export default new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            colorize: true,
            timestamp: true
        })
    ]
});
