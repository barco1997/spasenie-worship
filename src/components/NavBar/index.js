import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SubHeader from "../SubHeader";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import Logo from "../../static/img/logo.png";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 50px;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 80%;
  margin-left: 140px;
`;

const Image = styled.img`
  height: 45px;
  width: 130px;
  object-fit: contain;

  cursor: pointer;
`;

function NavBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Image src={Logo} />
        </LogoWrapper>
        <NavRow>
          <SubHeader to={getPath(VIEWS.ALBUM)}>АЛЬБОМ</SubHeader>
          <SubHeader to={getPath(VIEWS.ABOUT)}>O&nbsp;НАС</SubHeader>
          <SubHeader to={getPath(VIEWS.CONTACT)}>КОНТАКТ</SubHeader>
          <SubHeader to={getPath(VIEWS.DONATE)}>ПОЖЕРТВОВАТЬ</SubHeader>
        </NavRow>
      </InnerWrapper>
    </Wrapper>
  );
}

export default NavBar;
