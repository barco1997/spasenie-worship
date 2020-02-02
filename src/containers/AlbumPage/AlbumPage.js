import React from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/backNew.jpg";

import { maxIconMapping } from "../../constants";
import Header from "../../components/Header";
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

const Shader = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0);
`;

const Midlle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const IconRow = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-top: 30px;
`;

function AlbumPage() {
  return (
    <Background src={backgroundPic}>
      <Shader>
        <Midlle>
          <Header>SPEAK UP 2019</Header>
          <Header>(LIVE)</Header>
          <IconRow>
            {maxIconMapping.apple}
            {maxIconMapping.spotify}
            {maxIconMapping.youtube}
            {maxIconMapping.vk}
            {maxIconMapping.download}
          </IconRow>
        </Midlle>
      </Shader>
    </Background>
  );
}

export default AlbumPage;
