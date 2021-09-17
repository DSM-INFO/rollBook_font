import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../img/infoIcon.png";

const UserHeader = () => {
    return (
        <div className="header">
            <Link className="printToLogo" to="/user">
                <img src={logo} alt="infoIcon" />
            </Link>
            <div className="tool">
                <span className="lAndS_Button">
                    <Link to="/user/login" className="loginAndSignup">
                        Login
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to="/user/signup" className="loginAndSignup">
                        Signup
                    </Link>
                </span>
                <Link className="button" to="/user/rollCall">
                    출석 체크
                </Link>
                <Link className="button" to="/user/showList">
                    일정 목록
                </Link>
            </div>
        </div>
    );
};

export default UserHeader;
