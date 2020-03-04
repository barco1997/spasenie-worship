import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  opacity: 0.7;
  margin: 0px 10px;
  padding: 2px 0px;
  height: 100%;
  width: fit-content;
  &:hover,
  &.selected {
    opacity: 1;
    color: #ffffff;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: solid 1px white;
  }
`;

const Text = styled.span`
  font-family: "Arial";
  font-weight: 700;
  font-style: normal;
  transform: scaleY(0.9);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2em;

  cursor: pointer;
`;
export default function SmallHeader(props) {
  return (
    <Wrapper to={props.to}>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
