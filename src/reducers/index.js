import { combineReducers } from 'redux';

import ICOListReducer from './ICOListReducer';
import CurrencyListReducer from './CurrencyListReducer';
import RedditReducer from './RedditReducer';
import TwitterReducer from './TwitterReducer';
import ActiveProfileImageReducer from './ActiveProfileImageReducer';
import ActiveProfileSymbolReducer from './ActiveProfileSymbolReducer';
import ChartReducer from './ChartReducer';

export default combineReducers({
  currencyList: CurrencyListReducer,
  ICOList: ICOListReducer,
  redditLists: RedditReducer,
  activeProfileImage: ActiveProfileImageReducer,
  activeProfileSymbol: ActiveProfileSymbolReducer,
  twitterList: TwitterReducer,
  chartData: ChartReducer
});
