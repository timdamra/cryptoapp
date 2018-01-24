import { CHART_DATA } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CHART_DATA:
      return action.payload;
    default:
      return state;
  }
};
