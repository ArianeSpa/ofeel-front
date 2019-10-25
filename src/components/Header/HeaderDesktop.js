// == Import : npm
import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import UserModal from 'src/containers/UserModal';

import logo from 'src/assets/images/logo_fond_transparent2.png';
import './header.scss';

// == Composant
const HeaderDesktop = ({ logged }) => (
  <Menu text className="navbar navbarDesktop">
    <Menu.Menu position="left">
      <Menu.Item className="desktopItem">
        <Image
          as={NavLink}
          exact
          to="/"
          src={logo}
          className="desktopLogo"
        />
      </Menu.Item>
    </Menu.Menu>
    {!logged && (
      <Menu.Item as={NavLink} exact to="/" className="navbar" name="Accueil" />
    )}
    {logged && (
      <Menu.Item as={NavLink} to="/dashboard" className="navbar" name="Tableau de bord" />
    )}
    <Menu.Item as={NavLink} to="/articles" className="navbar" name="Articles" />
    <Menu.Item as={NavLink} to="/contact" className="navbar" name="Contact" />
    { logged && (<UserModal />) }

  </Menu>

);

HeaderDesktop.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default HeaderDesktop;
