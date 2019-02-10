import axios from 'axios';

export const login = axios.create({
  baseURL: 'http://localhost/',
  responseType: 'json'
});