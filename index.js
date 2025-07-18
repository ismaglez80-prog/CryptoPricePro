const express = require('express');
const app = express();

const cryptoRoutes = require('./routes/crypto');
app.use('/api', cryptoRoutes);

// Ruta raíz para evitar error "Cannot GET /"
app.get('/', (req, res) => {
  res.send('API CryptoPricePro funcionando correctamente');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
