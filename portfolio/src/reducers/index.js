import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import apiReducer from './apiReducer';
import authReducer from './authReducer';
import emailReducer from './emailReducer';

export default combineReducers({
  userLogin: loginReducer,
  blog: blogReducer,
  api: apiReducer,
  auth: authReducer,
  email: emailReducer
});