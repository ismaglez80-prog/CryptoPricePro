# 🪙 CryptoPricePro API

API para obtener precios en tiempo real de criptomonedas y realizar conversiones a monedas fiat. Conectada a CoinGecko (no requiere API Key).

## 🚀 Endpoints

### 🔹 GET `/api/price/:symbol`
Devuelve el precio actual en USD de una criptomoneda (ej: btc, eth, sol).

### 🔹 GET `/api/convert/:symbol/:fiat`
Convierte una criptomoneda a otra moneda fiat (USD, EUR, MXN, etc.).

### 🔹 GET `/api/top/:limit`
Devuelve el top N de criptomonedas por capitalización de mercado.

---

## 📦 Cómo iniciar

```bash
npm install
npm start
```

Luego abre: `http://localhost:3000/api/price/bitcoin`

---

## 🌐 Ideal para subir a RapidAPI y monetizar

Planes sugeridos:
- Free: 100 requests/día
- Basic: $5/mes por 1,000 requests
- Pro: $25/mes por 10,000 requests

---