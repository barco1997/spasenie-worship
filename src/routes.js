//import React from "react";

//import styled from "styled-components";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import { VIEWS } from "./constants";
import { getPath } from "./helpers/pathHelpers";
//import { Redirect } from "react-router-dom";
export const routes = [
  {
    path: getPath(VIEWS.MAIN),
    render: App,
    routes: [
      {
        path: getPath(VIEWS.HOME),
        component: HomePage
      } /*,
      {
        path: getPath(VIEWS.ALBUM),
        component: AlbumPage
      },
      {
        path: getPath(VIEWS.ABOUT),
        component: AboutPage
      },
      {
        path: getPath(VIEWS.Contact),
        component: ContactPage
      },
      {
        path: getPath(VIEWS.DONATE),
        component: DonationPage
      }*/
    ]
  }
];
