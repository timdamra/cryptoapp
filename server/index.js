const express = require('express');
const morgan = require('morgan');

global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const CoinMarketCap = require('coinmarketcap-api');
const ccxt = require('ccxt');
const path = require('path');

const app = express();
const client = new CoinMarketCap();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.get('/list', async (req, res) => {
  let exchange = new ccxt.coinmarketcap();

  try {
    let data = await exchange.loadMarkets();
    let dataArray = Object.values(data).slice(0, 750);
    let coins = dataArray
      .filter(val => val.quote === 'USD')
      .map(val => val.info);

    return res.status(200).send({ coins });
  } catch (err) {
    res.status(401).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is on port 3000`);
});

/*
  https://cryptocurrency-app.herokuapp.com | https://git.heroku.com/cryptocurrency-app.git
*/
