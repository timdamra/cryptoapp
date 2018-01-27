import { CHART_DATA, EMPTY_CHART } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CHART_DATA:
      return action.payload;
    case EMPTY_CHART:
      return action.payload;
    default:
      return state;
  }
};
