// == Import : npm
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuMenu, MenuItem, Image } from "semantic-ui-react";

// == Import : local
import logo from "@/assets/images/logo_fond_transparent2.png";
import { useAppSelector } from "@/app/hooks";
import { LogoutButton } from "@/components/LogoutButton/LogoutButton";
import "../header.scss";

// == Composant
export const HeaderDesktop: React.FC = () => {
  const logged = useAppSelector((state) => state.userReducer.logged);

  return (
    <Menu text id="headerDesktop">
      <MenuMenu position="left" id="leftPartHeader">
        <MenuItem id="desktopItem">
          <NavLink to="/">
            <Image alt="" id="desktopLogo" src={logo} />
          </NavLink>
        </MenuItem>
      </MenuMenu>
      {!logged && (
        <MenuItem as={NavLink} className="navbarItem" name="Accueil" to="/" />
      )}
      {logged && (
        <MenuItem
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
      {logged && <LogoutButton />}
    </Menu>
  );
};
