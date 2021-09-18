import styled from 'styled-components';

export const UserLoginPage = styled.main`
  background: linear-gradient(to bottom right, #953dcf, #125caf);
  width: 100%;
  min-height: 100vh;
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
  margin: 20px;
  color: #969292;
  font-size: 16px;
  border-bottom: 2px solid black;
`;

export const Password = styled.section`
  margin: 20px;
  color: #969292;
  font-size: 16px;
  margin-bottom: 100px;
  border-bottom: 2px solid black;
`;

export const LoginInput = styled.input`
  height: 32px;
  font-size: 20px;
  outline: none;
  width: 98%;
  border: none;
  margin-bottom: 10px;
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
