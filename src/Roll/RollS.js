import {Link} from 'react-router-dom'
import "./RollS.css"

const RollS = () => {

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