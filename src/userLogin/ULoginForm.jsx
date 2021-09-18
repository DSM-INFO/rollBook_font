import React, { useRef, useState } from 'react';
import useCheckRule from '../hook/useCheckRule';
import { request } from '../hook/axios/axios';
import * as S from './style';
import notShow from '../img/showPassword-off.png';
import Show from '../img/showPassword-on.png';

function ULoginForm() {
  const idRef = useRef();
  const passwordRef = useRef();
  const { CheckRule } = useCheckRule();
  const [isLogin, setIsLogin] = useState(false);
  const [showPW, setShowPW] = useState(false);

  const pwShowWhether = () => {
    setShowPW(!showPW);
  };

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
            <S.Inline>
              <S.LoginInput
                type={showPW ? 'text' : 'password'}
                ref={passwordRef}
                placeholder="비밀번호"
              />
              <S.ShowPasswordButton
                onClick={pwShowWhether}
                src={showPW ? Show : notShow}
                alt="show password"
              />
            </S.Inline>
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
