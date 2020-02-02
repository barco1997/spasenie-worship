import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Image = styled.img`
  width: 25px;
  object-fit: contain;
  cursor: pointer;
`;
export default function SubHeader(props) {
  return (
    <Wrapper>
      <Image src={props.src} />
    </Wrapper>
  );
}
