import { rgba } from 'polished';
import styled from 'styled-components';

export const UserLoginPage = styled.main`
  background: linear-gradient(to bottom right, #953dcf, #125caf);
  width: 100%;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ULoginWindow = styled.div`
  background-color: #fff;
  min-width: 350px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: #953dcf;
  text-align: center;
  margin: 100px 0px 90px 0px;
`;

export const ID = styled.section`
  margin-bottom: 30px;
  margin-top: 30px;
  border-bottom: 2px solid black;
`;

export const Password = styled.section`
  margin-bottom: 30px;
  margin-top: 30px;
  margin-bottom: 100px;
  border-bottom: 2px solid black;
`;

export const SubTitle = styled.label`
  color: #969292;
  font-size: 16px;
`;

export const LoginInput = styled.input`
  height: 32px;
  font-size: 20px;
  outline: none;
  width: 98%;
  border: none;
  color: ${({ type }) => type === 'text' && rgba(0, 0, 0, 0.3)};
`;

export const SubmitButton = styled.button`
  display: flex;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 25px;
  color: white;
  padding: 10px 60px;
  background: linear-gradient(to right, #953dcf, #125caf);
  margin: auto;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
`;

export const ShowPasswordButton = styled.img`
  width: 20px;
  height: 15px;
  cursor: pointer;
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
`;
