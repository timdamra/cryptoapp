const path = require('path');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const CoinMarketCap = require('coinmarketcap-api');
const ccxt = require('ccxt');

const fetchTweets = require('./fetchTweets');

const app = express();
const client = new CoinMarketCap();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
require('./dataRoutes')(app, ccxt);
app.use(express.static('/dist/assets'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
