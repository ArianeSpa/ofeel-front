import styled from "styled-components";
import { get } from "lodash";
import { ColorThemeKeys, MainTheme } from "@/theme";

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
    ![
      "size",
      "variant",
      "backgroundColor",
      "borderColor",
      "hoverBorderColor",
      "opacity",
      "hoverOpacity",
    ].includes(prop),
};
export type StyledButtonIconProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded" | "circle";
  backgroundColor?: ColorThemeKeys;
  borderColor?: ColorThemeKeys;
  hoverBorderColor?: ColorThemeKeys;
  opacity?: number;
  hoverOpacity?: number;
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
  background-color: ${({ backgroundColor, theme }: StyledButtonIconProps) =>
    backgroundColor ? get(theme?.color, backgroundColor) : "transparent"};
  border: ${({ theme, borderColor }: StyledButtonIconProps) =>
    borderColor ? `1px solid ${get(theme?.color, borderColor)}` : "none"};
  border-radius: ${({ variant }: StyledButtonIconProps) => getRadius(variant)};
  min-height: ${({ size }: StyledButtonIconProps) => getSize(size)};
  min-width: ${({ size }: StyledButtonIconProps) => getSize(size)};
  opacity: ${({ opacity }: StyledButtonIconProps) => opacity ?? 1};
  &:hover {
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
    border: ${({ theme, hoverBorderColor }: StyledButtonIconProps) =>
      hoverBorderColor
        ? `1px solid ${get(theme?.color, hoverBorderColor)}`
        : "inherit"};
    opacity: ${({ hoverOpacity }: StyledButtonIconProps) =>
      hoverOpacity ?? "inherit"};
  }
`;
