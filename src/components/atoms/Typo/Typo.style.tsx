import styled from "styled-components";
import { get } from "lodash";
import { ColorThemeKeys, MainTheme } from "@/theme/theme";

type StyledTypoProps = {
  theme?: MainTheme;
  color?: ColorThemeKeys;
  fontSize?: number;
  fontStyle?: string;
  margin?: string;
};
export const StyleTypo = styled.p<StyledTypoProps>`
  color: ${({ color, theme }: StyledTypoProps) =>
    color ? get(theme?.color, color) : "inherit"};
  font-style: ${({ fontStyle }: StyledTypoProps) => fontStyle || "none"};
  margin: 0;
  ${({ margin }: StyledTypoProps) => (margin ? `margin: ${margin};` : "")}
  font-size: ${({ fontSize }: StyledTypoProps) =>
    fontSize ? `${fontSize}px` : "14px"};
`;
