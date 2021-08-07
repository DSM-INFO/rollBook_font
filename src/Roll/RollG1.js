import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../hook/UseFetch";
import "./RollS.css";

const RollG1 = () => {
    const grade = useParams().grade;
    const dummy = UseFetch(`http://localhost:4000/Member`);
    const memberList = dummy.filter((data) => data.grade === Number(grade));
    return (
        <div className="g1">
            <span>이름</span> <span>출석여부</span>
            {memberList.map((data) => (
                <p>{data.fullName}</p>
            ))}
        </div>
    );
};

export default RollG1;
//yarn global add json-server
//json-server --watch ./src/DB/data.json --port 4000
