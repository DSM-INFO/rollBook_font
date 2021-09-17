import styled from 'styled-components';

export const RollCallPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  background-color: black;
`;

export const RollCallWindow = styled.div`
  background-color: whitesmoke;

  border: 10px solid;
  border-image: linear-gradient(
    to bottom,
    rgb(151, 232, 254),
    rgb(218, 155, 255)
  );
  border-image-slice: 1;
  height: 150px;
  width: 400px;
  padding: 30px;
`;

export const PrintToday = styled.h1`
  margin-top: 0px;
  margin-bottom: 50px;
  color: rgb(151, 232, 254);
`;

export const SelecterOptionList = styled.select`
  background-color: whitesmoke;
  border: none;
  width: 150px;
  font-size: 20px;
  color: black;
  &:focus {
    outline: none;
  }
`;

export const CheckSendBetton = styled.button`
  border: none;
  background-color: whitesmoke;
  color: rgb(218, 155, 255);
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
