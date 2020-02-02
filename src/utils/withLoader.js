import React from "react";

import styled from "styled-components";
import Spinner from "../components/Spinner";

const Wrapper = styled.div`
  position: relative;
`;

const withLoader = (Component, locationCheck) => {
  return function WrapperMain(props) {
    return (
      <Wrapper>
        <Component {...props} />
        <Spinner
          style={{ position: "absolute", width: "100%", height: "100%" }}
          locationCheck={locationCheck}
        />
      </Wrapper>
    );
  };
};

export default withLoader;
