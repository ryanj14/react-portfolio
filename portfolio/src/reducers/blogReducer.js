import { 
  TITLE,
  AUTHOR,
  BLOG,
  DATE
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  author: '',
  blog: '',
  date: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TITLE:
      return { ...state, title: action.payload };
    case AUTHOR:
      return { ...state, author: action.payload };
    case BLOG:
      return { ...state, blog: action.payload };
    case DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
}