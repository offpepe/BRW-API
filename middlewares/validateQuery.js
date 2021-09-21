const validateQuery = (req, res, next) => {
  const { name, nickname } = req.query;
  if (!name && !nickname) res.status(400).send('É necessário preencher algum dos campos');
  next();
}

module.exports = validateQuery;