import axios from 'axios';

export const CURRENCY_LIST = 'currency_list';
export const ICO_LIST = 'ico_list';
export const REDDIT_LIST = 'reddit_list';
export const TWITTER_LIST = 'twitter_list';
export const ACTIVE_PROFILE = 'active_profile';
export const CHART_DATA = 'chart_data';

export const fetchCurrencyList = () => async dispatch => {
  const res = await axios.get('/list');

  dispatch({ type: CURRENCY_LIST, payload: res.data });
};

export const fetchICOList = () => async dispatch => {
  const res = await axios.get('/ico');

  dispatch({ type: ICO_LIST, payload: res.data.data.ico });
};

export const fetchRedditList = () => async dispatch => {
  const res = await axios.get('/reddit');

  dispatch({ type: REDDIT_LIST, payload: res.data.redditLists });
};

export const fetchTwitterList = () => async dispatch => {
  const res = await axios.get('/twitter');

  dispatch({ type: TWITTER_LIST, payload: res.data });
};

export const setActiveProfileImage = ({ url }) => dispatch => {
  dispatch({ type: ACTIVE_PROFILE, payload: url });
};

export const fetchChartData = symbol => async dispatch => {
  const res = await axios.get(`/profile/${symbol}`);

  dispatch({ type: CHART_DATA, payload: res.data.response });
};
