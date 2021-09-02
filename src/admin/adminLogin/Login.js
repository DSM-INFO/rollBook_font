// import axios from 'axios';
import React, { useState } from 'react';
import auth from './lib/api/auth';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    const { id, password } = loginInfo;
    let data;
    try {
      const response = await auth.getToken(id, password);
      data = response.data;
    } catch (e) {
      alert('로그인 실패');
      return;
    }

    document.cookie = `Authorization: Bearer ${data.access_token}`;
    alert('로그인 성공');
  };
  return (
    <form onSubmit={submit}>
      <h1>로그인</h1>
      <input
        onChange={inputHandler}
        placeholder="아이디를 입력하세요"
        name="id"
      ></input>
      <br></br>
      <input
        type="password"
        onChange={inputHandler}
        placeholder="패스워드를 입력하세요"
        name="password"
      ></input>
      <br></br>
      <button onClick={submit}>로그인</button>
    </form>
  );
}
export default Login;
