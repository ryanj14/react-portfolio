import { combineReducers } from 'redux';
import { 
  USERNAME,
  PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
  user: '',
  password: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERNAME:
      return { ...state, user: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  userLogin: loginReducer
});