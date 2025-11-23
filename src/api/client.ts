import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
if (!API_KEY) throw new Error('Missing VITE_YOUTUBE_API_KEY');

export const youtubeApi = axios.create({
  baseURL: BASE_URL,
});

youtubeApi.interceptors.request.use(config => {
  config.params = { ...config.params, key: API_KEY };
  return config;
});