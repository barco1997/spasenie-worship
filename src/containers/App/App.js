import React, { useState, useEffect } from "react";

import NavBar from "../../components/NavBar";
import styled from "styled-components";

import HomePage from "../HomePage";
import AlbumPage from "../AlbumPage";
import AboutPage from "../AboutPage";
import DonationPage from "../DonationPage";
import ContactPage from "../ContactPage";
import Loader from "../../components/Loader";
import smoothscroll from "smoothscroll-polyfill";
import Footer from "../../components/Footer";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function App(props) {
  const [home, setHome] = useState(false);
  const [album, setAlbum] = useState(false);
  const [albumFront, setAlbumFront] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [donation, setDonation] = useState(false);
  const handleLoad = location => {
    chooseOption(location);
  };

  const chooseOption = field => {
    switch (field) {
      case "home":
        setHome(true);
        break;
      case "album":
        setAlbum(true);
        break;
      case "albumFront":
        setAlbumFront(true);
        break;
      case "about":
        setAbout(true);
        break;
      case "contact":
        setContact(true);
        break;
      case "donation":
        setDonation(true);
        break;
      default:
        setHome(true);
    }
  };
  useEffect(() => {
    smoothscroll.polyfill();
  });

  const condition = home && album && albumFront && about && contact && donation;

  return (
    <Wrapper>
      <NavBar />
      {!condition && <Loader />}
      <HomePage
        handleLoadExtra={() => handleLoad("albumFront")}
        handleLoad={() => handleLoad("home")}
      />
      <AlbumPage handleLoad={() => handleLoad("album")} />
      <AboutPage handleLoad={() => handleLoad("about")} />
      <ContactPage handleLoad={() => handleLoad("contact")} />
      <DonationPage handleLoad={() => handleLoad("donation")} />
      <Footer />
    </Wrapper>
  );
}

export default App;
