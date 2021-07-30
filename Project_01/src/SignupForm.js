import React from 'react';

const Sform =() =>{
    return (
        <div className="container">
            <div className="App-wrapper">
                <div>
                    <h2 className="title">Sign Up</h2> 
                </div>
                <form className="form-wrapper">
                <div className="ID">
                        <label className="label">ID</label>
                        <input className="input" type="text" />
                    </div>

                    <div className="name">
                        <label className="label">Full Name</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="grade">
                        <label className="label">grade</label>
                        <input className="input" type="text" />
                    </div>

                    <div className="password">
                        <label className="label">password</label>
                        <input className="input" type="password" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sform;