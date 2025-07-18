const express = require('express');
const app = express();

const cryptoRoutes = require('./routes/crypto');
app.use('/api', cryptoRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
