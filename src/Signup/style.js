import styled from 'styled-components';

export const SignUpPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  background-color: black;
`;

export const SignUpDisplay = styled.div`
  background-color: white;
  border: 10px solid;
  padding: 20px;

  border-image: linear-gradient(
    to bottom,
    rgb(151, 232, 254),
    rgb(218, 155, 255)
  );
  border-image-slice: 1;
`;

export const SignUpTitle = styled.h1`
  color: rgb(151, 232, 254);
`;

export const SignUpInputInfo = styled.p`
  margin-top: 30px;
  font-weight: bold;
  color: rgb(151, 232, 254);
  font-size: 20px;
`;
export const SignUpInput = styled.input`
  font-size: 20px;
  padding-bottom: 3px;
  width: 98%;
  margin-top: 5px;
  border: none;
  &:focus {
    outline: none;
  }

  ::placeholder {
    font-size: 0.8em;
  }
`;

export const InputLine = styled.div`
  width: 98%;
  border-bottom: black solid 1px;
  ${({ Children }) => {
    return <div>{Children};</div>;
  }}
`;

export const pwInputLine = styled.div`
  width: 98%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
  border-bottom: black solid 1px;
  ${({ Children }) => {
    return <div>{Children};</div>;
  }}
`;

export const SignUpSubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignUpSubmitButton = styled.button`
  background-color: white;
  border: rgb(218, 155, 255) 2px solid;
  color: rgb(218, 155, 255);
  border-radius: 10px;
  margin-top: 15px;
  padding: 5px;

  font-size: 20px;
`;

export const ShowPasswordButton = styled.img`
  width: 20px;
  height: 15px;
  cursor: pointer;
`;
