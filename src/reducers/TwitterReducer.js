import { TWITTER_LIST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case TWITTER_LIST:
      return action.payload;
    default:
      return state;
  }
}
