import { 
  EMAIL,
  SUBJECT,
  BODY,
  EMAIL_ERROR,
  EMAIL_SENT
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  subject: '',
  body: '',
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case SUBJECT:
      return { ...state, subject: action.payload };
    case BODY:
      return { ...state, body: action.payload };
    case EMAIL_ERROR:
      return { ...state, error: action.payload };
    case EMAIL_SENT:
      return INITIAL_STATE;
    default:
      return state;
  }
}