import axios from 'axios';
const BASE_URL = "http://rollbook.kro.kr:4090";
const request = axios.create({
    baseURL: BASE_URL,
})
export default request;