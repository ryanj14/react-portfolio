import { 
  EMAIL,
  SUBJECT,
  BODY
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  subject: '',
  body: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case SUBJECT:
      return { ...state, subject: action.payload };
    case BODY:
      return { ...state, body: action.payload };
    default:
      return state;
  }
}