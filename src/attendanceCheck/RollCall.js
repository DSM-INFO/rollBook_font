import React, { useRef } from "react";
import "./RollCall.css";
import UseFetch from "../hook/UseFetch";
import UseChangeToNum from "./UseChangeToNum";
import axios from "axios";

const RollCall = () => {
    const today = new Date();
    const memberList = UseFetch(`https://rollbook.kro.kr:4093/user`);
    const rollDetail = [
        "출석",
        "조퇴",
        "결석",
        "병결",
        "외출 - 병원",
        "외출 - 수리",
        "현장체험학습",
        "자격증 시험",
        "기타",
    ];
    const idRef = useRef();
    const detailRef = useRef();

    const send = () => {
        const check = UseChangeToNum(detailRef.current.value);
        if (check === 0) {
            alert("erorr!!!");
            return null;
        }
        axios
            .patch(
                `https://rollbook.kro.kr:4093/user/check/${idRef.current.value}`,
                {
                    status: check,
                }
            )
            .then((res) => {
                alert("출석체크 완료!");
            })
            .catch((err) => {
                alert(`error!!!`);
                return null;
            });
    };

    return (
        <div className="blackBackground">
            <div className="rollCallToCenter">
                <div className="rollCallWindow">
                    <h1 className="printToday">
                        {today.getFullYear()}년 {today.getMonth() + 1}월{" "}
                        {today.getDate()}일 출석 여부
                    </h1>

                    <div>
                        <select className="memberList" ref={idRef}>
                            {memberList.map((member) => (
                                <option key={member.uId}>{member.id}</option>
                            ))}
                        </select>
                        <select className="memberList" ref={detailRef}>
                            {rollDetail.map((detail) => (
                                <option key={detail}>{detail}</option>
                            ))}
                        </select>
                        <button onClick={send} className="checkSendBetton">
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RollCall;
