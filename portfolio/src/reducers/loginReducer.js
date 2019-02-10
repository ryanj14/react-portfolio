import { 
  USERNAME,
  PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
  user: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USERNAME:
      return { ...state, user: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}