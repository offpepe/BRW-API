const { err401 } = require('../data/errors');

const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization !== 'brwToken') return next(err401);
    next();
}

module.exports = auth;