// == Import : npm
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

// == Import : local
import { useAppDistpatch, useAppSelector } from "@/hooks/store.hook";
import { Footer, Header } from "@/components";
import { logOut } from "@/store/reducers/user.slice";
import { LogIn } from "@/pages/LogIn/LogIn";
import { SignUp } from "@/pages/SignUp/SignUp";
import { PostList } from "@/pages/Feed/PostList";
import Contact from "@/pages/Contact/Contact";
import { Error } from "@/pages/Error/Error";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import "./app.scss";

export const App: React.FC = () => {
  const dispatch = useAppDistpatch();
  const logged = useAppSelector((state) => state.userReducer.logged);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const menuItems = [
    { id: "home-item", content: "Accueil", to: "/", hide: logged },
    {
      id: "dashboard-item",
      content: "Tableau de bord",
      to: "/dashboard",
      hide: !logged,
    },
    { id: "article-item", content: "Articles", to: "/articles" },
    { id: "contact-item", content: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    // on init request all data for food, posts and workout
    // data may be request in each page instead of app component ?
  }, []);

  return (
    <Container id="app" className="globalContainer">
      <Header
        gap={12}
        logged={logged}
        menuItems={menuItems}
        menuItemsGap={30}
        logOut={handleLogout}
      />
      <Container id="mainContainer">
        <Routes>
          <Route
            path="/"
            element={logged ? <Navigate replace to="/dashboard" /> : <LogIn />}
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
      <Footer />
    </Container>
  );
};
