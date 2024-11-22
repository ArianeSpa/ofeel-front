// == Import : npm
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Typo } from "react-rocket-ui";

// == Import : local
import { CustomLink } from "@/components";

// == Composant
export const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex gap={15} m={6}>
      <Typo color="grey.g5" fontSize={16}>
        {t("PAGES.ERROR.UNREACHABLE")}
      </Typo>
      <CustomLink as={NavLink} to="/" fontSize={10}>
        {t("PAGES.ERROR.HOME_LINK")}
      </CustomLink>
    </Flex>
  );
};
