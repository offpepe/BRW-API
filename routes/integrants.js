const express = require('express');
const middleware = require('../middlewares/integrants');
const validate = require('../middlewares/validateQuery');
const router = express.Router();

router.get('/', (_req, res) => res.status(200).send('Welcome to BRW API V1'));

router.get('/BRW', middleware.getAllBRW);

router.get('/Brodi', middleware.getAllBrodi);

router.get('/BRW/search', validate, middleware.getQueryBRW);

router.get('/Brodi/search', validate, middleware.getQueryBrodi);

module.exports = router;