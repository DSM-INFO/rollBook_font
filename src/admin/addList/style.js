import styled from 'styled-components';

export const AddSchedulePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  background-color: black;
`;

export const AddWindow = styled.div`
  background-color: whitesmoke;

  border: 10px solid;
  border-image: linear-gradient(
    to bottom,
    rgb(151, 232, 254),
    rgb(218, 155, 255)
  );
  border-image-slice: 1;
  height: 470px;
  width: 450px;
`;

export const Input_Area = styled.section`
  display: inline-block;
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const InputTitle = styled.h1`
  margin: 10px;
  margin-top: 20px;
  color: rgb(151, 232, 254);
`;

export const InputLabel = styled.label`
  color: rgb(164, 215, 254);
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 196px;
  height: 50px;
  font-size: 20px;
  border: none;
  margin: 4px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

export const DedailText = styled.textarea`
  width: 400px;
  height: 200px;
  font-size: 25px;
`;

export const InputSubmitButton = styled.button`
  width: 80px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
  background-color: whitesmoke;
  color: rgb(218, 155, 255);
  border-radius: 10px;
  padding: 5px;
  border: 3px solid rgb(218, 155, 255);
  font-size: 20px;
  font-weight: 800;
`;
