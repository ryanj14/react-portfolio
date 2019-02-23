import axios from 'axios';

export const blogs = axios.create({
  baseURL: 'http://localhost/react-portfolio/backend',
});