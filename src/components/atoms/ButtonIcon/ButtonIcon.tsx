// == Import : npm
import { ReactNode } from "react";

// == Import : local
import { StyledButtonIcon, StyledButtonIconProps } from "./ButtonIcon.style";

export type ButtonIconProps = {
  icon: ReactNode;
  onClick?: () => void;
} & Omit<StyledButtonIconProps, "theme">;

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  size,
  onClick,
  ...styledProps
}) => {
  if (!styledProps["aria-label"] && process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.warn(
      "According to accessibility rules, ButtonIcon should receive an aria-label"
    );
  }
  return (
    <StyledButtonIcon size={size} onClick={onClick} {...styledProps}>
      {icon}
    </StyledButtonIcon>
  );
};
