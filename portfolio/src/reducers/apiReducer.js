import _ from 'lodash';
import { 
  CREATE_POST,
  FETCH_POSTS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}