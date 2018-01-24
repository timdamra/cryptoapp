import { CURRENCY_LIST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case CURRENCY_LIST:
      return action.payload;
    default:
      return state;
  }
}
