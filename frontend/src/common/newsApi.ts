import axios from 'axios';
import { APIKey } from './newsApiKey';

export default axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines`,
  headers: {
    Authorization: APIKey,
  },
});
