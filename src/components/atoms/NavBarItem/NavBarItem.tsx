import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBarItem } from "./NavBarItem.style";

export type NavBarItemProps = {
  content: ReactNode;
  id: string;
  to: string;
};

export const NavBarItem: React.FC<NavBarItemProps> = ({ content, id, to }) => {
  return (
    <StyledNavBarItem as={NavLink} id={id} to={to}>
      {content}
    </StyledNavBarItem>
  );
};
