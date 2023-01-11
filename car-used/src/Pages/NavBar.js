import React, { useState, createContext, useEffect } from "react";
import {
  NavBarContainer,
  NavItem,
  MobileShowNavBtn,
  MobileNavBarContainer,
  PageContainer,
} from "../Styled/NavBar/NavBar.styled";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Components/Footer";

export const NavBarContext = createContext(null);

const NavBar = ({ isAuthenthicated }) => {
  const [showNavBarMobile, setShowNavBarMobile] = useState(false);

  let nav = isAuthenthicated
    ? [
        { name: "ค้นหารถ", isActive: false, path: "/auth" },
        { name: "ลงขายอยู่", isActive: false, path: "/auth/UserHome" },
        { name: "เพิ่มรถ", isActive: false, path: "/auth/AddCar" },
        { name: "Profile", isActive: true, path: "/auth/profile" },
      ]
    : [
        { name: "ค้นหารถ", isActive: true, path: "/" },
        { name: "เกี่ยวกับเรา", isActive: false, path: "/about" },
        { name: "บริการหลังการขาย", isActive: false, path: "/service" },
        { name: "เข้าสู่ระบบ", isActive: false, path: "/login" },
      ];

  const [navLinks, setNavLinks] = useState(nav);

  useEffect(() => {
    setNavLinks(nav);
  }, [isAuthenthicated]);

  //const NavItems
  return (
    <NavBarContext.Provider value={{ navLinks, setNavLinks }}>
      <NavBarContainer>
        {navLinks.map((x, i) => (
          <Link key={i} to={x.path} style={{ textDecoration: "none" }}>
            <NavItem isActiveColor={x.isActive}>{x.name}</NavItem>
          </Link>
        ))}
      </NavBarContainer>
      <MobileNavBarContainer>
        {showNavBarMobile ? (
          <MobileShowNavBtn onClick={() => setShowNavBarMobile((x) => !x)}>
            <FaTimes />
          </MobileShowNavBtn>
        ) : (
          <MobileShowNavBtn onClick={() => setShowNavBarMobile((x) => !x)}>
            <FaBars />
          </MobileShowNavBtn>
        )}
        {showNavBarMobile ? (
          navLinks.map((x, i) => (
            <Link key={i} to={x.path} style={{ textDecoration: "none" }}>
              <NavItem isActiveColor={x.isActive}>{x.name}</NavItem>
            </Link>
          ))
        ) : (
          <></>
        )}
      </MobileNavBarContainer>
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </NavBarContext.Provider>
  );
};

export default NavBar;
