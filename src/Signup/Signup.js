import React, { useState } from 'react';
import { request } from '../hook/axios/axios';

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
    <div>
      <section>
        <label>이름</label>
        <input onChange={nameChange} />
      </section>
      <section>
        <label>학번</label>
        <input onChange={gradeChange} />
      </section>
      <section>
        <label>학년</label>
        <input onChange={idChange} />
      </section>
      <section>
        <label>비밀번호</label>
        <input onChange={passWordChange} />
      </section>
      <button onClick={submit}>signup</button>
    </div>
  );
};

export default Signup;
