import React, { useRef, useState } from "react";
import "../css/index.css";
import "./AddSchedule.css";

const AddSchedule= () => {
    const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const dayList = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];

    const [isLoding, setIsLoding] = useState(false);
    const [plan, setPlan] = useState("");

    const monRef = useRef();
    const dayRef = useRef();

    const resetText = () => {
        setPlan("");
    };

    const onSubmit = (e) => {
        if (!plan) {
            alert("일정을 작성해 주세요");
            return null;
        }

        if (!isLoding) {
            setIsLoding(true);
            fetch(`http://localhost:4000/Schedule/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mon: monRef.current.value,
                    day: dayRef.current.value,
                    plan: plan,
                }),
            }).then((res) => {
                if (res.ok) {
                    alert("생성이 완료되었습니다");
                    setIsLoding(false);
                    resetText();
                }
            });
        }
    };

    const planText = (e) => {
        setPlan(e.target.value);
    };

    return (
        <div className="blackBackground">
            <div className="addToCenter">
                <div className="addWindow">
                    <h1>일정 추가</h1>
                    <div className="input_area">
                        <label>날짜</label>
                        <select ref={monRef}>
                            {monthList.map((i) => (
                                <option key={i}>{i}</option>
                            ))}
                        </select>
                        <select ref={dayRef}>
                            {dayList.map((i) => (
                                <option key={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input_area">
                        <label>일정</label>
                        <textarea onChange={planText} value={plan} />
                    </div>
                    <p onClick={onSubmit} className="inputSaveButton">
                        {isLoding ? "saving..." : "save"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddSchedule