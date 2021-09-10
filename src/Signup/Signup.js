import React, { useState } from 'react';
import { request } from '../hook/axios/axios';
import * as S from './style';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    grade: '',
    id: '',
    passWord: '',
  });

  const submit = async (e) => {
    try {
      await request('post', '/user/signup');
    } catch {}
  };

  const { name, grade, id, passWord } = data;

  const nameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const gradeChange = (e) => {
    setData({
      ...data,
      grade: e.target.value,
    });
  };
  const idChange = (e) => {
    setData({
      ...data,
      id: e.target.value,
    });
  };
  const passWordChange = (e) => {
    setData({
      ...data,
      passWord: e.target.value,
    });
  };

  return (
    <S.SignUpPage>
      <S.SignUpDisplay>
        <S.SignUpTitle>sign up</S.SignUpTitle>
        <section>
          <S.SignUpInputInfo>name</S.SignUpInputInfo>
          <S.SignUpInput onChange={nameChange} />
        </section>
        <section>
          <S.SignUpInputInfo>grade</S.SignUpInputInfo>
          <S.SignUpInput onChange={gradeChange} />
        </section>
        <section>
          <S.SignUpInputInfo>id</S.SignUpInputInfo>
          <S.SignUpInput onChange={idChange} />
        </section>
        <section>
          <S.SignUpInputInfo>password</S.SignUpInputInfo>
          <S.SignUpInput onChange={passWordChange} />
        </section>
        <button onClick={submit}>signup</button>
      </S.SignUpDisplay>
    </S.SignUpPage>
  );
};

export default Signup;
