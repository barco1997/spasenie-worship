import React from "react";
import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import { media } from "../../utils/media";
const Wrapper = styled.a`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  ${media.phone`
  width: 20px;
  height: 20px;
  margin: 15px;
  `};
`;

const Image = styled.img`
  width: 25px;
  ${media.phone`
  width: 20px;
  
  `};
  object-fit: contain;
  cursor: pointer;
`;
export default function SmallIcon(props) {
  return (
    <Wrapper target="_blank" rel="noopener noreferrer" href={props.href}>
      <Image src={props.src} />
    </Wrapper>
  );
}
