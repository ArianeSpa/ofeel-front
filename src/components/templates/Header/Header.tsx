// == Import : npm
import React from "react";
import { useTranslation } from "react-i18next";

// == Import : local
import { useWindowSize } from "@/hooks/window.hook";
import { Button, Flex, FlexProps, Logo, NavMenuItem } from "../../atoms";
import { BurgerMenu, MenuItemsProps, NavBar } from "../../molecules";

type HeaderProps = {
  logged?: boolean;
  menuItems: MenuItemsProps[];
  menuItemsGap?: number;
  logOut: () => void;
} & FlexProps;

export const Header: React.FC<HeaderProps> = ({
  logged,
  menuItems,
  menuItemsGap,
  logOut,
  ...flexProps
}) => {
  const { isDesktop } = useWindowSize();
  const { t } = useTranslation();

  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      padding="8px 16px"
      {...flexProps}
    >
      <NavMenuItem id="logo-navbar" to="/">
        <Logo />
      </NavMenuItem>
      {isDesktop ? (
        <Flex width="100%" justifyContent="space-between">
          <NavBar menuItems={menuItems} gap={menuItemsGap} />
          {logged && (
            <Button type="submit" onClick={logOut}>
              {t("COMMON.LOGOUT")}
            </Button>
          )}
        </Flex>
      ) : (
        <BurgerMenu menuItems={menuItems} />
      )}
    </Flex>
  );
};
