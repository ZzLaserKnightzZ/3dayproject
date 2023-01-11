import styled, { ServerStyleSheet } from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, , 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 20%;
  height: 40%;

  background-color: gray;
  border-radius: 10px;
  border: 1px solid black;

  @media only screen and (width < 1400px) {
    width: 30%;
  }

  @media only screen and (width < 900px) {
    width: 40%;
  }

  @media only screen and (width < 550px) {
    width: 80%;
    height: 50%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 2em;
  background-color: black;
  color: gold;
  font-size: 2em;
  font-weight: 500;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const TextWraper = styled.p`
  position: relative;
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  color: gold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    margin-top: 15%;
  }
`;

export const EmailInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  padding: 5px;
  font-size: 0.7em;
  color: gold;
  text-align: center;

  background-color: black;
  border-bottom: ${({isValid})=> isValid ? "2px solid lime":"2px solid red"};
`;

export const PasswordInput = styled(EmailInput)``;

export const SubmitBtn = styled.button`
  border: 1px solid gold;
  background-color: black;
  color: gold;
  width: 4.2em;
  height: 2rem;
  font-size: 1em;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 10%;
  background-color: transparent;
  color: gold;
  width: 1.5em;
  height: 1.3em;
  font-size: 1em;
  border: none;
`;
