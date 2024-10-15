// == Import : npm
import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";

// == Import : local
import { Footer } from "../Footer/Footer";
import { HeaderMobile } from "../Header/HeaderMobile/HeaderMobile";
import { HeaderDesktop } from "../Header/HeaderDesktop/HeaderDesktop";
import { Main } from "../Main/Main";
import "./app.scss";

export const App: React.FC = () => {
  useEffect(() => {
    // on init request all data for food, posts and workout
    // data may be request in each page instead of app component ?
  }, []);

  return (
    <Container id="app" className="globalContainer">
      <HeaderMobile />
      <HeaderDesktop />
      <Main />
      <Footer />
    </Container>
  );
};
