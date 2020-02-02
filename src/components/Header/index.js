import React from "react";
import styled from "styled-components";
import { media } from "../../utils/media";
//import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Futurica-Black";
  font-weight: 700;
  font-style: normal;
  transform: scaleY(0.8);
  font-size: 54px;
  line-height: 62px;
  letter-spacing: 0.2em;
  text-align: center;

  ${media.phone`
    flex: 1; 
    font-size: 35px;
  line-height: 45px;
  `};
  ${media.small`
  flex: 1; 
  font-size: 30px;
  line-height: 40px;
  `};
`;
export default function Header(props) {
  return (
    <Wrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
