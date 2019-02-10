import axios from 'axios';

export const login = axios.create({
  baseURL: 'http://localhost/',
  responseType: 'json'
});

export const blogs = axios.create({
  baseURL: 'http://localhost:3001'
});