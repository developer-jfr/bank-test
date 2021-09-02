import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from "react-router-dom";
import { actions } from "../../redux/actions/auth-actions";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoutes,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
} from "./SideBarElement";
const SideBar = ({ isOpen, toggle }) => {
const isLogined = useSelector(state => state.auth.isLogined);
const dispatch = useDispatch();

const loginLogout = () => {
  
  if (isLogined) {
    dispatch(actions.toggleIsLogined(false));
  } else {
    return <Redirect to="/auth" />;
  }
};
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
   
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="/">Home</SideBarLink>
          <SideBarLink onClick={toggle} to="/auth">Sign In</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoutes onClick={loginLogout} to="/auth">{isLogined ? 'logout' : 'signin'}</SideBarRoutes>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
