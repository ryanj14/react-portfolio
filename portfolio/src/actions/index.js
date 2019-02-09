import { 
  USERNAME,
  PASSWORD
} from './types';

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