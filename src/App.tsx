// == Import : npm
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Paper } from "react-rocket-ui";

// == Import : local
import { useAppDistpatch, useAppSelector, useWindowSize } from "@/hooks";
import {
  Drawer,
  Footer,
  Header,
  Main,
  NavMenu,
  NavMenuItem,
} from "@/components";
import { logOut, setHasBackdrop } from "@/store";
import { LogIn } from "@/pages/LogIn/LogIn";
import { SignUp } from "@/pages/SignUp/SignUp";
import { PostList } from "@/pages/Feed/PostList";
import { Contact } from "@/pages/Contact/Contact";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import { startAxe } from "@/utils";

export const App: React.FC = () => {
  const dispatch = useAppDistpatch();
  const { isDesktop } = useWindowSize();
  const { t } = useTranslation();
  const logged = useAppSelector((state) => state.userReducer.logged);
  const hasBackdrop = useAppSelector((state) => state.appReducer.hasBackdrop);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  startAxe();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const menuItems = [
    { id: "home-item", content: t("LINK.HOME"), to: "/", hide: logged },
    {
      id: "dashboard-item",
      content: t("LINK.DASHBOARD"),
      to: "/dashboard",
      hide: !logged,
    },
    { id: "article-item", content: t("LINK.ARTICLES"), to: "/articles" },
    { id: "contact-item", content: t("LINK.CONTACT"), to: "/contact" },
  ];

  useEffect(() => {
    // on init request all data for food, posts and workout
    // data may be request in each page instead of app component ?
  }, []);

  const handleOpenDrawer = (value: boolean) => {
    dispatch(setHasBackdrop(value));
    setOpenDrawer(value);
  };

  return (
    <Paper fullHeight fullWidth backgroundImage="body" px={isDesktop ? 6 : 4}>
      <Flex
        fullHeight
        fullWidth
        flexDirection="column"
        aria-hidden={hasBackdrop}
      >
        <Header
          gap={12}
          logged={logged}
          menuItems={menuItems}
          logOut={handleLogout}
          onBurgerMenuClick={() => handleOpenDrawer(true)}
        />
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                logged ? <Navigate replace to="/dashboard" /> : <LogIn />
              }
            />
            <Route
              path="/signup"
              element={
                logged ? <Navigate replace to="/dashboard" /> : <SignUp />
              }
            />
            <Route
              path="/dashboard/*"
              element={logged ? <Dashboard /> : <Navigate replace to="/" />}
            />
            <Route path="/articles" element={<PostList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
      </Flex>
      <Drawer disableClickOutside open={openDrawer} setOpen={handleOpenDrawer}>
        <NavMenu
          flexDirection="column"
          justifyContent="center"
          gap={70}
          pt={10}
        >
          {menuItems.map(
            ({ content, id, hide, to }) =>
              !hide && (
                <NavMenuItem
                  key={id}
                  id={id}
                  to={to}
                  onClick={() => handleOpenDrawer(false)}
                >
                  {content}
                </NavMenuItem>
              )
          )}
        </NavMenu>
      </Drawer>
    </Paper>
  );
};
