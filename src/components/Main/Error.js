// == Import : npm
import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Composant
const Error = () => (
  <Segment id="errorSegment">
    <Header as="h3" id="errorTitle">Oups ! Page introuvable.</Header>
    <Container
      as={NavLink}
      exact
      id="homeReturn"
      name="Accueil"
      to="/"
    >
      Cliquez ici pour retourner sur la page d'accueil.
    </Container>
  </Segment>
);

export default Error;
