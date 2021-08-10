import React,{useRef} from 'react'
import useForm from './useForm';
import axios from 'axios';

function SignupForm  ({submitForm}){

    const idRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const gradeRef = useRef();

    const submit = () => {
        const res = axios
            .post("https://rollbook.kro.kr:4093/user/signUp", {
                id: idRef.current.value,
                password: passwordRef.current.value,
                name: nameRef.current.value,
                grade: gradeRef.current.value,
            })
            .then((res) => {
                console.log(res);
            });
        console.log(`res = ${res}`);
    };

    const { handleChange, handleFormSubmit, values, errors } =
        useForm(submitForm);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>

                <form className="form-wrapper">
                    <div className="Name">
                        <label className="label">name</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        placeholder="이름"
                        value={values.name}
                        ref={nameRef}
                        onChange={handleChange}
                        />

                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="id">
                        <label className="label">ID</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="id" 
                        placeholder="학번"
                        value={values.id}
                        ref={idRef}
                        onChange={handleChange}
                        />

                        {errors.id && <p className="error">{errors.id}</p>}
                    </div>

                    <div className="Grade">
                        <label className="label">grade</label>
                        <select 
                        className="input"
                        name="grade" 
                        value={values.grade}
                        ref={gradeRef}
                        onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        {errors.grade && (
                            <p className="error">{errors.grade}</p>
                        )}
                    </div>

                    <div className="Password">
                        <label className="label">password</label>
                        <input 
                        className="input" 
                        type="password"
                        name="password" 
                        placeholder="비밀번호"
                        value={values.password}
                        ref={passwordRef}
                        onChange={handleChange}
                        />

                        {errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <button className="submit" onClick={handleFormSubmit, submit}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
