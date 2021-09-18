import React, { useRef, useState } from 'react';
// import './ULogin.css';
import useCheckRule from '../hook/useCheckRule';
import { request } from '../hook/axios/axios';
import * as S from './style';

function ULoginForm() {
  const idRef = useRef();
  const passwordRef = useRef();
  const { CheckRule } = useCheckRule();
  const [isLogin, setIsLogin] = useState(false);

  const submit = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (CheckRule(id, password)) {
      idRef.current.value = '';
      passwordRef.current.value = '';
      return null;
    }

    if (!isLogin) {
      setIsLogin(true);

      try {
        request(
          'post',
          '/user/login',
          {
            'Content-Type': 'application/json',
          },
          {
            id: Number(idRef.current.value),
            password: Number(passwordRef.current.value),
          },
        );
        setIsLogin(false);
      } catch {
        alert(`ID 혹은 password가 올바르지 않습니다`);
        setIsLogin(false);
      }
    }
  };

  return (
    <S.UserLoginPage>
      <S.ULoginWindow>
        <S.Title>Login</S.Title>

        <article>
          <S.ID>
            <label>id</label>
            <S.LoginInput
              autoComplete="off"
              type="text"
              placeholder="학번"
              ref={idRef}
            />
          </S.ID>

          <S.Password>
            <label>password</label>
            <S.LoginInput
              type="password"
              ref={passwordRef}
              placeholder="비밀번호"
            />
          </S.Password>

          <S.SubmitButton type="button" onClick={submit}>
            {!isLogin ? 'LOGIN' : 'LODING...'}
          </S.SubmitButton>
        </article>
      </S.ULoginWindow>
    </S.UserLoginPage>
  );
}

export default ULoginForm;
