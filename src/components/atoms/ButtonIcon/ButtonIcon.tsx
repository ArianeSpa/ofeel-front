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
  return (
    <StyledButtonIcon size={size} onClick={onClick} {...styledProps}>
      {icon}
    </StyledButtonIcon>
  );
};
