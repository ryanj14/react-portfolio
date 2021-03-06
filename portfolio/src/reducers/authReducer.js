import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      if(action.payload === "TRUE") {
        return { ...state, isSignedIn: true };
      } else {
        return state;
      }
    case SIGN_OUT: {
      return { ...state, isSignedIn: false };
    }
    default:
      return state;
  }
};