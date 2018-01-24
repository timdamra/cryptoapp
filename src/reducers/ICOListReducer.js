import { ICO_LIST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case ICO_LIST:
      return action.payload;
    default:
      return state;
  }
}
