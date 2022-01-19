import axios from 'axios';

export default axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:9001/'
});