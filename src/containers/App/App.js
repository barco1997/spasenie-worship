import React from "react";

import { renderRoutes } from "react-router-config";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import { Redirect, withRouter } from "react-router-dom";
import withSpaRouter from "../../utils/withSpaRouter";
import HomePage from "../HomePage";
import AlbumPage from "../AlbumPage";
import AboutPage from "../AboutPage";
import DonationPage from "../DonationPage";
import ContactPage from "../ContactPage";
import { compose } from "recompose";
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  return (
    <Wrapper>
      <NavBar />
      {/*renderRoutes(props.route.routes)*/}
      <HomePage />
      {<AlbumPage />}
      {<AboutPage />}
      {<ContactPage />}
      {<DonationPage />}
    </Wrapper>
  );
}

export default App;
