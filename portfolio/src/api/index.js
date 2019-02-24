import axios from 'axios';

export const blogs = axios.create({
  baseURL: 'https://blog-react-db.herokuapp.com',
});