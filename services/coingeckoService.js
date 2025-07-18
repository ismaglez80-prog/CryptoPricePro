const axios = require('axios');

async function getCryptoPrice(symbol, fiat = 'usd') {
  try {
    // URL correcta usando backticks para variables
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=${fiat}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    throw error;
  }
}

module.exports = { getCryptoPrice };
