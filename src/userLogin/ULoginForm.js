import React,{useState, useEffect} from 'react';
import axios from 'axios';
import "./ULogin.css";

function ULoginForm({Login, error}){
    const[details, setDetails] = useState({ID:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    useEffect(()=> {
        const fetchEvents = async () =>{
          const res = await  axios.post("https://rollbook.kro.kr:4093/user/login")
          console.log(res);
        }
        fetchEvents();
      }) 

    return (
        <form className="uSubmit" onSubmit = {submitHandler}>
           
            <div className="uForm-inner">
                <div>
                 <h2 className="uTitle">Login</h2>
                </div>
                
                {(error !=="") ? ( <div className="uError">{error}</div>) : ""}
              
               <form className="uForm-group">
                <div className="ID">
                    <label htmlFor="ID">id</label>
                    <input 
                    className="uInput" 
                    type="text" 
                    name="id" 
                    id="id" 
                    placeholder="학번"
                    onChange={e => setDetails({...details, id: e.target.value})} value={details.id}/>
                </div>
               
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input 
                    className="uInput" 
                    type="password" 
                    name="Password" 
                    id="password" 

                    placeholder="비밀번호"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input className="uBtn" type="submit" value="LOGIN"/>
                </form>
            </div>
        </form>
    )
}

export default ULoginForm;