import styled from 'styled-components';

export const ShowSchedulePage = styled.main`
  background-color: #232323;
  min-height: 93vh;
`;

export const CenterShow = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageFooter = styled.footer`
  height: 4vh;
`;

export const Plan = styled.section`
  background-color: whitesmoke;
  margin: 50px;
  margin-bottom: 0px;
  display: inline-block;
  border: 0.2vw solid gray;
  color: black;
  border: 5px solid;
  /* border-image: linear-gradient(
    to bottom,
    rgb(151, 232, 254),
    rgb(218, 155, 255)
  ); */
  border-image-slice: 1;
`;

export const Title = styled.h1`
  margin-top: 6px;
  margin-left: 8px;
  margin-bottom: 0px;
  font-size: 20px;
  color: black;
`;

export const Content = styled.div`
  margin: 5px;
  width: 600px;
  background-color: white;
  border: 2px solid black; //rgb(218, 155, 255);
`;

export const ContentText = styled.p`
  margin: 10px;
  word-break: break-word;
  font-size: 20px;
`;

export const DeleteBtn = styled.button`
  border: none;
  color: red;
  font-size: 15px;
  font-weight: bold;
  background-color: whitesmoke;
  float: right;
  margin: 6px;
  margin-top: 0px;
  margin-bottom: 10px;
  cursor: pointer;
`;
