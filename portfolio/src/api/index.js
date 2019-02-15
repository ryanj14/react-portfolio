import axios from 'axios';

export const login = axios.create({
  baseURL: 'http://localhost/react-portfolio/backend'
});

export const blogs = axios.create({
  baseURL: 'http://localhost/react-portfolio/backend'
});