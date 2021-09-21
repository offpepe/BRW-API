const integrants = require('../data/integrants');
const { err400 } = require('../data/errors');

const getAllBRW = (_req, res) => {
  const { BRW } = integrants;
  return res.status(200).send(BRW);
};

const getAllBrodi = (_req, res) => {
    const { Brodi } = integrants;
    return res.status(200).send(Brodi);
};

const getQueryBRW = (req, res, next) => {
    const { BRW } = integrants;
    console.log(req.body);
    const { name, nickname } = req.query;
    const filtered = BRW
      .filter((Brow) => Brow.name === name || Brow.nickname.some((nick) => nick === nickname));
    if (filtered.length !== 0) {
      return res.status(200).send(filtered);
      } else {
      next(err400);
      }
};

const getQueryBrodi = (req, res, next) => {
    const { Brodi } = integrants;
    const { name, nickname } = req.query;
    const filtered = Brodi
      .filter((Brodi) => Brodi.name === name || Brodi.nickname.some((nick) => nick === nickname));
    if (filtered) {
    return res.status(200).send(filtered);
    } else {
    next(err400);
    }
};

module.exports = {
    getAllBRW,
    getAllBrodi,
    getQueryBRW,
    getQueryBrodi,
};