// == Import : npm
import React from 'react';
import {
  Menu, Image, Dropdown,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import UserModal from 'src/containers/UserModal';
import logo from 'src/assets/images/logo_fond_transparent2.png';
import './header.scss';

// == Composant
const HeaderMobile = ({ logged }) => (
  <Menu id="headerMobile">
    <Menu.Item id="mobileItem">
      <Image
        as={NavLink}
        exact
        src={logo}
        to="/"
      />
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
          {logged && <Dropdown.Item as={UserModal} className="navbar" />}
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

HeaderMobile.propTypes = {
  logged: PropTypes.bool.isRequired,
};


export default HeaderMobile;
