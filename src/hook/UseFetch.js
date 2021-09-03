import axios from 'axios';
import { useState } from 'react';
import { getCookie } from './useCookie';

// 전달된 url로 get한다
const UseFetch = async (url) => {
  const [data, setWord] = useState([]);

  const token = getCookie('access_token');
  console.log(`get : ${token}`);

  console.log(`Bearer\n${token}`);

  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer\n${token}`,
      },
    })
    .then((data) => {
      setWord(data);
    });

  return data;
};

export default UseFetch;
