// == Import : npm
import React from "react";

// == Import : local
import { useWindowSize } from "@/hooks/window.hook";
import { NavBarDesktop, NavBarDesktopProps } from "../../molecules";
import { Button, Flex, FlexProps, Logo, NavBarItem } from "../../atoms";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

type HeaderProps = {
  logged?: boolean;
  menuItemsGap?: number;
  logOut: () => void;
} & NavBarDesktopProps &
  FlexProps;

// == Composant
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
      <NavBarItem content={<Logo />} id="logo-navbar" to="/" />
      {windowWidth > 768 ? (
        <>
          <NavBarDesktop menuItems={menuItems} gap={menuItemsGap} />
          {logged && (
            <Button type="submit" onClick={logOut}>
              Deconnexion
            </Button>
          )}
        </>
      ) : (
        <HeaderMobile logOut={logOut} />
      )}
    </Flex>
  );
};
