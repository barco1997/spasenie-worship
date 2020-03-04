import React from "react";
import styled from "styled-components";
import SmallHeader from "./smallheader";
import { VIEWS, minIconMapping } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import { media } from "../../utils/media";
import Logo from "../../static/img/logo.png";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 200px;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 30px;
  background: #101010;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  padding: 0px 3px;

  ${media.desktop`
    width: 80vw;
    justify-content: flex-start;
  `};

  ${media.phone`
  
  justify-content: center;
  `};
`;

const UpperRow = styled(Row)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`;

const LowerRow = styled(Row)`
  padding: 10px 3px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  ${media.desktop`
    width: 380px; 
  `};
  ${media.phone`
  width: 300px;
  `};
`;

const IconRow = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-top: 10px;
  height: 65px;
`;

const InnerRow = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  ${media.desktop`
    width: 100%;
    max-width: 380px;
  `};
  ${media.phone`
  
  width: 300px;
  `};
`;

const LogoInnerWrapper = styled(NavLink)`
  margin: 10px;
  margin-top: 20px;
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

const ColumnTwo = styled(Column)`
  align-items: ${props => (props.reverse ? "flex-end" : "flex-start")};
  width: 270px;
  margin: 10px 0px;
  ${media.desktop`
    width: 380px; 
    align-items: flex-start;
  `};
  ${media.phone`
  width: 300px;
  `};
`;

const Text = styled.div`
  font-family: "Arial";
  font-weight: normal;
  font-style: normal;
  opacity: 0.7;
  font-size: 14px;
  line-height: 18px;
  margin: 2px 0px;
  color: #ffffff;
  margin: 0px 10px;
`;

const B = styled.div`
  font-family: "Arial";
  font-weight: 700;
  font-style: normal;
  opacity: 0.8;
  font-size: 14px;
  line-height: 18px;
  margin: 4px 0px;
  color: #ffffff;
  margin: 0px 10px;
`;

export default function Footer(props) {
  return (
    <Wrapper>
      <UpperRow>
        <InnerRow>
          <Column>
            <SmallHeader to={getPath(VIEWS.ALBUM)}>АЛЬБОМ</SmallHeader>
            <SmallHeader to={getPath(VIEWS.ABOUT)}>О НАС</SmallHeader>
          </Column>
          <Column>
            <SmallHeader to={getPath(VIEWS.CONTACT)}>КОНТАКТ</SmallHeader>
            <SmallHeader to={getPath(VIEWS.DONATE)}>ПОЖЕРТВОВАТЬ</SmallHeader>
          </Column>
          <IconRow>
            {minIconMapping.vk}
            {minIconMapping.instagram}
            {minIconMapping.facebook}
            {minIconMapping.youtube}
            {minIconMapping.apple}
            {minIconMapping.spotify}
          </IconRow>
        </InnerRow>
      </UpperRow>
      <LowerRow>
        <InnerRow>
          <LogoInnerWrapper to={getPath(VIEWS.HOME)}>
            <Image src={Logo} />
          </LogoInnerWrapper>
          <ColumnTwo>
            <Text>Скрипникова 45А, Брест</Text>
            <Text>Беларусь 224009</Text>
          </ColumnTwo>
          <ColumnTwo reverse>
            <B>© 2020 Spasenie Worship</B>
            <Text>All rights reserved | Copyrights</Text>
          </ColumnTwo>
        </InnerRow>
      </LowerRow>
    </Wrapper>
  );
}
