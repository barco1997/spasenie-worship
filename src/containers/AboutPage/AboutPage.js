import React from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/web_fon_02.jpg";

import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
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
`;

function AboutPage() {
  return (
    <Background src={backgroundPic}>
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
