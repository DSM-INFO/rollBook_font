import React, {useState} from 'react';
import LoginFrom from './LoginFrom';


function App(){
  const adminUser= {
    ID:"admin",
    password: "admin12345"
  }

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
      console.log("Details do not Match!");
      setError("Details do not Match!");
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



export default App;

