import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import {
  LoginContainer,
  Form,
  Header,
  TextWraper,
  EmailInput,
  PasswordInput,
  SubmitBtn,
  ShowPasswordBtn,
} from "../Styled/LoginPage/LoginPage.styled";
import jsonData from "../Data/Data_URL.json";
import { Save, Read } from "../hooks/useSaveLocalStoreRage";
import useNavBar from "../hooks/useNavBar";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const {setNavLinks} = useNavBar();
  
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [wrongLogin, setWrongLogin] = useState("");

  const login = async () => {
    try {
      const _userPass = { email: email, password: password };
      if (!isValidEmail || !isValidPassword) {
        setWrongLogin("user or password is invalid");
        return;
      }
      const _result = await fetch(jsonData.LOGIN, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(_userPass),
      });

      if (_result.ok) {
        const _auth = await _result.json();
        console.log(_auth);
        //save local storage
        if (_auth) {
          Save(
            "user",
            JSON.stringify(_auth),
            (p) => {
              setAuth(_auth);
              console.log("save ok:" + p);
            },
            () => console.log("fail")
          );
        }
      } else {
        setWrongLogin("*Wrong user or password");
      }
    } catch (ex) {
      console.log(ex.message);
    }
  };

  useEffect(() => {
    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/login"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );
  }, []);

  useEffect(() => {
    if (auth) {
      Read("user", (_ps) => {
        setAuth(JSON.parse(_ps));
        navigate("/auth/profile");
        window.location.reload(true);
      },()=>{
        console.log("read fail");
      });
    }
  }, [auth]);

  useEffect(() => {
    const validate = () => {
      const _regx = new RegExp("^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.com$");
      if (_regx.test(email)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    };
    (() => validate())();
  }, [email]);

  useEffect(() => {
    const validate = () => {
      const _regx = new RegExp("^[A-Za-z0-9._-]+$");
      if (_regx.test(password)) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(false);
      }
    };

    (() => validate())();
  }, [password]);

  return (
    <>
      <LoginContainer>
        <Form>
          <Header>Longin</Header>
          <TextWraper>
            Email
            <br />
            <EmailInput
              isValid={isValidEmail}
              maxLength={25}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextWraper>
          <TextWraper>
            Password
            <br />
            <PasswordInput
              isValid={isValidPassword}
              value={password}
              maxLength={25}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
            />
            <ShowPasswordBtn onClick={() => setShowPassword((x) => !x)}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </ShowPasswordBtn>
          </TextWraper>
          <TextWraper onClick={login}>
            <span style={{ color: "red" }}> {wrongLogin}</span>
            <SubmitBtn>Login</SubmitBtn>
          </TextWraper>
        </Form>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
