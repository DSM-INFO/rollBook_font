import React, {useState} from 'react';



function UApps(){
  const User= {
    ID:"",
    password:""
  }

  const [user, setUser] = useState({id:"", password:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.password === User.password && details.id === User.id){
      console.log("Logged in");
      setUser({
        id: details.id
      });
    } else {
      console.log("아이디 또는 비밀번호가 맞지않습니다.");
      setError("아이디 또는 비밀번호가 맞지않습니다.");
    }
  }
 
  const Logout = () =>{
    setUser({id:"", password:""});
  }
};



export default UApps;