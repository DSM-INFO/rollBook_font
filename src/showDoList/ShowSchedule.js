import React from "react";
import UseFetch from "../hook/UseFetch";
import Plan from "./Plan";

const ShowSchedule = () => {
    const planList = UseFetch(`https://neon-dev.kro.kr:5993/list`);

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
