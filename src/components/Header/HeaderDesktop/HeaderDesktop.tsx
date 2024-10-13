// == Import : npm
import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// == Import : local
import UserModal from "@/containers/UserModal";
import logo from "@/assets/images/logo_fond_transparent2.png";
import "../header.scss";

type HeaderDesktopProps = {
  logged: boolean;
};
// == Composant
export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ logged }) => (
  <Menu text id="headerDesktop">
    <Menu.Menu position="left" id="leftPartHeader">
      <Menu.Item id="desktopItem">
        <Image as={NavLink} exact id="desktopLogo" src={logo} to="/" />
      </Menu.Item>
    </Menu.Menu>
    {!logged && (
      <Menu.Item
        as={NavLink}
        className="navbarItem"
        exact
        name="Accueil"
        to="/"
      />
    )}
    {logged && (
      <Menu.Item
        as={NavLink}
        className="navbarItem"
        name="Tableau de bord"
        to="/dashboard"
      />
    )}
    <Menu.Item
      as={NavLink}
      className="navbarItem"
      name="Articles"
      to="/articles"
    />
    <Menu.Item
      as={NavLink}
      className="navbarItem"
      name="Contact"
      to="/contact"
    />
    {logged && <UserModal />}
  </Menu>
);
