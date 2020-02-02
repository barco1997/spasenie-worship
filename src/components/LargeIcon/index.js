import React from "react";
import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import { media } from "../../utils/media";

const Wrapper = styled.a`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  ${media.phone`
  width: 30px;
  height: 30px;
  margin: 15px;
  `};
`;

const Image = styled.img`
  width: 35px;
  ${media.phone`
  width: 30px;
  `};
  object-fit: contain;
  cursor: pointer;
`;
export default function LargeIcon(props) {
  return (
    <Wrapper target="_blank" rel="noopener noreferrer" href={props.href}>
      <Image src={props.src} />
    </Wrapper>
  );
}
