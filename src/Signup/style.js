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
  padding: 10px;

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
  font-size: 20px;
`;
export const SignUpInput = styled.input`
  font-size: 25px;
  margin-top: none;
  border: none;
  border-bottom: black solid 1px;
  &:focus {
    outline: none;
  }
`;
