import React, { useEffect, useState } from 'react';
import * as S from './style';
import UseChangeToNum from '../hook/UseChangeToNum';
import { requestWithToken } from '../hook/axios/axios';

const RollCall = () => {
  //오늘 날짜
  const today = new Date();

  // 추후 로그인된 유저의 이름이 들어갈 예정
  // const memberList = ' /*이름*/  ';

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
  const [uList, setUList] = useState([]);
  const [id, setId] = useState(null); // id
  const [detail, setDetail] = useState(''); // 출석사항

  useEffect(() => {
    requestWithToken('get', '/admin', 'user', {}, {})
      .then((res) => {
        const list = res.map((data) => {
          return data.name;
        });
        setUList(list);
        console.log(uList);
      })
      .catch((err) => {
        console.info(err);
        alert(`출석 체크 내용을 불러올 수 업습니다`);
      });
  }, []);

  // 출석 체크
  const send = () => {
    // 출석사항에 매칭되는 숫자를 반환 받아 저장
    const check = UseChangeToNum(detail);

    // 매칭된 숫자가 없는 경우
    if (check === 0) {
      alert('erorr!!!');
      return null;
    }
    try {
      requestWithToken(
        'patch',
        `/user/check/${id}`,
        'user',
        {},
        { status: check },
      );
      alert('출석체크 완료!');
    } catch {
      alert(`error!!!`);
      return null;
    }
  };

  const changeId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const changeDetail = (e) => {
    setDetail(e.target.value);
    console.log(detail);
  };

  return (
    <S.RollCallPage>
      <S.RollCallWindow>
        <S.PrintToday>
          {today.getFullYear()}년{today.getMonth() + 1}월{today.getDate()}일
          출석 여부
        </S.PrintToday>

        <section>
          <S.SelecterOptionList onChange={changeId}>
            {uList.map((data) => (
              <option key={data}>{data}</option>
            ))}
          </S.SelecterOptionList>
          <S.SelecterOptionList onChange={changeDetail}>
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
