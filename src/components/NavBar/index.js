import React, { useState } from "react";
import styled from "styled-components";
import SubHeader from "../SubHeader";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import Logo from "../../static/img/logo.png";
import { NavLink } from "react-router-dom";
import { media } from "../../utils/media";
import Drawer from "react-motion-drawer";
import MobileMenuItem from "../MobileMenuItem";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  ${media.desktop`
    height: 120px; 
  `};
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
  display: flex;
  ${media.desktop`
  
  top: 25px;
  left: 0px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `};
  ${media.tablet`
  top: 15px;
    
  `};
`;

const LogoInnerWrapper = styled(NavLink)``;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 80%;
  margin-left: 140px;
  ${media.desktop`
    display: none;
    
  `};
`;

const Image = styled.img`
  height: 45px;
  width: 130px;
  object-fit: contain;

  cursor: pointer;
  ${media.desktop`
    height: 90px;
    width: 260px;
  `};
  ${media.tablet`
    height: 60px;
    width: 180px;
  `};
`;

const MobileMenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Burger = styled.div`
  position: absolute;
  top: 65px;
  right: 20px;

  display: none;

  width: 30px;
  height: 20px;

  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  ${media.desktop`display: block;`};
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #ffffff;
    border-radius: 7px;
    opacity: 1;
    right: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: 1px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 8px;
  }
  span:nth-child(4) {
    top: 15px;
  }

  ${props =>
    props.open &&
    `span:nth-child(1) {
      top: 8px;
      width: 0%;
      right: 50%;
    }
    span:nth-child(2),
    span:nth-child(3) {
      top: 8px;
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
    span:nth-child(4) {
      top: 8px;
      width: 0%;
      right: 50%;
    } `};
`;

const StyledDrawer = styled(Drawer)`
  background: white;
  display: none;
  ${media.desktop`display: block;`};
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <LogoInnerWrapper to={getPath(VIEWS.HOME)}>
            <Image src={Logo} />
          </LogoInnerWrapper>
        </LogoWrapper>
        <NavRow>
          <SubHeader to={getPath(VIEWS.ALBUM)}>АЛЬБОМ</SubHeader>
          <SubHeader to={getPath(VIEWS.ABOUT)}>O&nbsp;НАС</SubHeader>
          <SubHeader to={getPath(VIEWS.CONTACT)}>КОНТАКТ</SubHeader>
          <SubHeader to={getPath(VIEWS.DONATE)}>ПОЖЕРТВОВАТЬ</SubHeader>
        </NavRow>
        <Burger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
          <span />
        </Burger>
        <StyledDrawer
          right={true}
          width={300}
          fadeOut
          open={isOpen}
          onChange={open => setIsOpen(open)}
          noTouchOpen={false}
          noTouchClose={false}
        >
          <div style={{ width: "100%" }}>
            <div style={{ padding: "2em" }}>
              <MobileMenuWrapper>
                <MobileMenuItem
                  to={getPath(VIEWS.ALBUM)}
                  activeClassName="selected"
                >
                  АЛЬБОМ
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.ABOUT)}
                  activeClassName="selected"
                >
                  O&nbsp;НАС
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.CONTACT)}
                  activeClassName="selected"
                >
                  КОНТАКТ
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.DONATE)}
                  activeClassName="selected"
                >
                  ПОЖЕРТВОВАТЬ
                </MobileMenuItem>
              </MobileMenuWrapper>
            </div>
          </div>
        </StyledDrawer>
      </InnerWrapper>
    </Wrapper>
  );
}

export default NavBar;
