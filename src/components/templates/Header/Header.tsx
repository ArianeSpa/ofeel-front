// == Import : npm
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";

// == Import : local
import { useWindowSize } from "@/hooks";
import {
  Button,
  ButtonIcon,
  Flex,
  FlexProps,
  Logo,
  NavMenu,
  NavMenuItem,
} from "../../atoms";
import { useTheme } from "@/theme/theme";

type MenuItemsProps = {
  id: string;
  hide?: boolean;
  content: ReactNode | string;
  to: string;
};
type HeaderProps = {
  logged?: boolean;
  menuItems: MenuItemsProps[];
  onBurgerMenuClick: () => void;
  logOut: () => void;
} & FlexProps;

export const Header: React.FC<HeaderProps> = ({
  logged,
  menuItems,
  logOut,
  onBurgerMenuClick,
  ...flexProps
}) => {
  const { isDesktop } = useWindowSize();
  const { t } = useTranslation();
  const { color } = useTheme();

  return isDesktop ? (
    <Flex
      as="header"
      flexDirection="row"
      justifyContent={isDesktop ? "space-between" : "end"}
      width="100%"
      py={2}
      {...flexProps}
    >
      <NavMenu gap={30} px={4}>
        <NavMenuItem to="/" aria-label={`Ofeel logo - ${t("LINK.HOME")}`}>
          <Logo />
        </NavMenuItem>

        {menuItems.map(
          ({ content, hide, id, to }) =>
            !hide && (
              <NavMenuItem key={id} to={to}>
                {content}
              </NavMenuItem>
            )
        )}
      </NavMenu>
      {logged && (
        <Button type="submit" onClick={logOut}>
          {t("COMMON.LOGOUT")}
        </Button>
      )}
    </Flex>
  ) : (
    <Flex flexDirection="row" justifyContent="space-between" width="100%">
      <Logo aria-hidden />
      <ButtonIcon
        aria-label={t("COMMON.BURGER_MENU")}
        icon={<FaBars color={color.yellow.y4} size={50} />}
        onClick={onBurgerMenuClick}
      />
    </Flex>
  );
};
