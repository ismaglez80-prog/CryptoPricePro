const express = require('express');
const router = express.Router();
const { getPrice, convertPrice, getTopCryptos } = require('../services/coingeckoService');

router.get('/price/:symbol', getPrice);
router.get('/convert/:symbol/:fiat', convertPrice);
router.get('/top/:limit', getTopCryptos);

module.exports = router;