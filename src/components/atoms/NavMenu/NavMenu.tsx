import { ReactNode } from "react";
import { StyledOL, StyledOLProps } from "./NavMenu.style";

type NavMenuProps = {
  children?: ReactNode | ReactNode[];
} & StyledOLProps;
export const NavMenu: React.FC<NavMenuProps> = ({
  children,
  ...styledOLProps
}) => {
  return (
    <nav>
      <StyledOL {...styledOLProps}>{children}</StyledOL>
    </nav>
  );
};
