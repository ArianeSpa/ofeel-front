import styled from "styled-components";
import { get } from "lodash";
import { ColorThemeKeys, MainTheme } from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["gradientId", "color", "type"].includes(prop),
};
export type StyledSVGGradientIconProps = {
  theme?: MainTheme;
  gradientId: string;
  color?: ColorThemeKeys;
  type?: "gradient" | "color";
};
export const StyledSVGGradientIcon = styled.span.withConfig(
  forwardConfig
)<StyledSVGGradientIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > svg {
    color: black;
    fill: ${({
      gradientId,
      color,
      type,
      theme,
    }: StyledSVGGradientIconProps) => {
      if (type === "gradient") return `url(#${gradientId})`;
      return color ? get(theme?.color, color) : "inherit";
    }};
  }
`;
