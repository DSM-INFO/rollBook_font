import { Link } from 'react-router-dom';
import './Header.css';
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
          <Link to="/user/login">
            <S.Button>Login</S.Button>
          </Link>
          &nbsp;|&nbsp;
          <Link to="/user/signup">
            <S.Button>Signup</S.Button>
          </Link>
        </S.LoginAndSignup>
        <Link to="/user/rollCall">
          <S.NavButton>출석 체크</S.NavButton>
        </Link>
        <Link to="/user/showList">
          <S.NavButton>일정 목록</S.NavButton>
        </Link>
      </S.Tool>
    </S.Header>
  );
};

export default UserHeader;
