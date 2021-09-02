import axios from 'axios';
import { useState } from 'react';
import './ShowList.css';

const Plan = ({ plan: p }) => {
  const [plan, setPlan] = useState(p);

  const Del = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      axios
        .delete(`http://rollbook.kro.kr:4200/list/delete/${plan.id}`)
        .then((res) => {
          setPlan({ id: 0 });
        });
    }
  };

  if (plan.id === 0) {
    return null;
  }

  return (
    <div className="plan">
      <p className="day">
        {plan.mon}월 {plan.day}일
      </p>
      <div className="Detail">
        <p className="word">{plan.plan}</p>
      </div>
      <button onClick={Del} className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default Plan;
