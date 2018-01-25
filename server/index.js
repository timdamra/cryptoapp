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
const publicPath = path.join(__dirname, '..', 'dist');

app.use(morgan('tiny'));
app.use(express.static(publicPath));

require('./dataRoutes')(app, ccxt);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// catch 404 and forward to error handler.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// If our applicatione encounters an error, we'll display the error and stacktrace accordingly.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
