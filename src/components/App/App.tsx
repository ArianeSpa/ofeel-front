// == Import : npm
import React from "react";
import { Container } from "semantic-ui-react";

// == Import : local
import "./app.scss";
import { Footer } from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import MainContainer from "../Main/MainContainer";

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
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </Container>
  );
};
