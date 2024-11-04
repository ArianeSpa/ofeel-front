import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardSpanConfig = {
  shouldForwardProp: (prop: string) =>
    !["clickableIcon", "iconPosition", "hasIcon", "error", "disabled"].includes(
      prop
    ),
};
export type StyledInputBaseProps = {
  theme?: MainTheme;
  clickableIcon?: boolean;
  iconPosition?: "left" | "right";
  hasIcon?: boolean;
  error?: boolean;
  disabled?: boolean;
} & HtmlHTMLAttributes<HTMLInputElement>;
export const StyledInputBase = styled.span.withConfig(
  forwardSpanConfig
)<StyledInputBaseProps>`
  display: inline-flex;
  position: relative;
  flex-direction: ${({ iconPosition }: StyledInputBaseProps) =>
    iconPosition === "left" ? "row" : "row-reverse"};
  width: 100%;
  opacity: ${({ disabled }: StyledInputBaseProps) => (disabled ? 0.75 : 1)};

  i {
    position: absolute;
    cursor: ${({ clickableIcon, disabled }: StyledInputBaseProps) =>
      clickableIcon && !disabled ? "pointer" : undefined};
    height: 100%;
    text-align: center;
    width: 35px;
    right: ${({ iconPosition }: StyledInputBaseProps) =>
      iconPosition === "right" ? 0 : undefined};
    left: ${({ iconPosition }: StyledInputBaseProps) =>
      iconPosition === "left" ? 0 : undefined};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme, disabled }: StyledInputBaseProps) =>
      disabled ? theme?.color.grey.g4 : theme?.color.grey.g1};
    opacity: 0.5;
    &:hover {
      opacity: ${({ clickableIcon, disabled }: StyledInputBaseProps) =>
        clickableIcon && !disabled ? 1 : 0.5};
    }
  }

  // Force icon opacity when input is focused
  i:has(+ input:focus) {
    opacity: 1;
  }

  input {
    display: block;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    height: 35px;
    width: 100%;
    font-size: 14px;

    padding-right: ${({ hasIcon, iconPosition }: StyledInputBaseProps) =>
      hasIcon && iconPosition === "right" ? "35px" : "10px"};
    padding-left: ${({ hasIcon, iconPosition }: StyledInputBaseProps) =>
      hasIcon && iconPosition === "left" ? "35px" : "10px"};
    color: ${({ theme, disabled }: StyledInputBaseProps) =>
      disabled ? theme?.color.grey.g4 : theme?.color.grey.g1};
    background-color: ${({ theme }: StyledInputBaseProps) =>
      theme?.color.grey.g5};
    box-shadow: ${({ theme, error }: StyledInputBaseProps) =>
      error ? `inset 0 0 1px 2px ${theme?.color.pink.p2}` : "none"};

    &:focus-visible {
      outline: none;
      box-shadow: ${({ theme, error }: StyledInputBaseProps) =>
        `inset 0 0 1px 2px ${
          error ? theme?.color.pink.p5 : theme?.color.blue.b5
        }`};
    }
    &[type="password"] {
      padding-top: 4px;
    }
  }
`;
