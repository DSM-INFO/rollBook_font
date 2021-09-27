import React, { useState } from 'react';
import { requestWithToken } from '../hook/axios/axios';
import Plan from './Plan';
import * as S from './style';

const ShowSchedule = () => {
  console.log('axios call');
  const [data, setData] = useState([]);

  console.log(data);
  console.log('axios end');

  return (
    <S.ShowSchedulePage>
      {data.map((plan) => (
        <div className="centerShow">
          <Plan plan={plan} key={plan.id} />
        </div>
      ))}
      <div className="showListMarginBottom" />
    </S.ShowSchedulePage>
  );
};

export default ShowSchedule;
