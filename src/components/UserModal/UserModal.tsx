// == Import : npm
import React from "react";
import { Button } from "semantic-ui-react";

// == Import : local
import "./modal.scss";

type UserModalProps = {
  logout: () => void;
};
// == Composant
export const UserModal: React.FC<UserModalProps> = ({ logout }) => (
  <Button onClick={logout} type="submit" id="disconnect">
    Deconnexion
  </Button>
);
