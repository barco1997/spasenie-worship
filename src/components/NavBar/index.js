import React, { useState, useEffect, useRef } from "react";
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
  position: ${props => (props.isSticky ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  z-index: 5000;
  background: ${props => (props.isSticky ? "#101010" : "none")};
  box-shadow: ${props =>
    props.isSticky ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
  height: ${props => (props.isSticky ? "70px" : "80px")};
  ${media.desktop`
    box-shadow: none;
    height: 120px; 
    position: absolute;
    background: none;
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
  top: ${props => (props.isSticky ? "10px" : "20px")};
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
  position: fixed;
  top: 65px;
  right: 30px;

  display: none;

  width: 30px;
  height: 20px;

  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  ${media.desktop`display: block;`};
  ${media.phone`right: 20px;
  top: 65px;
  `};
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
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sticky = useRef();
  const myFunction = () => {
    if (window.pageYOffset >= sticky.current.offsetTop + 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", myFunction);
    return () => {
      document.removeEventListener("scroll", myFunction);
    };
  });
  return (
    <Wrapper ref={sticky} isSticky={isSticky}>
      <InnerWrapper>
        <LogoWrapper isSticky={isSticky}>
          <LogoInnerWrapper to={getPath(VIEWS.HOME)}>
            <Image src={Logo} />
          </LogoInnerWrapper>
        </LogoWrapper>
        <NavRow>
          <SubHeader isSticky={isSticky} to={getPath(VIEWS.ALBUM)}>
            АЛЬБОМ
          </SubHeader>
          <SubHeader isSticky={isSticky} to={getPath(VIEWS.ABOUT)}>
            O&nbsp;НАС
          </SubHeader>
          <SubHeader isSticky={isSticky} to={getPath(VIEWS.CONTACT)}>
            КОНТАКТ
          </SubHeader>
          <SubHeader isSticky={isSticky} to={getPath(VIEWS.DONATE)}>
            ПОЖЕРТВОВАТЬ
          </SubHeader>
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
                  to={getPath(VIEWS.HOME)}
                  onClick={() => setIsOpen(false)}
                  activeClassName="selected"
                >
                  ГЛАВНАЯ
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.ALBUM)}
                  onClick={() => setIsOpen(false)}
                  activeClassName="selected"
                >
                  АЛЬБОМ
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.ABOUT)}
                  onClick={() => setIsOpen(false)}
                  activeClassName="selected"
                >
                  O&nbsp;НАС
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.CONTACT)}
                  onClick={() => setIsOpen(false)}
                  activeClassName="selected"
                >
                  КОНТАКТ
                </MobileMenuItem>
                <MobileMenuItem
                  to={getPath(VIEWS.DONATE)}
                  onClick={() => setIsOpen(false)}
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
