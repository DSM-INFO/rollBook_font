import React, { useState } from 'react';
import useCheckRule from '../hook/useCheckRule';
import { request } from '../hook/axios/axios';
import * as S from './style';
import notShow from '../img/showPassword-off.png';
import Show from '../img/showPassword-on.png';

const ULoginForm = ({ target }) => {
  const [id, setId] = useState('');
  const [PW, setPW] = useState('');
  const { CheckRule } = useCheckRule();
  const [isLogin, setIsLogin] = useState(false);
  const [showPW, setShowPW] = useState(false);
  const tokenName = target === 'user' ? 'token' : 'adminToken';

  const pwShowWhether = () => {
    setShowPW(!showPW);
  };

  const submit = async () => {
    if (CheckRule(id, PW)) {
      setId('');
      setPW('');
      return null;
    }

    if (!isLogin) {
      setIsLogin(true);

      try {
        console.log(target);
        const re = await request(
          'post',
          `/${target}/login`,
          {
            'Content-Type': 'application/json',
          },
          {
            id: String(id),
            password: String(PW),
          },
        );
        console.log(re.accseeToken);
        localStorage.setItem(tokenName, re.accseeToken);
        setIsLogin(false);
      } catch {
        alert(`ID 혹은 password가 올바르지 않습니다`);
        setIsLogin(false);
      }
    }
  };

  const changeID = (e) => {
    setId(e.target.value);
  };

  const changePW = (e) => {
    setPW(e.target.value);
  };

  return (
    <S.UserLoginPage>
      <S.ULoginWindow>
        <S.Title>Login</S.Title>

        <article>
          <S.ID>
            <S.SubTitle>id</S.SubTitle>
            <S.LoginInput
              autoComplete="off"
              placeholder="학번"
              onChange={changeID}
            />
          </S.ID>

          <S.Password>
            <S.SubTitle>password</S.SubTitle>
            <S.Inline>
              <S.LoginInput
                type={showPW ? 'text' : 'password'}
                onChange={changePW}
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
};

export default ULoginForm;
