import React, { useRef } from 'react';
import axios from 'axios';
import './login.css';
import useCheckRule from '../hook/useCheckRule';
import { getCookie, setCookie } from '../hook/useCookie';

function LoginFrom() {
  const idRef = useRef('');
  const passwordRef = useRef('');
  const { CheckRule } = useCheckRule();

  const submit = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    if (CheckRule(id, password)) {
      idRef.current.value = '';
      passwordRef.current.value = '';
      return null;
    }

    axios
      .post('http://rollbook.kro.kr:4200/admin/login', {
        id: idRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        const token = res.data.access_token;

        setCookie('access_token', token, {
          path: '/',
          serure: true,
          sameSite: false,
        });
        const a = getCookie('access_token');
        console.log('token : ', a);
      });
    // console.log(`res = ${res}`);
  };

  return (
    <form className="submits">
      <div className="form-inner">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="id">id:</label>
          <input className="inputs" type="text" name="id" id="id" ref={idRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="inputs"
            type="password"
            name="Password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <input
          className="inputs"
          type="button"
          value="LOGIN"
          onClick={submit}
        />
      </div>
    </form>
  );
}

export default LoginFrom;
