// == Import : npm
import React from 'react';
import {
  Segment, List, Image,
} from 'semantic-ui-react';

// == Import : local
import iconFB from 'src/assets/icon/fb.png';
import iconTW from 'src/assets/icon/tw.png';
import iconInsta from 'src/assets/icon/insta.png';
import './footer.scss';

// == Composant
const Footer = () => (
  <Segment inverted className="size">
    <List celled horizontal className="style">
      <List.Item>&copy; O'Feel.2019</List.Item>
      <List.Item>A propos</List.Item>
      <List.Item>
        <Image
          href="https://facebook.com"
          target="_blank"
          size="mini"
          src={iconFB}
        />
      </List.Item>
      <List.Item>
        <Image
          href="https://twitter.com"
          target="_blank"
          size="mini"
          src={iconTW}
        />
      </List.Item>
      <List.Item>
        <Image
          href="https://instagram.com"
          target="_blank"
          size="mini"
          src={iconInsta}
        />
      </List.Item>
      <List.Item>Mentions Légales</List.Item>
    </List>
  </Segment>
);

export default Footer;
