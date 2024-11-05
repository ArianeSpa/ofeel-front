// == Import : npm
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// == Import : local
import { CustomLink, Flex, Typo } from "@/components";

// == Composant
export const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex gap={30} m={12}>
      <Typo color="grey.g5" fontSize={32}>
        {t("PAGES.ERROR.UNREACHABLE")}
      </Typo>
      <CustomLink as={NavLink} to="/" fontSize={20}>
        {t("PAGES.ERROR.HOME_LINK")}
      </CustomLink>
    </Flex>
  );
};
