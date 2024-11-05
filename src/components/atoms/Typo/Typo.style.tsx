import styled from "styled-components";
import { get } from "lodash";
import { ColorThemeKeys, MainTheme } from "@/theme/theme";
import { getGutters, GetGuttersProps } from "@/theme/gutters";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["color", "fontSize", "fontStyle", "margin"].includes(prop),
};
type StyledTypoProps = {
  theme?: MainTheme;
  color?: ColorThemeKeys;
  fontSize?: number;
  fontStyle?: string;
  margin?: string;
} & GetGuttersProps;
export const StyleTypo = styled.p.withConfig(forwardConfig)<StyledTypoProps>`
  color: ${({ color, theme }: StyledTypoProps) =>
    color ? get(theme?.color, color) : "inherit"};
  font-style: ${({ fontStyle }: StyledTypoProps) => fontStyle ?? "none"};
  margin: 0;
  ${({ margin }: StyledTypoProps) => (margin ? `margin: ${margin};` : "")}
  font-size: ${({ fontSize }: StyledTypoProps) =>
    fontSize ? `${fontSize}px` : "14px"};
  ${getGutters}
`;
