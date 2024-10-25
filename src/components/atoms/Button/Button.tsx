import React, { ReactNode } from "react";

import { StyledButton, StyledButtonProps } from "./Button.style";

export type ButtonProps = {
  children?: ReactNode | string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
} & Omit<StyledButtonProps, "theme">;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    children,
    size,
    width,
    type = "button",
    ...styledProps
  } = props;

  return (
    <StyledButton
      type={type}
      size={size}
      width={width}
      onClick={onClick}
      {...styledProps}
    >
      {children}
    </StyledButton>
  );
};

export { Button, type StyledButtonProps };
