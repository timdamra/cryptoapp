const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

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
    let news = await axios.get(
      'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=a8155b1f3f7f45ab96a28fdd3f99721d'
    );
    let dataArray = Object.values(data).slice(0, 750);
    let coins = dataArray
      .filter(val => val.quote === 'USD')
      .map(val => val.info);

    res.status(200).send({ coins, news: news.data });
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong!');
  }
});

app.listen(PORT, () => {
  console.log(`Server is on port 3000`);
});

/*
  https://cryptocurrency-app.herokuapp.com | https://git.heroku.com/cryptocurrency-app.git
*/
