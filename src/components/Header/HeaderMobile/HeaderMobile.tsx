// == Import : npm
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Image,
  Dropdown,
  MenuItem,
  DropdownMenu,
  DropdownItem,
  MenuMenu,
} from "semantic-ui-react";

// == Import : local
import logo from "@/assets/images/logo_fond_transparent2.png";
import { LogoutButton } from "@/components/LogoutButton/LogoutButton";
import { useAppSelector } from "@/app/hooks";
import "../header.scss";

// == Composant
export const HeaderMobile: React.FC = () => {
  const logged = useAppSelector((state) => state.userReducer.logged);
  const [headerClassname, setHeaderClassname] = useState<string>("");
  const [yPosition, setYPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("touchmove", handleScroll);
  });

  const handleScroll = (ev: TouchEvent) => {
    const newPosition = ev.view?.scrollY || 0;
    const height = ev.view?.window.document.body.scrollHeight;
    const ratio =
      newPosition && height ? Math.round((newPosition * 100) / height) : 0;
    const diffPosition = newPosition - yPosition;
    if (yPosition <= 25) {
      setHeaderClassname("");
    } else if (diffPosition >= 0) {
      setHeaderClassname("down");
    } else if (diffPosition < 0) {
      if (ratio <= 10) {
        setHeaderClassname("up bg2");
      }
      if (ratio > 10) {
        setHeaderClassname("up bg3");
      }
      if (ratio > 25) {
        setHeaderClassname("up bg4");
      }
      if (ratio > 30) {
        setHeaderClassname("up bg5");
      }
      if (ratio > 43) {
        setHeaderClassname("up bg6");
      }
      if (ratio > 50) {
        setHeaderClassname("up bg6");
      }
      if (ratio > 60) {
        setHeaderClassname("up bg7");
      }
      if (ratio > 70) {
        setHeaderClassname("up bg8");
      }
      if (ratio > 78) {
        setHeaderClassname("up bg9");
      }
    }
    setYPosition(newPosition);
  };

  return (
    <Menu id="headerMobile" className={headerClassname}>
      <MenuItem id="mobileItem">
        <Image as={NavLink} src={logo} to="/" />
      </MenuItem>
      <MenuMenu position="right" id="rightPartHeader">
        <Dropdown id="burgerMenu" pointing="right" icon="bars">
          <DropdownMenu id="menuContent">
            {!logged && (
              <DropdownItem
                as={NavLink}
                className="burgerListItem"
                name="Accueil"
                to="/"
              >
                Accueil
              </DropdownItem>
            )}
            {logged && (
              <DropdownItem
                as={NavLink}
                className="burgerListItem"
                name="Tableau de bord"
                to="/dashboard"
              >
                Tableau de bord
              </DropdownItem>
            )}
            <DropdownItem
              as={NavLink}
              className="burgerListItem"
              name="Articles"
              to="/articles"
            >
              Articles
            </DropdownItem>
            <DropdownItem
              as={NavLink}
              className="burgerListItem"
              name="Contact"
              to="/contact"
            >
              Contact
            </DropdownItem>
            {logged && (
              <DropdownItem className="navbar">
                <LogoutButton />
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </MenuMenu>
    </Menu>
  );
};
