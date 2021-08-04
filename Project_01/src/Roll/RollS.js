import React from 'react'
import "./RollS.css"

const RollS = (Submit) => {

    const submitHandler = e =>{
        e.preventDefault();
        Submit();
    }

    return (
        <div className="roll">

            <div className="wrapper">
                <div>
                    <h2  className="title">출석현황</h2>
                </div>

                <form className="btns">
                    <div className="1g">
                        <input 
                        className="uBtnS" 
                        type="submit" 
                        value="1grade"
                        onSubmit = {submitHandler}
                        />
                    </div>
                   
                   <div className="2g">
                        <input 
                        className="uBtnS" 
                        type="submit" 
                        value="2grade"
                        onSubmit = {submitHandler}
                        />
                   </div>
                    
                    <div className="3g">
                        <input 
                        className="uBtnS" 
                        type="submit" 
                        value="3grade"
                        onSubmit = {submitHandler}
                        />
                    </div>
                    
                </form>
               
                
            </div>
        </div>
    )
}

export default RollS;