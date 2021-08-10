import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../img/infoIcon-admin.png";

const AdminHeader = () => {
    return (
        <div className="header">
            <Link className="printToLogo" to="/admin">
                <img src={logo} alt="infoIcon" />
            </Link>
            <div className="tool">
                <span className="lAndS_Button">
                    <Link to="/admin/login" className="loginAndSignup">
                        Login
                    </Link>
                </span>
                <Link className="button" to="/admin/rollShow">
                    출석 현황
                </Link>
                <Link className="button" to="/admin/addList">
                    일정 추가
                </Link>
                <Link className="button" to="/admin/showList">
                    일정 목록
                </Link>
            </div>
        </div>
    );
};

export default AdminHeader;
