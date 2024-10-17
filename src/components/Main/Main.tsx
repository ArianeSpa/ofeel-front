// == Import : npm
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

// == Import : local
import { useAppSelector } from "@/app/hooks";
import Contact from "@/components/Contact/Contact";
import { Error } from "@/components/Main/Error/Error";
import { Login } from "../Home/Login/Login";
import { SignUp } from "../Home/SignUp/SignUp";
import { PostList } from "../PostList/PostList";
import { Dashboard } from "../Dashboard/Dashboard";
import "./main.scss";

// == Composant
export const Main: React.FC = () => {
  const logged = useAppSelector((state) => state.userReducer.logged);

  return (
    <Container id="mainContainer">
      <Routes>
        <Route
          path="/"
          element={logged ? <Navigate replace to="/dashboard" /> : <Login />}
        />
        {!logged && <Route path="/signup" element={<SignUp />} />}
        <Route
          path="/dashboard/*"
          element={logged ? <Dashboard /> : <Navigate replace to="/" />}
        />
        <Route path="/articles" element={<PostList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
};
