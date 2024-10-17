// == Import : npm
import React from "react";
import { Container, Header } from "semantic-ui-react";

// == Import : local
import "./welcome.scss";

// == Composant
export const Welcome: React.FC = () => (
  <Container id="welcomeBoardMessage">
    <Header as="h3" id="welcomeBordHeader">
      Bienvenue sur votre tableau de bord!
    </Header>
    <p>
      {`Personnalisez votre profil utilisateur, précisez vos
      objectifs ainsi que vos préférences alimentaires, et ...`}
    </p>
    <p>En route vers la meilleure version de vous-même !</p>
    <p>
      {`Grâce à votre plan alimentaire personnalisé et
    aux séances proposées, vous atteindrez vos objectifs sans frustration.`}
    </p>
  </Container>
);
