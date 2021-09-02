import request from '../axios/axios';

const getToken = (id, password) => {
  return request.post('/admin/login', {
    id: id,
    password: password,
  });
};

export default getToken;
