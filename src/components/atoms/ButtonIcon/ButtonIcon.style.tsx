import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const getSize = (size?: StyledButtonIconProps["size"]) => {
  switch (size) {
    case "small":
      return "26px";
    case "large":
      return "44px";
    case "medium":
    default:
      return "32px";
  }
};

const getRadius = (variant?: StyledButtonIconProps["variant"]) => {
  switch (variant) {
    case "square":
      return "0";
    case "circle":
      return "50%";
    case "rounded":
    default:
      return "4px";
  }
};

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["size", "variant", "background", "borderColor"].includes(prop),
};
export type StyledButtonIconProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded" | "circle";
  background?: string;
  borderColor?: string;
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
    background ?? "transparent"};
  border: ${({ borderColor }: StyledButtonIconProps) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  border-radius: ${({ variant }: StyledButtonIconProps) => getRadius(variant)};
  min-height: ${({ size }: StyledButtonIconProps) => getSize(size)};
  min-width: ${({ size }: StyledButtonIconProps) => getSize(size)};
  &:hover {
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
    border: ${({ borderColor }: StyledButtonIconProps) =>
      borderColor ? `1px solid ${borderColor}` : "none"};
  }
`;
