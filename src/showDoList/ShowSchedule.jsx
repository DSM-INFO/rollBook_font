import React, { useEffect, useState } from 'react';
import { requestWithToken } from '../hook/axios/axios';
import Plan from './Plan';
import * as S from './style';

const ShowSchedule = ({ target }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestWithToken('get', '/list', target, {}, {})
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        alert('일정 목록을 불러올 수 없습니다.');
      });
  }, []);

  return (
    <S.ShowSchedulePage>
      {data.map((plan) => {
        return (
          <S.CenterShow key={plan.num}>
            <Plan plan={plan} target={target} />
          </S.CenterShow>
        );
      })}
      <S.PageFooter />
    </S.ShowSchedulePage>
  );
};

export default ShowSchedule;
