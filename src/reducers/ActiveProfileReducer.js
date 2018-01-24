import { ACTIVE_PROFILE } from '../actions';

export default function(state = '', action) {
  switch (action.type) {
    case ACTIVE_PROFILE:
      return action.payload;
    case undefined:
      return '/assets/crypto.png';
    default:
      return state;
  }
}
