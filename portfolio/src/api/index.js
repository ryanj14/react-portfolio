import axios from 'axios';

export const login = axios.create({
  baseURL: 'https://nonionic-ohm.000webhostapp.com'
});

export const blogs = axios.create({
  baseURL: 'https://nonionic-ohm.000webhostapp.com',
});