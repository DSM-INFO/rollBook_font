import styled from 'styled-components';

export const Header = styled.header`
  background-color: #232323;
  display: flex;
  justify-content: space-between;
  padding: 0.5vh;
  height: 6vh;
`; //높이 7vh

export const MainLogo = styled.img`
  padding-left: 10px;
  height: 90%;
`;

export const Tool = styled.nav`
  display: flex;
  align-items: center;
`;

export const LoginAndSignup = styled.span`
  margin-right: 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 100%;
`;

export const LoginAndSignupButton = styled.p`
  font-weight: bold;
  font-size: 15px;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-size: 1.1em;
    color: greenyellow;
  }
`;

export const NavButton = styled.p`
  font-weight: bold;
  font-size: 15px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-right: 40px;

  &:hover {
    font-size: 1.1em;
    color: greenyellow;
  }
`;
