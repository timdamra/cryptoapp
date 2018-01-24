import { combineReducers } from 'redux';

import ICOListReducer from './ICOListReducer';
import CurrencyListReducer from './CurrencyListReducer';
import RedditReducer from './RedditReducer';
import TwitterReducer from './TwitterReducer';
import ActiveProfileReducer from './ActiveProfileReducer';
import ChartReducer from './ChartReducer';

export default combineReducers({
  currencyList: CurrencyListReducer,
  ICOList: ICOListReducer,
  redditLists: RedditReducer,
  activeProfileImage: ActiveProfileReducer,
  twitterList: TwitterReducer,
  chartData: ChartReducer
});
