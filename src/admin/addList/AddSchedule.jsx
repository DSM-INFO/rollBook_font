import React, { useState } from 'react';
import { requestWithToken } from '../../hook/axios/axios';
import * as S from './style.js';

const AddSchedule = () => {
  const [isLoding, setIsLoding] = useState(false); //submit 상태 여부
  const [title, setTitle] = useState(''); // month 선택
  const [content, setContent] = useState(''); // day 선택

  const resetText = () => {
    setTitle('');
    setContent('');
  };

  // 입력한 정보를 서버로 post한다
  const onSubmit = async () => {
    //상세 일정이 비었다면?
    if (!(title && content)) {
      alert('제목과 내용을 모두 작성해 주세요');
      return null;
    }

    // submit 상태가 아닐 경우 post한다
    if (!isLoding) {
      setIsLoding(true); // submit 상태로 변경

      try {
        await requestWithToken(
          'post',
          '/list/create',
          'admin',
          {},
          {
            title: title,
            content: content,
          },
        );

        alert('성공적으로 생성되었습니다');
      } catch {
        alert('errer!!');
      }

      setIsLoding(false); // submit 상태를 해제한다
      resetText(); // 입력한 일정 상세 내용을 화면에서 지운다
    }
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <S.AddSchedulePage>
      <S.AddWindow>
        <S.WindowTitle>일정 추가</S.WindowTitle>
        <S.Input_Area>
          <S.InputLabel>제목</S.InputLabel>
          <S.TitleInput onChange={changeTitle} value={title} />
        </S.Input_Area>
        <S.Input_Area>
          <S.InputLabel>내용</S.InputLabel>
          <S.ContentInput onChange={changeContent} value={content} />
        </S.Input_Area>
        <S.Center>
          <S.InputSubmitButton onClick={onSubmit}>
            {isLoding ? 'saving...' : 'save'}
          </S.InputSubmitButton>
        </S.Center>
      </S.AddWindow>
    </S.AddSchedulePage>
  );
};

export default AddSchedule;
