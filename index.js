const path = require('path');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const CoinMarketCap = require('coinmarketcap-api');
const ccxt = require('ccxt');

const fetchTweets = require('./server/fetchTweets');

const app = express();
const client = new CoinMarketCap();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

require('./server/dataRoutes')(app, ccxt);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
