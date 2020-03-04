import React, { useState, useEffect } from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/web_fon_02.jpg";

import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
const Background = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : "none")} !important;
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
`;

function AboutPage(props) {
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
          <Header>О НАС</Header>
          <Paragraph>
            Spasenie Worship - это большая дружная команда и семья поместной
            церкви "Спасение", находящейся в городе Бресте, на Западе Беларуси.
            Каждому из нас Бог дал удивительный дар: служить Ему через музыку.
            Мы разные, но любовь Христа делает нас едиными в поклонении и
            прославлении Его имени. 31 января 2020 года наша команда выпустила
            свой первый альбом, и мы намерены продолжать усердно работать, чтобы
            "Узнать Его и сделать Его известным!"
          </Paragraph>
        </InfoWrapper>
      </Midlle>
    </Background>
  );
}

export default AboutPage;
