// == Import : npm
import React from "react";
import { Container } from "semantic-ui-react";

// == Import : local
import "./app.scss";
import Header from "@/containers/Header";
import Main from "@/containers/Main";
import Footer from "@/components/Footer";

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
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
