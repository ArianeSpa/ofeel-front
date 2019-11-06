// == Import : npm
import React from 'react';
import { Segment, Button, Container } from 'semantic-ui-react';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <Segment id="footerSegment">
    <Container id="copyright">
      <p>&copy; O'Feel d'Ariane 2019</p>
    </Container>
    <Container id="footerButtons">
      <Button
        className="oneButton"
        href="https://www.facebook.com/Oclock.io/"
        icon="facebook"
        target="_blank"
      />
      <Button
        className="oneButton"
        href="https://twitter.com/Oclock_io?s=17"
        icon="twitter"
        target="_blank"
      />
      <Button
        color="red"
        className="oneButton"
        href="https://www.youtube.com/channel/UCVdtXmsbmewiS6N9QjO8LKA"
        icon="youtube"
        target="_blank"
      />
      <Button
        className="oneButton"
        href="https://www.linkedin.com/in/ariane-spanneut/"
        icon="linkedin"
        target="_blank"
      />
      <Button
        className="oneButton"
        href="https://github.com/ArianeSpa"
        icon="github"
        target="_blank"
      />
      <Button
        className="oneButton"
        href="https://www.instagram.com/suis_ton_fil/"
        icon="instagram"
        target="_blank"
      />
      <Button
        className="oneButton"
        href="mailto:ariane.spanneut@gmail.com?subject=contact%20from%20Ofeel"
        icon="mail outline"
      />
    </Container>
  </Segment>
);

export default Footer;
