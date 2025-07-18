const express = require('express');
const cryptoRoutes = require('./routes/crypto');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', cryptoRoutes);

app.get('/', (req, res) => {
  res.send('CryptoPricePro API está funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});