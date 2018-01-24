const fs = require('fs');
const axios = require('axios');

axios
  .get('https://api.coinmarketcap.com/v1/ticker/')
  .then(response => {
    jsonData = response.data.map(val => {
      return {
        id: val.id,
        symbol: val.symbol
      };
    });
    fs.writeFile('./list2.js', JSON.stringify(jsonData, null, 4), err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File has been written');
    });
  })
  .catch(err => console.log(err));
