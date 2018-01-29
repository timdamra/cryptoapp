const axios = require('axios');
const twitterClient = require('./fetchTweets');

module.exports = (app, ccxt) => {
  app.get('/api/research/:symbol', (req, res) => {
    const { symbol } = req.params;
    const ticker = symbol === 'BTC' ? `USD` : `${symbol.toUpperCase()}`;

    axios
      .get(
        `https://min-api.cryptocompare.com/data/histohour?fsym=${ticker}&tsym=BTC`
      )
      .then(response => {
        res.send({ data: response.data });
      })
      .catch(err => {
        res.send({
          Error: err
        });
      });
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
        res.status(402).send('TD: image not found');
      });
  });

  app.get('/api/profile/:symbol', (req, res) => {
    const { symbol } = req.params;
    const ticker = symbol === 'BTC' ? `BTCUSDT` : `${symbol.toUpperCase()}BTC`;
    const binanceApi = `https://api.binance.com/api/v1/klines?symbol=${ticker}&interval=5m&limit=12`;

    axios
      .get(binanceApi)
      .then(response => {
        let data = [];

        response.data.forEach((val, i) => {
          data.push({
            x: val[0],
            open: val[1],
            high: val[2],
            low: val[3],
            close: val[4]
          });
        });

        res.status(200).send({ data });
      })
      .catch(err => {
        console.error(err);
        res.redirect('/');
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
        res.status(402).send('Not available at the moment');
      });
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

      res.status(200).send({
        redditLists: mergeReddits
      });
    } catch (err) {
      res.status(402).send('Could not retrieve Reddit data');
    }
  });

  app.get('/twitter', (req, res) => {
    twitterClient
      .get('/users/lookup', {
        screen_name:
          'VitalikButerin,officialmcafee,satoshilite,aantonop,novogratz,WhalePanda'
      })
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(402).send('Could not retrieve Twitter data');
      });
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
      res.status(402).send('Could not retrieve coin data');
    }
  });
};
