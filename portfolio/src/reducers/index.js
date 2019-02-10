import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';

export default combineReducers({
  userLogin: loginReducer,
  blog: blogReducer
});