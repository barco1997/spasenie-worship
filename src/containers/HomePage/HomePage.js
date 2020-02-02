import React from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/fon_wb.jpg";
import speakupPhoto from "../../static/img/speakup.jpg";
import AlbumButton from "../../components/AlbumButton";
import { VIEWS, minIconMapping } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
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

const SpeakUp = styled.img`
  height: 430px;
  width: 430px;
  object-fit: contain;
  cursor: pointer;
  margin-bottom: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${media.tablet`
  height: 80vw;
  width: 80vw;
  `};
`;

const Midlle = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const BottomRow = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-top: 10px;
`;

function HomePage() {
  return (
    <Background src={backgroundPic}>
      <Midlle>
        <SpeakUp src={speakupPhoto} />

        <AlbumButton to={getPath(VIEWS.ALBUM)} noSelection padding="10px">
          АЛЬБОМ&nbsp;В&nbsp;СЕТИ
        </AlbumButton>
      </Midlle>
      <BottomRow>
        {minIconMapping.vk}
        {minIconMapping.instagram}
        {minIconMapping.facebook}
        {minIconMapping.youtube}
        {minIconMapping.apple}
        {minIconMapping.spotify}
      </BottomRow>
    </Background>
  );
}

export default HomePage;
