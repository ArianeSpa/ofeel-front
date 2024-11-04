// == Import : npm
import React from "react";
import { NavLink } from "react-router-dom";

// == Import : local
import { CustomLink, Flex, Typo } from "@/components";

// == Composant
export const Error: React.FC = () => (
  <Flex gap={16} margin="50px">
    <Typo color="grey.g5" fontSize={24}>
      Oups ! Page introuvable.
    </Typo>
    <CustomLink as={NavLink} to="/">
      Cliquez ici pour retourner sur la page d'accueil.
    </CustomLink>
  </Flex>
);
