import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  border: 1px solid white;
  margin: 0px 20px;
  padding: 7px 12px;

  position: relative;
  &:hover {
    color: #cccccc;
    border: 1px solid #cccccc;
    text-decoration: none;
  }
`;

const Text = styled.span`
  font-family: "Arial";
  font-weight: 700;
  font-style: normal;
  transform: scaleY(0.9);
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export default function AlbumButton(props) {
  return (
    <Wrapper to={props.to}>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
