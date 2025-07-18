const express = require('express');
const router = express.Router();

const { getCryptoPrice } = require('../services/coingeckoService');

router.get('/crypto', async (req, res) => {
  const symbol = req.query.symbol || 'bitcoin';
  const fiat = req.query.fiat || 'usd';

  try {
    const data = await getCryptoPrice(symbol, fiat);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el precio' });
  }
});

module.exports = router;
