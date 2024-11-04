// == Import : npm
import { ReactNode } from "react";

// == Import : local
import { StyledInputBaseProps, StyledInputBase } from "./InputBase.style";

export type InputBaseProps = {
  icon?: ReactNode;
  placeholder?: string;
  value?: any;
  type?: string;
  onIconClick?: () => void;
} & Omit<StyledInputBaseProps, "theme">;
export const InputBase: React.FC<InputBaseProps> = ({
  disabled,
  error,
  icon,
  iconPosition = "left",
  placeholder,
  onIconClick,
  ...props
}) => {
  const handleOnIconClick = () => {
    if (!disabled) {
      onIconClick && onIconClick();
    }
  };
  return (
    <StyledInputBase
      hasIcon={!!icon}
      iconPosition={iconPosition}
      error={error}
      disabled={disabled}
      clickableIcon={!!onIconClick}
    >
      {icon && (
        <i aria-hidden onClick={handleOnIconClick}>
          {icon}
        </i>
      )}
      <input disabled={disabled} placeholder={placeholder} {...props} />
    </StyledInputBase>
  );
};
