import styled from "styled-components";

import { MainTheme } from "@/theme/theme";

const getSize = (size?: StyledButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "26px";
    default:
    case "medium":
      return "32px";
    case "large":
      return "44px";
  }
};

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["size", "width"].includes(prop),
};

export type StyledButtonProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  width?: string;
  disabled?: boolean;
};

export const StyledButton = styled.button.withConfig(
  forwardConfig
)<StyledButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  width: ${({ width }: StyledButtonProps) => width || "auto"};
  background-image: ${({ theme }: StyledButtonProps) => theme?.gradient.yellow};
  color: ${({ theme }: StyledButtonProps) => theme?.color.grey.g2};
  height: ${({ size }: StyledButtonProps) => getSize(size)};
  opacity: ${({ disabled }: StyledButtonProps) => (disabled ? 0.7 : 1)};
  &:hover {
    ${({ disabled, theme }: StyledButtonProps) =>
      !disabled &&
      `
        background-image: none;
        background-color: transparent;
        border: 1px solid ${theme?.color.yellow.y4};
        color: ${theme?.color.yellow.y4};
    `}
  }

  ${({ theme, size }: StyledButtonProps) => {
    switch (size) {
      case "small":
        return theme?.font.button.small;
      default:
      case "medium":
        return theme?.font.button.medium;
      case "large":
        return theme?.font.button.large;
    }
  }};
`;
