import { 
  USERNAME,
  PASSWORD
} from './types';
import api from '../api';

export const user = (username) => {
  return {
    type: USERNAME,
    payload: username
  };
};

export const password = (password) => {
  return {
    type: PASSWORD,
    payload: password
  };
};

export const checkUser = ( user, password ) => dispatch => {
  api({
    method: 'post',
    url: '/user.php',
    data: {
      user,
      password
    }
  })
  .catch(function (error) {
    dispatch(console.log(error));
  });
}