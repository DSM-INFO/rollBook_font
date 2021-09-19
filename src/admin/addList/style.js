import styled from 'styled-components';

export const AddSchedulePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  background-color: black;
`;

export const AddWindow = styled.div`
  background-color: white;

  border: 10px solid;
  border-image: linear-gradient(
    to bottom,
    rgb(151, 232, 254),
    rgb(218, 155, 255)
  );
  border-image-slice: 1;
  padding: 10px;
  /* height: 470px; */
  /* width: 450px; */
`;

export const Input_Area = styled.section`
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 40px;
`;

export const WindowTitle = styled.h1`
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: rgb(151, 232, 254);
`;

export const InputLabel = styled.label`
  color: rgb(164, 215, 254);
  display: block;
  /* margin-bottom: 10px; */
  font-weight: bold;
  font-size: 20px;
`;

export const TitleInput = styled.input`
  font-size: 25px;
  width: 97%;
  margin: 4px;
  padding: 5px;
  background-color: white;
  border: none;
  border-bottom: rgb(164, 215, 254) solid 2px;

  outline: none;
`;

export const ContentInput = styled.textarea`
  width: 400px;
  height: 150px;
  font-size: 25px;
  border: rgb(164, 215, 254) solid 2px;
  padding: 10px;
  resize: none;
  outline: none;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSubmitButton = styled.button`
  /* width: 80px; */
  cursor: pointer;
  margin: 30px;
  margin-top: 0px;
  background-color: whitesmoke;
  color: rgb(218, 155, 255);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  border: 3px solid rgb(218, 155, 255);
  font-size: 25px;
  font-weight: 800;
`;
