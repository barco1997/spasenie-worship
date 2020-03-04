import React from "react";

//import styled from "styled-components";
import App from "./containers/App";
/*import HomePage from "./containers/HomePage";
import AlbumPage from "./containers/AlbumPage";
import AboutPage from "./containers/AboutPage";
import DonationPage from "./containers/DonationPage";
import ContactPage from "./containers/ContactPage";*/
import { VIEWS } from "./constants";
import { getPath } from "./helpers/pathHelpers";
import { Redirect } from "react-router-dom";
export const routes = [
  {
    path: getPath(VIEWS.MAIN),
    render: () => (
      <App />
    ) /*,
    routes: [
      {
        path: getPath(VIEWS.HOME),
        component: HomePage
      },
      {
        path: getPath(VIEWS.ALBUM),
        component: AlbumPage
      },
      {
        path: getPath(VIEWS.ABOUT),
        component: AboutPage
      },
      {
        path: getPath(VIEWS.DONATE),
        component: DonationPage
      },
      {
        path: getPath(VIEWS.CONTACT),
        component: ContactPage
      },
      {
        path: getPath(VIEWS.REDIRECT),
        component: () => <Redirect from="/" exact to={getPath(VIEWS.HOME)} />
      }
    ]*/
  },
  {
    path: getPath(VIEWS.REDIRECT),
    render: () => <Redirect from="/" exact to={getPath(VIEWS.HOME)} />
  }
];
