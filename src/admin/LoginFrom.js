import React, { useRef } from "react";
import axios from "axios";
import "./login.css";

function LoginFrom() {
    const idRef = useRef("");
    const passwordRef = useRef("");

    const checkPasswordRule = () => {
        const check_spc = /^[A-Za-z0-9+]*$/;

        const Allow =
            !check_spc.test(passwordRef.current.value) ||
            !check_spc.test(idRef.current.value);

        if (Allow) {
            alert(`error : 특수문자는 사용 하실 수 없습니다`);

            idRef.current.value = "";
            passwordRef.current.value = "";
        }
        return Allow;
    };

    const submit = () => {
        if (checkPasswordRule()) {
            return null;
        }

        const res = axios
            .post("https://rollbook.kro.kr:4093/admin/login", {
                id: idRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => {
                const token = res.data.access_token;
                console.log(token);
            });
        console.log(`res = ${res}`);
    };

    return (
        <form className="submits">
            <div className="form-inner">
                <h2>Admin Login</h2>
                <div className="form-group">
                    <label htmlFor="id">id:</label>
                    <input
                        className="inputs"
                        type="text"
                        name="id"
                        id="id"
                        ref={idRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="inputs"
                        type="password"
                        name="Password"
                        id="password"
                        ref={passwordRef}
                    />
                </div>
                <input
                    className="inputs"
                    type="button"
                    value="LOGIN"
                    onClick={submit}
                />
            </div>
        </form>
    );
}

export default LoginFrom;
