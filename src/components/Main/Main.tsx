// == Import : npm
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

// == Import : local
import Postslist from "@/containers/PostView/PostsList";
import Contact from "@/components/Contact/Contact";
import { Error } from "@/components/Main/Error/Error";
import "./main.scss";
import LoginContainer from "../Home/Login/LoginContainer";
import SignUpContainer from "../Home/SignUp/SignUpContainer";
import DashboardContainer from "../Dashboard/DashboardContainer";

type MainProps = {
  logged: boolean;
};
// == Composant
export const Main: React.FC<MainProps> = ({ logged }) => (
  <Container id="mainContainer">
    <Routes>
      {!logged && <Route path="/login" element={<LoginContainer />} />}
      {!logged && <Route path="/signup" element={<SignUpContainer />} />}

      {logged && <Navigate to="/dashboard" />}

      {!logged && <Navigate to="/" />}

      {logged && <Route path="/dashboard" element={<DashboardContainer />} />}

      <Route path="/articles" element={<Postslist />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<Error />} />
    </Routes>
  </Container>
);
