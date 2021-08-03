import React from 'react'
import useForm from './useForm';

const SignupForm = ({submitForm}) => {

    const {handleChange, handleFromSubmit, values,errors} = useForm(
        submitForm);

    return (
        <div className="container">

            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>

                <form className="form-wrapper">
                    <div className="Name">
                        <label className="label">Name</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="Name" 
                        placeholder="이름"
                        value={values.Name}
                        onChange={handleChange}
                        />
                        {errors.Name && <p className="error">{errors.Name}</p>}
                    </div>

                    <div className="ID">
                        <label className="label">ID</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="ID" 
                        placeholder="학년이름(공백없이)"
                        value={values.ID}
                        onChange={handleChange}
                        />

                        {errors.ID && <p className="error">{errors.ID}</p>}
                    </div>

                    <div className="Grade">
                        <label className="label">Grade</label>
                        <select 
                        className="input"
                        name="Grade" 
                        value={values.Grade}
                        onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        {errors.Grade && <p className="error">{errors.Grade}</p>}
                    </div>

                    <div className="PassWord">
                        <label className="label">PassWord</label>
                        <input 
                        className="input" 
                        type="password"
                        name="PassWord" 
                        placeholder="비밀번호"
                        value={values.PassWord}
                        onChange={handleChange}
                        />

                        {errors.PassWord && <p className="error">{errors.PassWord}</p>}
                    </div>

                    <div>
                        <button className="submit" onClick={handleFromSubmit}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;
