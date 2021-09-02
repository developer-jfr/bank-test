import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NvabarElements";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { actions } from "../../redux/actions/auth-actions";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const isLogined = useSelector((state) => state.auth?.isLogined);
  const dispatch = useDispatch();

  const toggleHome = () => {};

 const loginLogout = () => {
    if (isLogined) {
      dispatch(actions.toggleIsLogined(false));
    } else {
      return <Redirect to="/auth" />;
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              test
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/add"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Create
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink onClick={loginLogout} to="/auth">
                {isLogined ? "logout" : "login"}
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
