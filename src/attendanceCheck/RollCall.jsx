import React, { useRef } from 'react';
import * as S from './style';
import UseChangeToNum from './UseChangeToNum';
import { request } from '../hook/axios/axios';

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
    // 출석사항에 매칭되는 숫자를 반환 받아 저장
    const check = UseChangeToNum(detailRef.current.value);

    // 매칭된 숫자가 없는 경우
    if (check === 0) {
      alert('erorr!!!');
      return null;
    }
    try {
      request(
        'patch',
        `/user/check/${idRef.current.value}`,
        { 'Content-Type': 'application/json' },
        { status: check },
      );
      alert('출석체크 완료!');
    } catch {
      alert(`error!!!`);
      return null;
    }
  };

  return (
    <S.RollCallPage>
      <S.RollCallWindow>
        <S.PrintToday>
          {today.getFullYear()}년{today.getMonth() + 1}월{today.getDate()}일
          출석 여부
        </S.PrintToday>

        <section>
          <S.SelecterOptionList />
          <S.SelecterOptionList ref={detailRef}>
            {rollDetail.map((detail) => (
              <option key={detail}>{detail}</option>
            ))}
          </S.SelecterOptionList>
          <S.CheckSendBetton onClick={send} className="checkSendBetton">
            send
          </S.CheckSendBetton>
        </section>
      </S.RollCallWindow>
    </S.RollCallPage>
  );
};

export default RollCall;
