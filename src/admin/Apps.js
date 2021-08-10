import React, { useEffect, useState } from "react";
import LoginFrom from "./LoginFrom";
import "./login.css";
<<<<<<< HEAD
import axios from 'axios';

function Apps(){
  const adminUser= {
    ID:"admin",
    password: "admin12345"
  }

  useEffect(()=> {
    const fetchEvents =  () =>{
      const res =  axios.post("https://rollbook.kro.kr:4093/admin/login")
      console.log(res);
    }
    fetchEvents();
  }) 

  const [user, setUser] = useState({ID:"", password:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.password === adminUser.password && details.ID === adminUser.ID){
      console.log("Logged in");
      setUser({
        ID: details.ID
      });
    } else {
      console.log("아이디 또는 비밀번호가 맞지않습니다.");
      setError("아이디 또는 비밀번호가 맞지않습니다.");
    }
  }

  const Logout = () =>{
    setUser({ID:"", password:""});
  }

  return (
    <div className="App">
      {(user.ID !=="") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.ID}</span></h2>
          <button onClick = {Logout}>Logout</button>
          </div>
      ): (
        <LoginFrom Login={Login} error={error}/>
      )}
    </div>
  );
};


=======
import axios from "axios";

function Apps() {
    const adminUser = {
        ID: "admin",
        password: "admin12345",
    };

    useEffect(() => {
        const fetchEvents = () => {
            const res = axios.post("http://122.34.166.121:5090/admin/login");
            console.log(res);
        };
        fetchEvents();
    });

    const [user, setUser] = useState({ ID: "", password: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);

        if (
            details.password === adminUser.password &&
            details.ID === adminUser.ID
        ) {
            console.log("Logged in");
            setUser({
                ID: details.ID,
            });
        } else {
            console.log("아이디 또는 비밀번호가 맞지않습니다.");
            setError("아이디 또는 비밀번호가 맞지않습니다.");
        }
    };

    const Logout = () => {
        setUser({ ID: "", password: "" });
    };

    return (
        <div className="App">
            {user.ID !== "" ? (
                <div className="Welcome">
                    <h2>
                        Welcome, <span>{user.ID}</span>
                    </h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginFrom Login={Login} error={error} />
            )}
        </div>
    );
}
>>>>>>> 6fdd7cdfeedbfbdd2ddd376590d5347e6e2195dc

export default Apps;
