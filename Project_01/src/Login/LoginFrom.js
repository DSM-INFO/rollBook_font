import React,{useState} from 'react';

function LoginFrom({Login, error}){
    const[details, setDetails] = useState({ID:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <form className="submits" onSubmit = {submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !=="") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="ID">ID:</label>
                    <input className="inputs" type="text" name="ID" id="ID" onChange={e => setDetails({...details, ID: e.target.value})} value={details.ID}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="inputs" type="password" name="Password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input className="inputs" type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginFrom;