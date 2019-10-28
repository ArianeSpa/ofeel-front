// == Import : npm
import React from 'react';
import { Segment, Button, Container } from 'semantic-ui-react';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => (
  <Segment className="footerSegment">
    <Container className="copyright">
      <p>&copy; O'Feel.2019</p>
    </Container>
    <Container className="buttons">
      <Button
        icon="facebook"
        href="https://www.facebook.com/Oclock.io/"
        target="_blank"
      />
      <Button
        icon="twitter"
        href="https://twitter.com/Oclock_io?s=17"
        target="_blank"
      />
      <Button
        color="red"
        icon="youtube"
        href="https://www.youtube.com/channel/UCVdtXmsbmewiS6N9QjO8LKA"
        target="_blank"
      />
      <Button
        icon="linkedin"
        href="https://www.linkedin.com/in/ariane-spanneut/"
        target="_blank"
      />
      <Button
        icon="github"
        href="https://github.com/ArianeSpa"
        target="_blank"
      />
      <Button
        icon="instagram"
        href="https://www.instagram.com/suis_ton_fil/"
        target="_blank"
      />
      <Button
        icon="mail outline"
        href="mailto:ariane.spanneut@gmail.com?subject=contact%20from%20Ofeel"
      />
    </Container>
  </Segment>
);

export default Footer;
