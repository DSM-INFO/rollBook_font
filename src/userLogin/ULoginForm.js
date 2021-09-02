import React, { useRef } from 'react';
import axios from 'axios';
import './ULogin.css';
import useCheckRule from '../hook/useCheckRule';

function ULoginForm() {
  const idRef = useRef();
  const passwordRef = useRef();
  const { CheckRule } = useCheckRule();

  const submit = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (CheckRule(id, password)) {
      idRef.current.value = '';
      passwordRef.current.value = '';
      return null;
    }

    const res = axios
      .post('http://rollbook.kro.kr:4200/user/login', {
        id: idRef.current.value,
        password: passwordRef.current.value,
      })
      .then((r) => {
        console.log(`token : ${r.data.accessToken}`);
      });
    console.log(res);
  };

  return (
    <form className="uSubmit">
      <div className="uForm-inner">
        <div>
          <h2 className="uTitle">Login</h2>
        </div>

        <form className="uForm-group">
          <div className="ID">
            <label htmlFor="ID">id</label>
            <input
              className="uInput"
              type="text"
              name="id"
              id="id"
              placeholder="학번"
              ref={idRef}
            />
          </div>

          <div className="password">
            <label htmlFor="password">password</label>
            <input
              className="uInput"
              type="password"
              name="Password"
              id="password"
              ref={passwordRef}
              placeholder="비밀번호"
            />
          </div>

          <input
            className="uBtn"
            type="button"
            value="LOGIN"
            onClick={submit}
          />
        </form>
      </div>
    </form>
  );
}

export default ULoginForm;
