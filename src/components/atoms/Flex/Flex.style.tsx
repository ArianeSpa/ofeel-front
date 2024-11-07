import styled from "styled-components";
import { MainTheme } from "@/theme/theme";
import { getGutters, GetGuttersProps } from "@/theme/gutters";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    ![
      "alignItems",
      "backgroundColor",
      "flexDirection",
      "flexWrap",
      "flexGrow",
      "flexShrink",
      "gap",
      "justifyContent",
      "width",
    ].includes(prop),
};
export type StyledFlexProps = {
  theme?: MainTheme;
  alignItems?: string;
  backgroundColor?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexGrow?: number;
  flexShrink?: number;
  gap?: number;
  justifyContent?: string;
  width?: string;
} & GetGuttersProps;
export const StyledFlex = styled.div.withConfig(forwardConfig)<StyledFlexProps>`
  display: flex;
  align-items: ${({ alignItems }: StyledFlexProps) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }: StyledFlexProps) =>
    justifyContent ?? "center"};
  flex-direction: ${({ flexDirection }: StyledFlexProps) =>
    flexDirection ?? "column"};
  flex-wrap: ${({ flexWrap }: StyledFlexProps) => flexWrap};
  gap: ${({ gap }: StyledFlexProps) => `${gap ?? 0}px`};
  width: ${({ width }: StyledFlexProps) => width};
  background-color: ${({ backgroundColor }: StyledFlexProps) =>
    backgroundColor ?? "inherit"};
  box-sizing: border-box;

  ${({ flexGrow }: StyledFlexProps) =>
    flexGrow ? `flex-grow: ${flexGrow};` : ""}
  ${({ flexShrink }: StyledFlexProps) =>
    flexShrink ? `flex-shrink: ${flexShrink};` : ""}
  ${getGutters}
`;
