import { Link } from "react-router-dom";
import "./Header.css";

const AdminHeader= () => {
  return (
    <div className="header">
      <Link className="printToLogo" to="/">
        <img src="infoIcon-admin.png" alt='infoIcon'/>
      </Link>
      <div className="tool">
        <span className="lAndS_Button">
          <Link to="/login" className="loginAndSignup">
            Login
          </Link>
          |
          <Link to="/signup" className="loginAndSignup">
            Signup
          </Link>
        </span>
        <Link className="button">출석 현황</Link>
        <Link className="button" to="/addList">
          일정 추가
        </Link>
        <Link className="button" to="/showList">
          일정 목록
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader