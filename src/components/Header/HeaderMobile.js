// == Import : npm
import React from 'react';
import {
  Menu, Image, Dropdown,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import logo from 'src/assets/images/logo_fond_transparent2.png';
import './header.scss';

// == Composant
const HeaderMobile = ({ logged }) => (
  <Menu className="navbar navbarMobile">
    <Menu.Item className="mobileItem">
      <Image
        as={NavLink}
        exact
        to="/"
        src={logo}
        className="mobileLogo"
      />
    </Menu.Item>
    <Menu.Menu position="right">
      <Dropdown icon="bars" className="navbarDropdown">
        <Dropdown.Menu>
          {!logged && (
            <Dropdown.Item as={NavLink} exact to="/" className="navbar" name="Accueil">Accueil</Dropdown.Item>
          )}
          {logged && (
            <Dropdown.Item as={NavLink} to="/dashboard" className="navbar" name="Tableau de bord">Tableau de bord</Dropdown.Item>
          )}
          <Dropdown.Item as={NavLink} to="/articles" className="navbar" name="Articles">Articles</Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/contact" className="navbar" name="Contact">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

HeaderMobile.propTypes = {
  logged: PropTypes.bool.isRequired,
};


export default HeaderMobile;
