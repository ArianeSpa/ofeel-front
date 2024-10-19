import { ReactNode } from "react";
import { NavMenuItem } from "../../atoms";
import {
  StyledNavBarContainer,
  StyledNavBarContainerProps,
} from "./NavBar.style";

export type MenuItemsProps = {
  id: string;
  hide?: boolean;
  content: ReactNode | string;
  to: string;
};

export type NavBarProps = {
  menuItems: MenuItemsProps[];
} & Omit<StyledNavBarContainerProps, "theme">;

export const NavBar: React.FC<NavBarProps> = ({ menuItems, gap }) => {
  return (
    <nav style={{ width: "100%" }}>
      <StyledNavBarContainer gap={gap}>
        {menuItems.map(
          ({ content, id, hide, to }) =>
            !hide && (
              <NavMenuItem key={id} id={id} to={to}>
                {content}
              </NavMenuItem>
            )
        )}
      </StyledNavBarContainer>
    </nav>
  );
};
