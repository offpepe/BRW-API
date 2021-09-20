const integrants = require('../data/integrants');

const getAllBRW = (_req, res) => {
  const { BRW } = integrants;
  res.status(200).send(BRW);
};

const getAllBrodi = (_req, res) => {
    const { Brodi } = integrants;
    res.status(200).send(Brodi);
};

const getQueryBRW = (req, res, next) => {
    const { BRW } = integrants;
    const { name, nickname } = req.query;
    const filtered = BRW
      .filter((Brow) => Brow.name === name || Brow.nickname.some((nick) => nick === nickname));
    if (filtered.length !== 0) {
      res.status(200).send(filtered);
      } else {
      const err = { 
        code: 400,
        message: 'Nenhum resultado com os parametros passados',
       };
      next(err);
      }
};

const getQueryBrodi = (req, res, next) => {
    const { Brodi } = integrants;
    const { name, nickname } = req.query;
    const filtered = Brodi
      .filter((Brodi) => Brodi.name === name || Brodi.nickname.some((nick) => nick === nickname));
    if (filtered) {
    res.status(200).send(filtered);
    } else {
    const err = { 
      code: 400,
      message: 'Nenhum resultado com os parametros passados',
     };
    next(err);
    }
};

module.exports = {
    getAllBRW,
    getAllBrodi,
    getQueryBRW,
    getQueryBrodi,
};