import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://feedback-server-production.up.railway.app',
});