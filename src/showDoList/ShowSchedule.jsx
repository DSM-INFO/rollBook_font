import React from 'react';
import { requestWithToken } from '../hook/axios/axios';
// import UseFetch from '../hook/UseFetch';
import Plan from './Plan';

const ShowSchedule = () => {
  // const planList = [];
  console.log('axios call');
  const planList = requestWithToken('get', '/list', {}, {});
  console.log(planList);
  console.log('axios end');

  return (
    <div className="showScheduleBackground">
      {/* {planList.map((plan) => (
        <div className="centerShow">
          <Plan plan={plan} key={plan.id} />
        </div>
      ))} */}
      <div className="showListMarginBottom" />
    </div>
  );
};

export default ShowSchedule;
