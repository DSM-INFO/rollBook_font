import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../hook/UseFetch';
import './RollS.css';

const RollG = () => {
  const grade = useParams().grade; // 출력할 학년을 url에서 찾아 저장한다 //grade===출력할 학년
  const dummy = UseFetch(`http://rollbook.kro.kr:4200/admin/${grade}`); // url에서 정보를 받아옴

  const memberList = dummy.filter((data) => data.grade === Number(grade)); // 전체 data 중 한 학년의 목록만 저장한다

  return (
    <div className="g1">
      <div className="title">
        <span>이름</span> <span>출석여부</span>
      </div>
      {memberList.map((data) => (
        <p>{data.fullName}</p>
      ))}
    </div>
  );
};

export default RollG;
