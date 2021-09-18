import axios from 'axios';

const BASE_URL = 'http://220.90.237.33:4100';

export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers,
    data,
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      console.log(data);
      throw new Error(err);
    });
};
