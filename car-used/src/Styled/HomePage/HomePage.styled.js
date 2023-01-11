import styled from "styled-components";

export const HomePageContainer = styled.div`
  margin-top: 50px;
  top: 2rem;
  height: auto;
  width: 100%;
  background-color: gray;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 20%;
  min-width: 300px;
  max-width: 320px;
  min-height: 400px;
  //background-color: darkcyan;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 2px;
  &:hover {
    border: 1px solid gold;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 60%;
  display: block;
  background-color: blueviolet;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  background-color: aqua;
`;

export const PriceText = styled.div`
  position: absolute;
  width: 200px;
  font-size: 1.5em;
  top: calc(100% - 1.6em);
  left: calc(50% - 100px);
  color: gold;
  user-select: none;
`;

export const DownText = styled.div`
  position: absolute;
  width: 200px;
  font-size: 1.5em;
  top: 10px;
  right: 0;
  user-select: none;
  color: gold;
`;

export const DetailContainer = styled.div`
  position: relative;
  height: 40%;
  display: block;
  background-color: gray;
`;

export const Series = styled.div`
  height: auto;
  max-height: calc(100% - 40px);
  font-weight: 800;
  font-size: 1.2em;
  word-wrap: break-word;
  overflow-y: hidden;
  padding: 10px;
  display: block;
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: calc(100% - 40px - 12px);
  left: 0;
  right: 0;
  height: auto;
  box-sizing: border-box;
  padding: 5px;
  background: linear-gradient(to bottom ,transparent 10%,gray 20%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactTellBtn = styled.a`
  height: 40px;
  width: calc(50% - 10px);
  background-color: rgba(0, 0, 200, 1);
  border-radius: 5px;
  font-size: 1.35em;
  border: 1px solid black;
  box-shadow: 3px 3px rgba(100, 100, 100, 0.5);
  cursor: pointer;
  color: gray;
  text-decoration: none;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const ContactLineBtn = styled(ContactTellBtn)`
  background-color: lime;
  font-size: 1.5em;
`;
