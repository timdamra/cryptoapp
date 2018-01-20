const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const CoinMarketCap = require('coinmarketcap-api');
const ccxt = require('ccxt');
const path = require('path');

const fetchTweets = require('./fetchTweets');

const app = express();
const client = new CoinMarketCap();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/exchanges/:symbol', (req, res) => {
  let { symbol } = req.params;

  const api = `https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${symbol}&tsym=USD`;

  axios
    .get(api)
    .then(response => {
      res.status(200).send({
        exchanges: response.data.Data.Exchanges
      });
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

app.get('/ico', (req, res) => {
  axios
    .get('https://api.icowatchlist.com/public/v1/')
    .then(list => {
      res.status(200).send({
        data: list.data
      });
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

app.get('/reddit', (req, res) => {
  const redditApi = 'https://www.reddit.com/r/cryptocurrency.json?limit=5';

  axios
    .get(redditApi)
    .then(redditRes => {
      res.status(200).send({
        redditList: redditRes.data
      });
    })
    .catch(err => {
      throw new Error('reddit', err);
      res.end();
    });
});

app.get('/list', async (req, res) => {
  let exchange = new ccxt.coinmarketcap();

  try {
    let data = await exchange.loadMarkets();
    let twitterData = await fetchTweets.get(
      'https://api.twitter.com/1.1/search/tweets.json',
      {
        q: 'cryptocurrency',
        lang: 'en'
      }
    );

    let dataArray = Object.values(data).slice(0, 750);
    let coins = dataArray
      .filter(val => val.quote === 'USD')
      .map(val => val.info);

    let tweets = twitterData.statuses.map(val => {
      return {
        text: val.text,
        name: val.user.name,
        screenName: val.user.screen_name,
        followers: val.user.followers_count,
        friends: val.user.friends_count,
        retweetCount: val.retweet_count
      };
    });

    res.status(200).send({ coins, tweets });
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong!');
  }
});

app.listen(PORT, () => {
  console.log(`Server is on port 3000`);
});
