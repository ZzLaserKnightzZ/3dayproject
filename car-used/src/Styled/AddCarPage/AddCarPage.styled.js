import styled from "styled-components";

export const AddCarContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (width < 960px) {
    flex-direction: column;
  }
`;

export const BoxWraper = styled.p`
  width: 45%;
  background-color: black;
  color: gold;
  margin: 0.5rem;
  height: auto;

  @media only screen and (width < 960px) {
    width: 80%;
  }
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 10px;
`;

export const InputText = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 2px solid gold;
  color: white;
  padding: 0.2rem;
  height: 2rem;
  font-size: 1.5em;
  background-color: gray;
`;

export const SubmitBtn = styled.button`
  width: 5em;
  height: 2em;
  background-color: black;
  color: gold;
  border-radius: 10px;
  border: 2px solid gold;
  font-size: 1.2em;
  align-items: center;
`;

export const FileSelecterBtn = styled.button`
width: 4em;
height: 1.6em;
font-size: 1.2em;
background-color: rgba(10,100,200,1);
border-radius: 5px;
border: 1px solid gold;
color: gold;
box-shadow: 3px 3px rgba(10,0,200,0.5);
`;

export const WrapImage = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 5px;
`;