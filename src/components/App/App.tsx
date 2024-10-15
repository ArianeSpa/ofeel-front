// == Import : npm
import React from "react";
import { Container } from "semantic-ui-react";

// == Import : local
import { Footer } from "../Footer/Footer";
import { HeaderMobile } from "../Header/HeaderMobile/HeaderMobile";
import { HeaderDesktop } from "../Header/HeaderDesktop/HeaderDesktop";
import { Main } from "../Main/Main";
import "./app.scss";

type AppProps = {
  catchFoodInfo: any;
  catchPostsInfo: any;
  catchWorkoutInfo: any;
};
export const App: React.FC<AppProps> = ({
  catchFoodInfo,
  catchPostsInfo,
  catchWorkoutInfo,
}) => {
  catchFoodInfo();
  catchPostsInfo();
  catchWorkoutInfo();

  return (
    <Container id="app" className="globalContainer">
      <HeaderMobile />
      <HeaderDesktop />
      <Main />
      <Footer />
    </Container>
  );
};
