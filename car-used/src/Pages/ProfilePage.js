import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useNavBar from "../hooks/useNavBar";

const ProfilePage = (props) => {
  const {  setAuth } = useAuth();
  const naviage = useNavigate();
  const { setNavLinks } = useNavBar();

  const logout = () => {
    setAuth(null);
    localStorage.clear();
    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/login"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );
    naviage("/login");
  };

  useEffect(() => {

    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/auth/profile"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );
  }, []);

  return (
    <center>
      <h1 onClick={logout}>log out</h1>
      <h2>image</h2>
      <h3>contact cell phone line</h3>
      <h3>chage user name pass</h3>
    </center>
  );
};

export default ProfilePage;
