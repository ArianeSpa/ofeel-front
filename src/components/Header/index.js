// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';
import UserModal from 'src/containers/UserModal';

import './header.scss';

// == Composant
const Header = ({ logged }) => (
  <>
    <HeaderMobile logged={logged} />
    <HeaderDesktop logged={logged} />
  </>
);

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Header;
