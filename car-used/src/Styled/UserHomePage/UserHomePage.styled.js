import styled from "styled-components";

export const SellListContainer = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: auto;
  background-color: gray;

  //center carlist
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid gold;
  background-color: black;
  font-size: 2rem;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SellItem = styled.div`
  position: relative;
  margin: 10px;
  width: 45%;
  height: 300px;
  background-color: black;
  border: 1px solid gold;
  max-width: 830px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  @media only screen and (width < 1200px) {
    width: 80%;
  }
  @media only screen and (width < 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowImage = styled.img`
  width: 50%;
  height: 100%;
  
  @media only screen and (width < 680px) {
    width: 100%;
    height: 60%;
  }
`;

export const DetailTable = styled.table`
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;

  @media only screen and (width < 500px) {
    width: 80%;
    height: 40%;
  }

  @media only screen and (width < 429px) {
    width: 80%;
  }
`;

export const DetailBodyTable = styled.tbody``;

export const Tr = styled.tr`
  display: flex;
  width: 100%;
  max-width: 345px;
  @media only screen and (width > 1550px) {
    max-width: 1000px;
  }
  @media only screen and (width < 391px) {
    max-width: 280px;
  }
  @media only screen and (width < 376px) {
    max-width: 290px;
  }
`;

export const Td = styled.td`
  flex-basis: 70%;

  color: gold;
  text-align: left;
  vertical-align: middle;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 5px;
  font-size: 1em;
  box-sizing: border-box;
`;

export const TdHeader = styled(Td)`
  text-align: center;
  font-weight: 900;
  flex-basis: 30%;
`;

export const TrPC = styled(Tr)`
  @media only screen and (width < 500px) {
    display: none;
  }
`;
