import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { Read, Save } from "./hooks/useSaveLocalStoreRage";
import jsonData from "./Data/Data_URL.json";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";
import AddCarPage from "./Pages/AddCarPage";
import UnAuthorizePage from "./Pages/UnAuthrizePage";
import LoginPage from "./Pages/LoginPage";
import UserHomePage from "./Pages/UserHomePage";
import ProfilePage from "./Pages/ProfilePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import NotFound from "./Pages/NotFoundPage";

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState(null);

  //axios standart code
  const changeRefreshToken = async () => {
    const _res = await fetch(jsonData.AUTH.REFRESH_TOKEN, {
      headers: { Authorization: `Bearer ${auth?.refreshToken}` },
    });
    if (_res.ok) {
      const { token, refreshToken } = await _res.json();
      console.log("new ref:" + token + ":" + refreshToken);
      setAuth((x) => {
        return { ...x, token: token, refreshToken: refreshToken };
      });
    }
  };

  const changeToken = async () => {
    const _res = await fetch(jsonData.AUTH.CHANGE_TOKEN, {
      headers: { Authorization: `Bearer ${auth?.token}` },
    });
    if (_res.ok) {
      const { token } = await _res.json();
      console.log("new to:" + token);
      setAuth((x) => {
        return { ...x, token: token };
      });
    } else {
      await changeRefreshToken();
    }
  };

  useEffect(() => {
    Read( //without encrypt and key loger
      "user",
      (_ps) => {
        setAuth(JSON.parse(_ps));
        console.log(_ps);
      },
      () => {
        console.log("fail");
      }
    );
  }, []);

  useEffect(() => {
    const _timer = setInterval(async () => {
      
      
      try {
        if (!auth?.token) return;
        console.log(auth);
        await changeToken();
      } catch (ex) {
        await changeRefreshToken();
      }
    }, 1000 * 60);

    return () => clearInterval(_timer);
  }, [auth]);

  useEffect(() => {
    if (auth) {
      Save(
        "user",
        JSON.stringify(auth),
        (_psKey) => {
          console.log("save:" + _psKey);
        },
        () => {
          console.log("fail save user");
        }
      );
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar isAuthenthicated={false} />}>
            <Route index element={<HomePage />} />
            <Route path="About" element={<AboutPage />} />
            <Route path="Service" element={<ServicePage />} />
            <Route path="UnAuthorize" element={<UnAuthorizePage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/auth" element={<NavBar isAuthenthicated={true} />}>
            <Route index element={<HomePage />} />
            <Route path="UserHome" element={<UserHomePage />} />
            <Route path="AddCar" element={<AddCarPage />} />
            <Route path="Profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
