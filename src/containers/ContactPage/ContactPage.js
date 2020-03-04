import React, { useState, useEffect } from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/web_fon_03.jpg";

import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import { media } from "../../utils/media";
const Background = styled.div`
  background: url(${props => props.src}) !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Midlle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  flex: 1;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  ${media.phone`
   align-items: center; 
  `};
`;

const Email = styled.div`
  text-decoration: underline;
  color: white;
  font-family: "Futurica-Black";
  font-weight: 700;
  font-size: 23px;
  width: 100%;
  ${media.phone`
  font-size: 19px;
    
  `};
  ${media.small`
  font-size: 16px;
  `};
`;

function ContactPage(props) {
  const initialState = {
    image: null
  };
  const [image, setImage] = useState(initialState.image);
  useEffect(() => {
    if (!image) {
      let preloaderImg = document.createElement("img");
      preloaderImg.src = backgroundPic;

      preloaderImg.addEventListener("load", event => {
        setImage(backgroundPic);
        props.handleLoad();
        preloaderImg = null;
      });
    }
  });
  return (
    <Background src={image}>
      <Midlle>
        <InfoWrapper>
          <Header>СВЯЗАТЬСЯ:</Header>
          <Paragraph>
            Мы верим, что Бог хочет единства для Своей церкви. Поэтому горим для
            новых крутых проектов, через которые Он сможет изменять наши сердца
            и сердца людей вокруг. Если вы хотите поддержать нас или услышать у
            себя в церкви/на конференции мы ждём ваши сообщения....
          </Paragraph>
          <Email>spasenieworship@gmail.com</Email>
        </InfoWrapper>
      </Midlle>
    </Background>
  );
}

export default ContactPage;
