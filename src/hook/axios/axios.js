import axios from 'axios';

const BASE_URL = 'http://220.90.237.33:4100';

const targetToken = {
  user: 'token',
  admin: 'adminToken',
};

export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const requestWithToken = (method, url, target, headers, data) => {
  const access_Token = 'Bearer ' + localStorage.getItem(targetToken[target]);
  return axios({
    method,
    url: BASE_URL + url,
    headers: {
      ...headers,
      Authorization: access_Token,
    },
    data,
  })
    .then((res) => {
      console.log('good');
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log('catch');
      throw new Error(err);
    });
};
