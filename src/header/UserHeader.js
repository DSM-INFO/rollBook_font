import { Link } from "react-router-dom";
import "./Header.css";

const UserHeader= () => {
    return (
        <div className="header">
            <Link className="printToLogo" to="/">
                <img src="infoIcon.png" alt='infoIcon'/>
            </Link>
            <div className="tool">
                <span className="lAndS_Button">
                    <Link to="/login" className="loginAndSignup">
                        Login
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to="/signup" className="loginAndSignup">
                        Signup
                    </Link>
                </span>
                <Link className="button" to="/rollCall">
                    출석 체크
                </Link>
                <Link className="button" to="/showList">
                    일정 목록
                </Link>
            </div>
        </div>
    );
};

export default UserHeader