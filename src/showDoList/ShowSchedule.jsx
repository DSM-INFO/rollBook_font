import React, { useEffect, useState } from 'react';
import { requestWithToken } from '../hook/axios/axios';
import Plan from './Plan';
import * as S from './style';

const ShowSchedule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestWithToken('get', '/list', 'user', {}, {})
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        alert('에러가 났습니다.');
      });
  }, []);

  return (
    <S.ShowSchedulePage>
      {data.map((plan) => {
        return (
          <S.CenterShow key={plan.num}>
            <Plan plan={plan} />
          </S.CenterShow>
        );
      })}
      <S.PageFooter />
    </S.ShowSchedulePage>
  );
};

export default ShowSchedule;
