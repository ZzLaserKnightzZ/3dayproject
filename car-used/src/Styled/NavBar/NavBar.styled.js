import styled from "styled-components";

export const NavItem = styled.div`
  height: 50px;
  font-size: 1.5em;
  width: auto;
  color: ${({ isActiveColor }) => (isActiveColor ? "lime" : "gold")};

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: black;
  z-index: +9999;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (width < 810px) {
    display: none;
  }
`;

export const MobileNavBarContainer = styled.div`
  display: none;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: +9999;

  @media only screen and (width < 810px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileShowNavBtn = styled.button`
  position: relative;
  left: 0;
  padding: 0;
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  font-size: 2em;
  color: gold;
  background-color: black;
  border: none;
  display: none;
  @media screen and (width < 810px) {
    display: block;
  }
`;

export const PageContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: auto;
  background-color: gray;

`;
