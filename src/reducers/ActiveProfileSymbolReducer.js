import { ACTIVE_PROFILE_SYMBOL } from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case ACTIVE_PROFILE_SYMBOL:
      return action.payload;
    default:
      return state;
  }
};
