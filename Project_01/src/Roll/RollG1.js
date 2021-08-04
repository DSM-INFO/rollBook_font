import React from 'react';
import RollS from './RollS';

const RollG1 = () => {
    const Return = () =>{
        
      }
   
    const Submit = () =>{

    }
    return (
        <div className="rollG1">
            {(onsubmit) ? (
            <table className="g1">
                <p>이름</p><p>출석여부</p>
                <button onClick = {Return}>return</button>
            </table>):(<Rolls Login={Submit}/>
            )}
            
            
            
        </div>
    )
}

export default RollG1;
