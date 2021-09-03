import React, { useRef } from 'react';
import './RollCall.css';
import UseChangeToNum from './UseChangeToNum';
import axios from 'axios';

const RollCall = () => {
  //오늘 날짜
  const today = new Date();

  // 추후 로그인된 유저의 이름이 들어갈 예정
  const memberList = ' /*이름*/  ';

  //출석 사항
  const rollDetail = [
    '출석',
    '조퇴',
    '결석',
    '병결',
    '외출 - 병원',
    '외출 - 수리',
    '현장체험학습',
    '자격증 시험',
    '기타',
  ];
  const idRef = useRef(); // id
  const detailRef = useRef(); // 출석사항

  // 출석 체크
  const send = () => {
    const check = UseChangeToNum(detailRef.current.value); // 출석사항에 매칭되는 숫자를 반환 받아 저장

    // 매칭된 숫자가 없는 경우
    if (check === 0) {
      alert('erorr!!!');
      return null;
    }
    axios
      .patch(`hhttp://rollbook.kro.kr:4200/user/check/${idRef.current.value}`, {
        //status의 숫자를 변경
        status: check,
      })
      .then((res) => {
        alert('출석체크 완료!');
      })
      .catch((err) => {
        alert(`error!!!`);
        return null;
      });
  };

  return (
    <div className="blackBackground">
      <div className="rollCallToCenter">
        <div className="rollCallWindow">
          <h1 className="printToday">
            {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
            출석 여부
          </h1>

          <div>
            <span className="memberList" ref={idRef}>
              {memberList}
            </span>
            <select className="memberList" ref={detailRef}>
              {rollDetail.map((detail) => (
                <option key={detail}>{detail}</option>
              ))}
            </select>
            <button onClick={send} className="checkSendBetton">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollCall;
