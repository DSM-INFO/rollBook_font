import React, { useState } from 'react';
import { request } from '../hook/axios/axios';
import * as S from './style.js';
import notShowImg from '../img/showPassword-off.png';
import showImg from '../img/showPassword-on.png';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    grade: 1,
    id: '',
    password: '',
  });

  const [showPW, setShowPW] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { name, grade, id, password } = data;

  const pwShowWhether = () => {
    setShowPW(!showPW);
  };

  const submit = async (e) => {
    if (!isLogin) {
      setIsLogin(true);

      console.log(grade);

      try {
        await request(
          'post',
          '/user/signup',
          {
            'Content-Type': 'application/json',
          },
          {
            id: id,
            name: name,
            grade: Number(grade),
            password: password,
          },
        );

        alert(`환영합니다!`);
      } catch {
        alert(`회원 가입에 실패했습니다\n(허용되지 않은 입력 혹은 중복된 ID)`);
        console.error('user SignUp Error');
      }

      setIsLogin(false);
    }
  };

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
  const passwordChange = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  return (
    <S.SignUpPage>
      <S.SignUpDisplay>
        <S.SignUpTitle>sign up</S.SignUpTitle>
        <section>
          <S.InputLine>
            <S.SignUpInputInfo>name</S.SignUpInputInfo>
            <S.SignUpInput onChange={nameChange} placeholder="이름" />
          </S.InputLine>
        </section>
        <section>
          <S.InputLine>
            <S.SignUpInputInfo>grade</S.SignUpInputInfo>
            <S.GradeSelecter onChange={gradeChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </S.GradeSelecter>
          </S.InputLine>
        </section>
        <section>
          <S.SignUpInputInfo>id</S.SignUpInputInfo>
          <S.InputLine>
            <S.SignUpInput
              onChange={idChange}
              maxLength="4"
              value={id}
              placeholder="학번"
            />
          </S.InputLine>
        </section>
        <section>
          <S.SignUpInputInfo>password</S.SignUpInputInfo>
          <S.pwInputLine>
            <S.pwInput
              onChange={passwordChange}
              type={showPW ? 'text' : 'password'}
              placeholder="비밀번호"
            />
            <S.ShowPasswordButton
              onClick={pwShowWhether}
              src={showPW ? showImg : notShowImg}
              alt="show password"
            />
          </S.pwInputLine>
        </section>
        <S.SignUpSubmitDiv>
          <S.SignUpSubmitButton onClick={submit}>sign up</S.SignUpSubmitButton>
        </S.SignUpSubmitDiv>
      </S.SignUpDisplay>
    </S.SignUpPage>
  );
};

export default Signup;
