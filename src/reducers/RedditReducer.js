import { REDDIT_LIST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case REDDIT_LIST:
      return action.payload;
    default:
      return state;
  }
}
