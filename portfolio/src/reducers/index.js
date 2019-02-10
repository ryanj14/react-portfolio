import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  userLogin: loginReducer,
  blog: blogReducer,
  api: apiReducer
});