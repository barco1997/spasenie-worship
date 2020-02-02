import React from "react";

import { renderRoutes } from "react-router-config";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
/*import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import { Redirect } from "react-router-dom";*/

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App(props) {
  return (
    <Wrapper>
      <NavBar />
      {renderRoutes(props.route.routes)}
    </Wrapper>
  );
}

export default App;
