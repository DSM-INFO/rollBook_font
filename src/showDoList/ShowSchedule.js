import React from 'react';
import UseFetch from '../hook/UseFetch';
import Plan from './Plan';

const ShowSchedule = () => {
  const planList = UseFetch(`http://rollbook.kro.kr:4200/list`);
  // const planList = [];

  return (
    <div className="showScheduleBackground">
      {planList.map((plan) => (
        <div className="centerShow">
          <Plan plan={plan} key={plan.id} />
        </div>
      ))}
      <div className="showListMarginBottom" />
    </div>
  );
};

export default ShowSchedule;
