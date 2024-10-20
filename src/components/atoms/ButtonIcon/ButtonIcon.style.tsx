import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const getSize = (size?: StyledButtonIconProps["size"]) => {
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

const getRadius = (variant?: StyledButtonIconProps["variant"]) => {
  switch (variant) {
    case "square":
      return "0";
    default:
    case "rounded":
      return "4px";
    case "circle":
      return "50%";
  }
};

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["size", "square", "rounded"].includes(prop),
};
export type StyledButtonIconProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded" | "circle";
  background?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const StyledButtonIcon = styled.button.withConfig(
  forwardConfig
)<StyledButtonIconProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px;
  background: ${({ background }: StyledButtonIconProps) =>
    background || "transparent"};
  border-radius: ${({ variant }: StyledButtonIconProps) => getRadius(variant)};
  height: ${({ size }: StyledButtonIconProps) => getSize(size)};
  width: ${({ size }: StyledButtonIconProps) => getSize(size)};
  &:hover {
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
  }
`;
