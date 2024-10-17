import styled from "styled-components";

import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["size", "width"].includes(prop),
};

export type StyledButtonProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  width?: string;
};

export const StyledButton = styled.button.withConfig(
  forwardConfig
)<StyledButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  width: ${({ width }: StyledButtonProps) => width};
  background-image: ${({ theme }: StyledButtonProps) =>
    `linear-gradient(to bottom, ${theme?.color.yellow.y1}, ${theme?.color.yellow.y2}, ${theme?.color.yellow.y3}, ${theme?.color.yellow.y4}, ${theme?.color.yellow.y5})`};
  color: ${({ theme }: StyledButtonProps) => theme?.color.grey.g2};

  &:hover {
    background-image: none;
    background-color: transparent;
    border: ${({ theme }: StyledButtonProps) =>
      `1px solid ${theme?.color.yellow.y4}`};
    color: ${({ theme }: StyledButtonProps) => theme?.color.yellow.y4};
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

  padding: ${({ size }: StyledButtonProps) => {
    switch (size) {
      case "small":
        return `4px`;
      default:
      case "medium":
        return `8px`;
      case "large":
        return `12px`;
    }
  }};
`;
