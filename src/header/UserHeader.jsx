import { Link } from 'react-router-dom';
import logo from '../img/infoIcon.png';
import * as S from './style';

const UserHeader = () => {
  return (
    <S.Header>
      <Link to="/user">
        <S.MainLogo src={logo} alt="mainIcon" />
      </Link>
      <S.Tool>
        <S.LoginAndSignup>
          <Link to="/login">
            <S.LoginAndSignupButton>Login</S.LoginAndSignupButton>
          </Link>
          &nbsp;|&nbsp;
          <Link to="/signup">
            <S.LoginAndSignupButton>Signup</S.LoginAndSignupButton>
          </Link>
        </S.LoginAndSignup>
        <Link to="/rollCall">
          <S.NavButton>출석 체크</S.NavButton>
        </Link>
        <Link to="/showList">
          <S.NavButton>일정 목록</S.NavButton>
        </Link>
      </S.Tool>
    </S.Header>
  );
};

export default UserHeader;
