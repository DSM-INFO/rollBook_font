import React,{useEffect} from 'react';
import axios from 'axios';
import "./login.css";

function LoginFrom(){
   

    useEffect(()=> {
        const fetchEvents =  () =>{
          const res =  axios.post("https://rollbook.kro.kr:4093/admin/login")
          console.log(res);
        }
        fetchEvents();
      }) 

    return (
        <form className="submits">
            <div className="form-inner">
                <h2>Admin Login</h2>
                <div className="form-group">
                    <label htmlFor="id">id:</label>
                    <input className="inputs" 
                    type="text" 
                    name="id" 
                    id="id" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="inputs" 
                    type="password" 
                    name="Password" 
                    id="password" 
                   />
                </div>
                <input className="inputs" type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginFrom;