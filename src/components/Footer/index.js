// == Import : npm
import React from 'react';
import {
  Segment, Button,
} from 'semantic-ui-react';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <Segment className="size">
    <p className="copyright">&copy; O'Feel.2019</p>
    <Button
      circular
      color="facebook"
      icon="facebook"
      href="https://www.facebook.com/Oclock.io/"
      target="_blank"
    />
    <Button
      circular
      color="twitter"
      icon="twitter"
      href="https://twitter.com/Oclock_io?s=17"
      target="_blank"
    />
    <Button
      circular
      color="red"
      icon="youtube"
      href="https://www.youtube.com/channel/UCVdtXmsbmewiS6N9QjO8LKA"
      target="_blank"
    />
    <Button
      circular
      color="linkedin"
      icon="linkedin"
      href="https://www.linkedin.com/in/ariane-spanneut/"
      target="_blank"
    />
    <Button
      circular
      color="black"
      icon="github"
      href="https://github.com/ArianeSpa"
      target="_blank"
    />
    <Button
      circular
      color="pink"
      icon="instagram"
      href="https://www.instagram.com/suis_ton_fil/"
      target="_blank"
    />
    <Button
      circular
      color="yellow"
      icon="paper plane"
      href="mailto:ariane.spanneut@gmail.com?subject=contact%20from%20Ofeel"
    />
  </Segment>
);

export default Footer;
