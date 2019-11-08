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
class HeaderMobile extends React.Component {
  componentDidMount= () => {
    window.addEventListener('touchmove', this.handleScroll);
  };

  handleScroll = (event) => {
    const newPosition = event.view.pageYOffset;
    const height = event.view.window.document.body.scrollHeight;
    const ratio = Math.round(newPosition * 100 / height);
    const { yPosition, changeHeaderClassname } = this.props;
    if (yPosition <= 25) {
      changeHeaderClassname('');
    }
    else if (newPosition - yPosition > 0) {
      changeHeaderClassname('down');
    }
    else if (newPosition - yPosition < 0) {
      if (ratio <= 10) {
        changeHeaderClassname('up bg2');
      }
      if (ratio > 10) {
        changeHeaderClassname('up bg3');
      }
      if (ratio > 25) {
        changeHeaderClassname('up bg4');
      }
      if (ratio > 30) {
        changeHeaderClassname('up bg5');
      }
      if (ratio > 43) {
        changeHeaderClassname('up bg6');
      }
      if (ratio > 50) {
        changeHeaderClassname('up bg6');
      }
      if (ratio > 60) {
        changeHeaderClassname('up bg7');
      }
      if (ratio > 70) {
        changeHeaderClassname('up bg8');
      }
      if (ratio > 78) {
        changeHeaderClassname('up bg9');
      }
    }
    const { changeViewPosition } = this.props;
    changeViewPosition(newPosition);
  };

  render() {
    const { logged, headerClassname } = this.props;
    return (
      <Menu id="headerMobile" className={headerClassname}>
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
  }
}

HeaderMobile.propTypes = {
  changeViewPosition: PropTypes.func.isRequired,
  changeHeaderClassname: PropTypes.func.isRequired,
  headerClassname: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  yPosition: PropTypes.number.isRequired,
};


export default HeaderMobile;
