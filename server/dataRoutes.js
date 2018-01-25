const axios = require('axios');
const binance = require('node-binance-api');

const twitterClient = require('./fetchTweets');

module.exports = (app, ccxt) => {
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
      .catch(err => err);
  });

  app.get('/profile/:symbol', (req, res) => {
    const { symbol } = req.params;
    const ticker = symbol === 'BTC' ? `BTCUSD` : `${symbol.toUpperCase()}BTC`;

    binance.candlesticks(
      ticker,
      '5m',
      (error, ticks, symb) => {
        if (error) {
          console.error(error);
          return error;
        }

        const hourData = ticks.map(val => {
          return {
            x: val[0],
            open: val[1],
            high: val[2],
            low: val[3],
            close: val[4]
          };
        });
        res.send({ response: hourData });
      },
      { limit: 12 }
    );
  });

  app.get('/ico', (req, res) => {
    axios
      .get('https://api.icowatchlist.com/public/v1/')
      .then(list => {
        res.status(200).send({
          data: list.data
        });
      })
      .catch(err => err);
  });

  app.get('/reddit', async (req, res) => {
    const ccRedditApi = 'https://www.reddit.com/r/cryptocurrency.json?limit=5';
    const btcRedditApi = 'https://www.reddit.com/r/Bitcoin.json?limit=5';

    try {
      const ccReddit = await axios.get(ccRedditApi);
      const btcReddit = await axios.get(btcRedditApi);

      const mergeReddits = [
        ...ccReddit.data.data.children,
        ...btcReddit.data.data.children
      ];

      res.send({
        redditLists: mergeReddits
      });
    } catch (err) {
      return err;
    }
  });

  app.get('/twitter', (req, res) => {
    twitterClient
      .get('/users/lookup', {
        screen_name:
          'VitalikButerin,officialmcafee,satoshilite,aantonop,novogratz,WhalePanda'
      })
      .then(response => {
        res.send(response);
      })
      .catch(err => err);
  });

  app.get('/list', async (req, res) => {
    let exchange = new ccxt.coinmarketcap();

    try {
      let data = await exchange.loadMarkets();

      let dataArray = Object.values(data);
      let coins = dataArray
        .filter(val => val.quote === 'USD')
        .map(val => val.info);

      res.status(200).send({ coins });
    } catch (err) {
      return err;
    }
  });
};
