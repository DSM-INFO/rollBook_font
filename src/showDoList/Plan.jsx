import { useState } from 'react';
import { requestWithToken } from '../hook/axios/axios';
import * as S from './style';

// ShowSchedule.js에서 일정 목록의 각 내용들을 하나씩 받아온다
const Plan = ({ plan: p }) => {
  const [plan, setPlan] = useState(p);

  const Del = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      requestWithToken('delete', `/list/delete/${plan.num}`, 'admin', {}, {})
        .then((res) => {
          alert(`일정이 성공적으로 삭제되었습니다`);
          setPlan({ num: 0 });
        })
        .catch((err) => {
          alert('일정 삭제에 실패하였습니다');
        });
    }
  };

  if (plan.num === 0) {
    return null;
  }

  return (
    <S.Plan>
      <S.Title>{plan.title}</S.Title>
      <S.Content>
        <S.ContentText>{plan.content}</S.ContentText>
      </S.Content>
      <S.DeleteBtn onClick={Del} className="">
        Delete
      </S.DeleteBtn>
    </S.Plan>
  );
};

export default Plan;
