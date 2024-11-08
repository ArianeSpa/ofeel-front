import styled from "styled-components";
import { HTMLAttributes } from "react";
import { get } from "lodash";
import {
  ColorThemeKeys,
  MainTheme,
  getGutters,
  GetGuttersProps,
  GradienthemeKeys,
} from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    ![
      "alignItems",
      "backgroundColor",
      "backgroundImage",
      "flexDirection",
      "flexWrap",
      "flexGrow",
      "flexShrink",
      "gap",
      "height",
      "justifyContent",
      "width",
    ].includes(prop),
};
export type StyledFlexProps = {
  theme?: MainTheme;
  alignItems?: string;
  backgroundColor?: ColorThemeKeys;
  backgroundImage?: GradienthemeKeys;
  flexDirection?: string;
  flexWrap?: string;
  flexGrow?: number;
  flexShrink?: number;
  gap?: number;
  height?: string;
  justifyContent?: string;
  width?: string;
} & GetGuttersProps &
  HTMLAttributes<HTMLDivElement>;
export const StyledFlex = styled.div.withConfig(forwardConfig)<StyledFlexProps>`
  overflow: hidden;
  display: flex;
  align-items: ${({ alignItems }: StyledFlexProps) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }: StyledFlexProps) =>
    justifyContent ?? "center"};
  flex-direction: ${({ flexDirection }: StyledFlexProps) =>
    flexDirection ?? "column"};
  flex-wrap: ${({ flexWrap }: StyledFlexProps) => flexWrap};
  gap: ${({ gap }: StyledFlexProps) => `${gap ?? 0}px`};
  ${({ width }: StyledFlexProps) => width && `width: ${width}`};
  ${({ height }: StyledFlexProps) => height && `height: ${height}`};

  background-color: ${({ backgroundColor, theme }: StyledFlexProps) =>
    backgroundColor ? get(theme?.color, backgroundColor) : "inherit"};
  ${({ backgroundImage, theme }: StyledFlexProps) =>
    backgroundImage &&
    `background-image: ${get(theme?.gradient, backgroundImage)}`};
  box-sizing: border-box;

  ${({ flexGrow }: StyledFlexProps) =>
    flexGrow ? `flex-grow: ${flexGrow};` : ""}
  ${({ flexShrink }: StyledFlexProps) =>
    flexShrink ? `flex-shrink: ${flexShrink};` : ""}
  ${getGutters}
`;
