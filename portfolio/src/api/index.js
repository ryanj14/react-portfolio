import axios from 'axios';

export const login = axios.create({
  baseURL: 'http://localhost'
});

export const blogs = axios.create({
  baseURL: 'https://api-81j9nsrzr.now.sh/'
});