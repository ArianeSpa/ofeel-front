// === Import: npm
import { ReactNode } from "react";
import { NavLinkProps } from "react-router-dom";

// === Import: local
import { StyledNavLink } from "./NavMenuItem.style";

type NavMenuItemProps = {
  children: ReactNode | string;
  to: string;
} & NavLinkProps;

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  children,
  to,
  ...styledProps
}) => {
  return (
    <li>
      <StyledNavLink to={to} {...styledProps}>
        {children}
      </StyledNavLink>
    </li>
  );
};
