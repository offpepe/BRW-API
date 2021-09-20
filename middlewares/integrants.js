const integrants = require('../data/integrants');

const getAllBRW = (_req, res) => {
  const { BRW } = integrants;
  res.status(200).send(BRW);
};

const getAllBrodi = (_req, res) => {
    const { Brodi } = integrants;
    res.status(200).send(Brodi);
};

const getQueryBRW = (req, res) => {
    const { BRW } = integrants;
    const { name, nickname } = req.query;
    const filtered = BRW
      .filter((Brow) => Brow.name === name || Brow.nickname.some((nick) => nick === nickname));
    res.status(200).send(filtered);
};

const getQueryBrodi = (req, res) => {
    const { Brodi } = integrants;
    const { name, nickname } = req.query;
    const filtered = Brodi
      .filter((Brodi) => Brodi.name === name || Brodi.nickname.some((nick) => nick === nickname));
    res.status(200).send(filtered);
};

module.exports = {
    getAllBRW,
    getAllBrodi,
    getQueryBRW,
    getQueryBrodi,
};