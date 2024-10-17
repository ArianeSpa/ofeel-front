import { NavBarItem, NavBarItemProps } from "../../atoms";
import {
  StyledNavBarItemContainer,
  StyledNavBarItemContainerProps,
} from "./NavBarDesktop.style";

export type MenuItemsProps = {
  id: string;
  hide?: boolean;
} & NavBarItemProps;

export type NavBarDesktopProps = {
  menuItems: MenuItemsProps[];
} & Omit<StyledNavBarItemContainerProps, "theme">;

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({
  menuItems,
  gap,
}) => {
  return (
    <nav style={{ width: "100%" }}>
      <StyledNavBarItemContainer gap={gap}>
        {menuItems.map(
          ({ content, id, hide, to }) =>
            !hide && (
              <li>
                <NavBarItem key={id} content={content} id={id} to={to} />
              </li>
            )
        )}
      </StyledNavBarItemContainer>
    </nav>
  );
};
