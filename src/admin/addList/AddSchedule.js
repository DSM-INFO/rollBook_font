import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../../css/index.css';
import { getCookie } from '../../hook/useCookie';
import './AddSchedule.css';

const AddSchedule = () => {
  // 일정 날짜 목록 -month
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // 일정 날짜 목록 -day
  const dayList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const [isLoding, setIsLoding] = useState(false); //submit 상태 여부
  const [plan, setPlan] = useState(''); //일정 상세 내역

  const monRef = useRef(); // month 선택
  const dayRef = useRef(); // day 선택

  const resetText = () => {
    setPlan('');
  };

  // 입력한 정보를 서버로 post한다
  const onSubmit = async () => {
    const token = `Bearer ${getCookie('access_token')}`; // 저장된 토큰 가져오기
    console.log(`barer : ${token}`);

    //상세 일정이 비었다면?
    if (!plan) {
      alert('일정을 작성해 주세요');
      return null;
    }

    // submit 상태가 아닐 경우 post한다
    if (!isLoding) {
      setIsLoding(true); // submit 상태로 변경

      await axios
        .post(`http://rollbook.kro.kr:4200/list/create`, {
          headers: {
            Authorization: token,
          },
          title: 'titleTest',
          content: 'contentTest',
        })
        .then((res) => {
          alert('생성이 완료되었습니다');
        })
        .catch((error) => {
          alert('erorr');
        });

      setIsLoding(false); // submit 상태를 해제한다
      resetText(); // 입력한 일정 상세 내용을 화면에서 지운다

      console.log(`end`);
    }
  };

  const planText = (e) => {
    // textarea로 입력 받은 내용을 useState에 저장한다
    setPlan(e.target.value);
  };

  return (
    <div className="blackBackground">
      <div className="addToCenter">
        <div className="addWindow">
          <h1>일정 추가</h1>
          <div className="input_area">
            <label>날짜</label>
            <select ref={monRef}>
              {monthList.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
            <select ref={dayRef}>
              {dayList.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="input_area">
            <label>일정</label>
            <textarea onChange={planText} value={plan} />
          </div>
          <p onClick={onSubmit} className="inputSaveButton">
            {isLoding ? 'saving...' : 'save'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;
