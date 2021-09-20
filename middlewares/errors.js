const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);


const notFound = (err, _req, res, next) => {
  const { message, code } = err;
  const date = new Date();
  const content = `${date} - ERROR - ${code} -> ${message}`;
  writeFile(`./logs/${date}.txt`, content)
    .then(() => res.status(400).send(content))
    .catch((e) => next(e));
}

module.exports = { notFound };