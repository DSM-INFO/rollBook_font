import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestWithToken } from '../../hook/axios/axios';
import UserStatus from './UserStatus';
import * as S from './style';

const Grades = () => {
  const grade = useParams().grade; // 출력할 학년을 url에서 찾아 저장한다 //grade===출력할 학년
  const [data, setData] = useState([]);

  useEffect(() => {
    requestWithToken('get', `/admin`, 'admin', {}, {})
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        alert('출석 내역 불러오기에 실패하였습니다');
      });
  }, []);

  const memberList = data.filter((data) => data.grade === Number(grade)); // 전체 data 중 한 학년의 목록만 저장한다

  return (
    <S.ShowStatus>
      <div className="title">
        <span>이름</span> <span>출석여부</span>
      </div>
      <S.Article>
        {memberList.map((data) => (
          <UserStatus data={data} key={data.id} />
        ))}
      </S.Article>
    </S.ShowStatus>
  );
};

export default Grades;
