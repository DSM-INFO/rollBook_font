import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../hook/UseFetch";
import "./RollS.css";

const RollG = () => {
    const grade = useParams().grade;
    const dummy  = UseFetch(`https://rollbook.kro.kr:4093/user/${grade}`);

    

    const memberList = dummy.filter((data) => data.grade === Number(grade));
    return (
        <div className="g1">
            <div className="title">
                <span>이름</span> <span>출석여부</span>
            </div>
            {memberList.map((data) => (
                <p>{data.fullName}</p>
            ))}
        </div>
    );
};

export default RollG;
//yarn global add json-server
//json-server --watch ./src/DB/data.json --port 4000
