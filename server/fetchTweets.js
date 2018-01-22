const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: 'bFi3x7EFgu2iOqevEg0xZ5KCV',
  consumer_secret: 'GOcgdGP0Ve8Gj8BuokncxpVXXZfAWj3SBiCch9kZ1RN2D2DEXK',
  access_token_key: '875231032961884160-y2zwSn8vFnTE3qdJG7jClvUY8jDEnOI',
  access_token_secret: 'ddcTBdJ71QtS3ECz3E2U3VnQCdMJfI7h6W1E6EaUu8yQ8'
});

module.exports = twitterClient;
