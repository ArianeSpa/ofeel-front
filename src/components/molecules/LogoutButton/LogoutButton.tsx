// == Import : npm
import React from "react";
import { Button } from "semantic-ui-react";

// == Import : local
import { useAppDistpatch } from "@/hooks/store.hook";
import { logOut } from "@/store/reducers/user.slice";
import "./logout_button.scss";

// == Composant
export const LogoutButton: React.FC = () => {
  const dispatch = useAppDistpatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Button onClick={handleLogout} type="submit" id="disconnect">
      Deconnexion
    </Button>
  );
};
