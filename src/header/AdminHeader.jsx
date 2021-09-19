import { Link } from 'react-router-dom';
import logo from '../img/infoIcon-admin.png';
import * as S from './style';

const AdminHeader = () => {
  return (
    <S.Header>
      <Link to="/admin">
        <S.MainLogo src={logo} alt="infoIcon" />
      </Link>
      <S.Tool>
        <S.LoginAndSignup>
          <Link to="/admin/login" className="loginAndSignup">
            <S.LoginAndSignupButton>Login</S.LoginAndSignupButton>
          </Link>
        </S.LoginAndSignup>
        <Link className="button" to="/admin/rollShow">
          <S.NavButton>출석 현황</S.NavButton>
        </Link>
        <Link className="button" to="/admin/addList">
          <S.NavButton>일정 추가</S.NavButton>
        </Link>
        <Link className="button" to="/admin/showList">
          <S.NavButton>일정 목록</S.NavButton>
        </Link>
      </S.Tool>
    </S.Header>
  );
};

export default AdminHeader;
