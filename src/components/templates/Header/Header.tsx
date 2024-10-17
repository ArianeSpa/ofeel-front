// == Import : npm
import React from "react";

// == Import : local
import { useWindowSize } from "@/hooks/window.hook";
import { NavBar, BurgerMenu, MenuItemsProps } from "../../molecules";
import { Button, Flex, FlexProps, Logo, NavMenuItem } from "../../atoms";

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
  const { windowWidth } = useWindowSize();

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
      {windowWidth > 768 ? (
        <Flex width="100%" justifyContent="space-between">
          <NavBar menuItems={menuItems} gap={menuItemsGap} />
          {logged && (
            <Button type="submit" onClick={logOut}>
              Deconnexion
            </Button>
          )}
        </Flex>
      ) : (
        <BurgerMenu menuItems={menuItems} />
      )}
    </Flex>
  );
};
