import { 
  USERNAME,
  PASSWORD,
  TITLE,
  AUTHOR,
  BLOG
} from './types';
import { login } from '../api';

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

export const title = (title) => {
  return {
    type: TITLE,
    payload: title
  };
}

export const author = (author) => {
  return {
    type: AUTHOR,
    payload: author
  };
};

export const blog = (blog) => {
  return {
    type: BLOG,
    payload: blog
  };
}

export const checkUser = ( user, password ) => dispatch => {
  login({
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