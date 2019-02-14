import { 
  USERNAME,
  PASSWORD,
  TITLE,
  AUTHOR,
  BLOG,
  DATE,
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  EDIT_POST,
  DELETE_POST,
  SIGN_IN,
  SIGN_OUT
} from './types';
import { login , blogs } from '../api';
import history from '../history';

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

export const date = (date) => {
  return {
    type: DATE,
    payload: date
  };
}

export const signOut = () => {
  history.push('/blog');
  return {
    type: SIGN_OUT
  };
}

export const createBlogPost = formValues => async (dispatch) => {
  const response = await blogs.post('/db.json', { ...formValues });
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/blog");
};

export const fetchBlogPosts = () => async dispatch => {
  const response = await blogs.get('/db.json');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchBlogPost = (id) => async dispatch => {
  const response = await blogs.get(`/db.json/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
}

export const editBlogPost = (id, formValues) => async dispatch => {
  const response = await blogs.patch(`/db.json/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/blog");
}

export const deleteBlogPost = (id) => async dispatch => {
  await blogs.delete(`/db.json/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push('/blog');
}

export const checkUser = ( user, password ) => dispatch => {
  login.post('/user.php', { user, password })
  .then(function (response) {
    history.push('/blog');
    dispatch({ type: SIGN_IN, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}