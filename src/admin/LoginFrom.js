import React, { useRef } from "react";
import axios from "axios";
import "./login.css";

function LoginFrom() {
    const idRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        const res = axios
            .post("https://rollbook.kro.kr:4093/admin/login", {
                id: idRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => {
                console.log(res);
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
