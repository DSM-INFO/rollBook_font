import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./RollS.css"

const RollS = () => {

    useEffect(()=> {
        const fetchEvents =  () =>{
          const res =  axios.get("http://122.34.166.121:5090/user/:grade")
          console.log(res);
        }
        fetchEvents();
      }) 

    return (
        <div className="roll">

            <div className="wrapper">
                <div>
                    <h2  className="titleR">출석현황</h2>
                </div>

                <form className="btns">
                <Link className="uBtnS" to="/show1">
                     1학년
                </Link>

                <Link className="uBtnS" to="/show2">
                     2학년
                </Link>

                <Link className="uBtnS" to="/show3">
                     3학년
                </Link>
                    
                </form>
               
                
            </div>
        </div>
    )
}

export default RollS;