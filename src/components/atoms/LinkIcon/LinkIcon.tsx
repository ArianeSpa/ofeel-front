// == Import : npm
import { ReactNode } from "react";

// == Import : local
import { Link } from "react-router-dom";
import { StyledLinkIcon, StyledLinkIconProps } from "./LinkIcon.style";

export type LinkIconProps = {
  icon: ReactNode;
  to: string;
} & Omit<StyledLinkIconProps, "theme">;

export const LinkIcon: React.FC<LinkIconProps> = ({
  icon,
  size,
  to,
  ...styledProps
}) => {
  if (!styledProps["aria-label"] && process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.warn(
      "According to accessibility rules, LinkIcon should receive an aria-label"
    );
  }
  return (
    <StyledLinkIcon
      as={Link}
      to={to}
      size={size}
      target="_blank"
      {...styledProps}
    >
      {icon}
    </StyledLinkIcon>
  );
};
