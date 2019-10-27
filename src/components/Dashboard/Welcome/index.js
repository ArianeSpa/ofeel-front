// == Import : npm
import React from 'react';
import { Container, Header } from 'semantic-ui-react';


import './welcome.scss';

// == Composant
const Welcome = () => (
  <Container textAlign="center" className="welcomeMessage">
    <Header as="h3" textAlign="center">
      Bienvenue sur votre tableau de bord!
    </Header>
    <p>Personnalisez votre profil utilisateur, précisez vos
      objectifs ainsi que vos préférences alimentaires, et ...
    </p>
    <p>En route vers la meilleure version de vous-même !</p>
    <p>Grâce à votre plan alimentaire personnalisé et
    aux séances proposées, vous atteindrez vos objectifs sans frustration.
    </p>
  </Container>
);

export default Welcome;
