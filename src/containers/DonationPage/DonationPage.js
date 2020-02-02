import React from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/web_fon_5.jpg";

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
  align-items: center;
  flex: 1;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 85%;
`;

function DonationPage() {
  return (
    <Background src={backgroundPic}>
      <Midlle>
        <InfoWrapper>
          <Header>СДЕЛАЙ СВОЙ ВКЛАД</Header>
        </InfoWrapper>
      </Midlle>
    </Background>
  );
}

export default DonationPage;
