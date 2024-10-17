// === Import: npm
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

// === Import: local
import { StyledNavMenuItem, StyledNavMenuItemProps } from "./NavMenuItem.style";

type NavMenuItemProps = {
  children: ReactNode | string;
  to: string;
} & Omit<StyledNavMenuItemProps, "theme">;

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  children,
  id,
  to,
  ...styledProps
}) => {
  return (
    <StyledNavMenuItem as={NavLink} to={to} {...styledProps}>
      {children}
    </StyledNavMenuItem>
  );
};
