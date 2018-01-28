import { ACTIVE_PROFILE_IMAGE } from '../actions';

export default function(state = '', action) {
  switch (action.type) {
    case ACTIVE_PROFILE_IMAGE:
      return action.payload;
    case undefined:
      return '/assets/crypto.png';
    default:
      return state;
  }
}
