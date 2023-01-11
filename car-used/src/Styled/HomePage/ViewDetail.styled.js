import styled from "styled-components";

export const WrapContainer = styled.div`
  display: ${({ isHidden }) => (isHidden ? "block" : "none")};
`;

export const ViewDetailContainer = styled.div`
  position: fixed;
  z-index: +10000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
  @media only screen and (width < 1350px) {
    flex-direction: column;
    padding: 10%;
  }

  @media only screen and (width < 600px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Carousel = styled.div`
  position: relative;
  margin-top: 5%;
  width: 45%;
  min-height: 60%;
  //background-color: gray;
  padding: 2em;

  @media only screen and (width < 1350px) {
    width: 80%;
    min-height: 40%;
    margin-top: 10%;
  }

  @media only screen and (width < 429px) {
    width: 80%;
    min-height: 20%;
  }

  @media only screen and (width < 811px) {
    padding: 10px;
  }
`;


export const DetailContainer = styled(Carousel)`
  //background-color: black;
  height: auto;
  min-height: 60%;
`;

export const CloseBtn = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  border: 2px solid gold;
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: gold;
  outline: none;
  font-size: 1.5em;

  //center times
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (width < 600px) {
    top: 5px;
    right: 5px;
  }
`;

export const SlideBtnRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10%;

  //center icon
  font-size: 2.1em;
  color:gold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SlideBtnLeft = styled(SlideBtnRight)`
  right: unset;
  left: 0;
`;

export const ImageNumber = styled.div`
position: absolute;
height: 20px;
top: calc(100% - 30px);
width: 50px;
left: calc(50% - 25px);
font-size: 1.5em;

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

`;

export const ShowImage = styled.img` 
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

export const DetailTable = styled.table`
  width: 100%;
  height: 100%;
`;

export const Td = styled.td`
  padding: 5px;
  flex-basis: 100%;
  font-size: 1.2em;
`;

export const TdHead = styled(Td)`
  flex-basis: 35%;
  font-weight: 500;
  @media only screen and (width < 429px) {
    font-size: 1em;
  }
`;

export const Tr = styled.tr`
  display: flex;
  width: 100%;
  border-bottom: 2px solid gold;
`;
