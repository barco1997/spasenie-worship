import React from "react";
import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import { media } from "../../utils/media";
const Wrapper = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
`;

const Text = styled.p`
  font-family: "Arial";
  font-weight: normal;
  font-style: normal;
  max-width: 90vw;
  font-size: 20px;
  line-height: 28px;
  ${media.phone`
  font-size: 17px;
  line-height: 24px;
    
  `};
  ${media.small`
  font-size: 14px;
  line-height: 20px;
  `};
`;
export default function Paragraph(props) {
  return (
    <Wrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
