/**
 *
 * MenuItem
 *
 */

// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { FormattedMessage } from 'react-intl';

const MobileMenuItem = styled(NavLink)`
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 100px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: "Arial";

  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;

  color: #000;
  max-width: 200px;
  width: 100%;
  margin-bottom: 10px;
  transition: box-shadow 300ms ease-in-out, background 300ms ease-in-out;

  &:hover,
  &.selected {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    background: white;
  }
`;

export default MobileMenuItem;
