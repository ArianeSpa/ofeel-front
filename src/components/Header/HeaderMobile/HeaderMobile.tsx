// == Import : npm
import React, { useEffect } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// == Import : local
import logo from "@/sets/images/logo_fond_transparent2.png";
import "../header.scss";
import UserModalContainer from "@/components/UserModal/UserModalContainer";

type HeaderMobileProps = {
  changeViewPosition: (value?: number) => void;
  changeHeaderClassname: (value: string) => void;
  headerClassname: string;
  logged: boolean;
  yPosition: number;
};

// == Composant
export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  yPosition,
  changeHeaderClassname,
  logged,
  headerClassname,
  changeViewPosition,
}) => {
  useEffect(() => {
    window.addEventListener("touchmove", handleScroll);
  });

  const handleScroll = (ev: TouchEvent) => {
    const newPosition = ev.view?.scrollY;
    const height = ev.view?.window.document.body.scrollHeight;
    const ratio =
      newPosition && height ? Math.round((newPosition * 100) / height) : 0;
    const diffPosition = newPosition ? newPosition - yPosition : 0;
    if (yPosition <= 25) {
      changeHeaderClassname("");
    } else if (diffPosition >= 0) {
      changeHeaderClassname("down");
    } else if (diffPosition < 0) {
      if (ratio <= 10) {
        changeHeaderClassname("up bg2");
      }
      if (ratio > 10) {
        changeHeaderClassname("up bg3");
      }
      if (ratio > 25) {
        changeHeaderClassname("up bg4");
      }
      if (ratio > 30) {
        changeHeaderClassname("up bg5");
      }
      if (ratio > 43) {
        changeHeaderClassname("up bg6");
      }
      if (ratio > 50) {
        changeHeaderClassname("up bg6");
      }
      if (ratio > 60) {
        changeHeaderClassname("up bg7");
      }
      if (ratio > 70) {
        changeHeaderClassname("up bg8");
      }
      if (ratio > 78) {
        changeHeaderClassname("up bg9");
      }
    }
    changeViewPosition(newPosition);
  };

  return (
    <Menu id="headerMobile" className={headerClassname}>
      <Menu.Item id="mobileItem">
        <Image as={NavLink} exact src={logo} to="/" />
      </Menu.Item>
      <Menu.Menu position="right" id="rightPartHeader">
        <Dropdown pointing="right" icon="bars" id="burgerMenu">
          <Dropdown.Menu id="menuContent">
            {!logged && (
              <Dropdown.Item
                as={NavLink}
                className="burgerListItem"
                exact
                name="Accueil"
                to="/"
              >
                Accueil
              </Dropdown.Item>
            )}
            {logged && (
              <Dropdown.Item
                as={NavLink}
                className="burgerListItem"
                name="Tableau de bord"
                to="/dashboard"
              >
                Tableau de bord
              </Dropdown.Item>
            )}
            <Dropdown.Item
              as={NavLink}
              className="burgerListItem"
              name="Articles"
              to="/articles"
            >
              Articles
            </Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              className="burgerListItem"
              name="Contact"
              to="/contact"
            >
              Contact
            </Dropdown.Item>
            {logged && (
              <Dropdown.Item as={<UserModalContainer />} className="navbar" />
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};
