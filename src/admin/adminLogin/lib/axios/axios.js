import axios from 'axios';

const BASE_URL = 'http://rollbook.kro.kr:4200';

const request = axios.create({
  baseURL: BASE_URL,
});
export default request;
