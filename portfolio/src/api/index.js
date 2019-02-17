import axios from 'axios';

export const login = axios.create({
  baseURL: 'https://blog-react-db.herokuapp.com'
});

export const blogs = axios.create({
  baseURL: 'https://blog-react-db.herokuapp.com',
});