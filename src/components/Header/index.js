// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import HeaderMobile from 'src/components/Header/HeaderMobile';
import HeaderDesktop from 'src/components/Header/HeaderDesktop';
import './header.scss';

// == Composant
const Header = ({
  logged, yPosition, headerClassname, changeViewPosition, changeHeaderClassname,
}) => (
  <>
    <HeaderMobile
      changeHeaderClassname={changeHeaderClassname}
      changeViewPosition={changeViewPosition}
      headerClassname={headerClassname}
      logged={logged}
      yPosition={yPosition}
    />
    <HeaderDesktop logged={logged} />
  </>
);

Header.propTypes = {
  changeHeaderClassname: PropTypes.func.isRequired,
  changeViewPosition: PropTypes.func.isRequired,
  headerClassname: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  yPosition: PropTypes.number.isRequired,
};

export default Header;
