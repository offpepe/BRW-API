const fs = require('fs').promises;

const notFound = (err, req, res, next) => {
  const { message, code } = err;
  const date = new Date();
  const content = `${date} - ERROR - ${code} -> ${message} ::: ${JSON.stringify(req.query)} | ${JSON.stringify(req.params)}`;
  return fs.writeFile(`./logs/${date}.txt`, content)
    .then(() => res.status(code).send(content))
    .catch((e) => next(e));
}

module.exports = { notFound };