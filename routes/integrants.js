const express = require('express');
const middleware = require('../middlewares/integrants');
const router = express.Router();

router.get('/', (_req, res) => res.status(200).send('Welcome to BRW API V1'));

router.get('/BRW/search', middleware.getAllBRW);

router.get('/Brodi/search', middleware.getAllBrodi);

router.get('/BRW/search', middleware.getQueryBRW);

router.get('/Brodi/search', middleware.getQueryBrodi);

module.exports = router;