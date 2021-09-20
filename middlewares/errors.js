const fs = require('fs').promises;

const notFound = (err, req, res, next) => {
  const { message, code } = err;
  const { name, nickname } = req.query
  const date = new Date();
  const content = `${date} - ERROR - ${code} -> ${message}: ${name} | ${nickname}`;
  fs.writeFile(`./logs/${date}.txt`, content)
    .then(() => res.status(400).send(content))
    .catch((e) => next(e));
}

module.exports = { notFound };