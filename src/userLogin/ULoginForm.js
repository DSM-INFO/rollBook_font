import React,{useRef} from 'react';
import axios from 'axios';
import "./ULogin.css";

function ULoginForm(){

    const idRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        const res = axios.post("https://rollbook.kro.kr:4093/user/login", {
            id: idRef.current.value,
            password: passwordRef.current.value,
        });
        console.log(res);
    };

    return (
        <form className="uSubmit">
           
            <div className="uForm-inner">
                <div>
                 <h2 className="uTitle">Login</h2>
                </div>
                
              
               <form className="uForm-group">
                <div className="ID">
                    <label htmlFor="ID">id</label>
                    <input 
                    className="uInput" 
                    type="text" 
                    name="id" 
                    id="id" 
                    placeholder="학번"
                    ref={idRef}
                   />
                </div>
               
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input 
                    className="uInput" 
                    type="password" 
                    name="Password" 
                    id="password"
                    ref={passwordRef} 
                    placeholder="비밀번호"
                    />
                </div>
                
                <input 
                className="uBtn" 
                type="submit" 
                value="LOGIN" 
                onClick={submit}/>
                </form>
            </div>
        </form>
    )
}

export default ULoginForm;