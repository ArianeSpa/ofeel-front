import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'src/assets/images/logo_fond_transparent2.png';


import './header.scss';

const Header = ({ logged }) => (
  <div className="header">

    <div><img src={logo} alt="OFeel" /></div>
    {/* <div>OFEEL</div> */}
    <Menu text className="navbar">
      {!logged && (
        <Menu.Item as={NavLink} exact to="/" className="navbar" name="Accueil" />
      )}
      {logged && (
        <Menu.Item as={NavLink} to="/dashboard" className="navbar" name="Tableau de bord" />
      )}
      <Menu.Item as={NavLink} to="/articles" className="navbar" name="Articles" />
      <Menu.Item as={NavLink} to="/contact" className="navbar" name="Contact" />
    </Menu>
  </div>
);

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Header;
