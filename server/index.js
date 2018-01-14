const express = require('express');
const morgan = require('morgan');

global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const CoinMarketCap = require('coinmarketcap-api');
const path = require('path');

const app = express();
const client = new CoinMarketCap();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  client
    .getTicker({ limit: 20 })
    .then(coins => {
      console.log(coins);
      res.status(200).send({ coins });
    })
    .catch(error => res.status(401).send({ error }));
});

app.listen(PORT, () => {
  console.log(`Server is on port 3000`);
});

/*
  https://cryptocurrency-app.herokuapp.com | https://git.heroku.com/cryptocurrency-app.git
*/
