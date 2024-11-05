// == Import : npm
import { ReactNode } from "react";

// == Import : local
import { StyledButtonIcon, StyledButtonIconProps } from "./ButtonIcon.style";

export type ButtonIconProps = {
  ariaLabel?: string;
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
  if (!ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn(
      "According to accessibility rules, FormInput should receive at least a label or an aria-label"
    );
  }
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
