import styled from "styled-components";
import { get } from "lodash";
import { ColorThemeKeys, GradienthemeKeys, MainTheme } from "@/theme";

const getSize = (size?: StyledLinkIconProps["size"]) => {
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

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    ![
      "size",
      "variant",
      "backgroundColor",
      "backgroundImage",
      "borderColor",
    ].includes(prop),
};
export type StyledLinkIconProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded" | "circle";
  backgroundColor?: ColorThemeKeys;
  backgroundImage?: GradienthemeKeys;
  borderColor?: ColorThemeKeys;
} & React.LinkHTMLAttributes<HTMLLinkElement>;
export const StyledLinkIcon = styled.a.withConfig(
  forwardConfig
)<StyledLinkIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px;
  background-color: ${({ backgroundColor, theme }: StyledLinkIconProps) =>
    backgroundColor ? get(theme?.color, backgroundColor) : "transparent"};

  ${({ backgroundImage, theme }: StyledLinkIconProps) =>
    backgroundImage &&
    `background-image: ${get(theme?.gradient, backgroundImage)}`};

  border: ${({ theme, borderColor }: StyledLinkIconProps) =>
    borderColor ? `1px solid ${get(theme?.color, borderColor)}` : "none"};

  border-radius: 50%;
  height: ${({ size }: StyledLinkIconProps) => getSize(size)};
  width: ${({ size }: StyledLinkIconProps) => getSize(size)};
  &:hover {
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
  }
`;
