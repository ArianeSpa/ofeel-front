import React from 'react';
import { Menu } from 'semantic-ui-react';

import './header.scss';

const Header = () => (
  <div className="header">
    {/* <HeaderSemanticUi as="h1" textAlign="left" icon>
      <Icon name="github" />
    </HeaderSemanticUi> */}
    <img src="src/assets/images/logo_fond_transparent2.png" alt="" />
    <Menu text className="navbar">
      <Menu.Item className="navbar" name="Accueil" />
      <Menu.Item className="navbar" name="Tableau de bord" />
      <Menu.Item className="navbar" name="Articles" />
      <Menu.Item className="navbar" name="Contact" />
    </Menu>
  </div>
);

export default Header;
