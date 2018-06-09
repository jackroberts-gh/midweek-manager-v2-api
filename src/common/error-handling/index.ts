import winston from '../logger';

export default (err, req, res, next) => {
    winston.log('error', err);
    res.sendStatus(500);
};
