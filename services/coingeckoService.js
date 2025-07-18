const axios = require('axios');

const getPrice = async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get(
      \`https://api.coingecko.com/api/v3/simple/price?ids=\${symbol}&vs_currencies=usd\`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener precio' });
  }
};

const convertPrice = async (req, res) => {
  const { symbol, fiat } = req.params;
  try {
    const response = await axios.get(
      \`https://api.coingecko.com/api/v3/simple/price?ids=\${symbol}&vs_currencies=\${fiat}\`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al convertir moneda' });
  }
};

const getTopCryptos = async (req, res) => {
  const { limit } = req.params;
  try {
    const response = await axios.get(
      \`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=\${limit}&page=1\`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el top de criptos' });
  }
};

module.exports = { getPrice, convertPrice, getTopCryptos };