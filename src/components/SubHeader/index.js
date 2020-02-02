import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;

  margin: 0px 20px;
  padding-top: 10px;
  height: 100%;
  position: relative;
  &:hover,
  &.selected {
    color: #ffffff;
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      margin-left: 5px;
      margin-right: 5px;
      width: calc(100% - 16px);
      border-bottom: solid 3px white;
    }
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
`;
export default function SubHeader(props) {
  return (
    <Wrapper to={props.to} activeClassName="selected">
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
