// === Import: npm
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

// === Import: local
import { StyledNavMenuItem } from "./NavMenuItem.style";

type NavMenuItemProps = {
  children: ReactNode | string;
  id: string;
  to: string;
};

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  children,
  id,
  to,
}) => {
  return (
    <StyledNavMenuItem as={NavLink} id={id} to={to}>
      {children}
    </StyledNavMenuItem>
  );
};
