// == Import : npm
import { ReactNode } from "react";

// == Import : local
import { StyledButtonIcon, StyledButtonIconProps } from "./ButtonIcon.style";

export type ButtonIconProps = {
  ariaLabel: string; // accessibility requirement
  icon: ReactNode;
  onClick?: () => void;
} & Omit<StyledButtonIconProps, "theme">;

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  ariaLabel,
  icon,
  size,
  onClick,
  ...styledProps
}) => {
  return (
    <StyledButtonIcon
      aria-label={ariaLabel}
      size={size}
      onClick={onClick}
      {...styledProps}
    >
      {icon}
    </StyledButtonIcon>
  );
};
