import React from "react";
import styled from "styled-components";
import backgroundPic from "../../static/img/web_fon_5.jpg";

import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import DonateButton from "../../components/DonateButton";
import donateImg from "../../static/img/donate.png";
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

const Input = styled.input`
  margin-top: 20px;
  width: 250px;
  height: 50px;
`;

function DonationPage(props) {
  return (
    <Background src={backgroundPic}>
      <Midlle>
        <InfoWrapper>
          <Header>СДЕЛАЙ СВОЙ ВКЛАД</Header>
        </InfoWrapper>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="ZAXZT2WTUWYKL" />
          <Input
            type="image"
            src={donateImg}
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_PL/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </Midlle>
    </Background>
  );
}

export default DonationPage;
