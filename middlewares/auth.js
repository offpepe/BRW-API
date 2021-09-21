const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization !== 'brwToken') return res.status(401).send('Não autorizado!');
    next();
}

module.exports = auth;