import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

export type StyledFlexProps = {
  theme?: MainTheme;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexGrow?: number;
  flexShrink?: number;
  gap?: number;
  justifyContent?: string;
  padding?: string | number;
  width?: string;
};

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    ![
      "alignItems",
      "flexDirection",
      "flexWrap",
      "flexGrow",
      "flexShrink",
      "gap",
      "justifyContent",
      "padding",
      "width",
    ].includes(prop),
};

export const StyledFlex = styled.div.withConfig(forwardConfig)<StyledFlexProps>`
  display: flex;
  align-items: ${({ alignItems }: StyledFlexProps) => alignItems || "center"};
  justify-content: ${({ justifyContent }: StyledFlexProps) =>
    justifyContent || "center"};
  flex-direction: ${({ flexDirection }: StyledFlexProps) =>
    flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${({ gap }: StyledFlexProps) => `${gap}px`};
  width: ${({ width }: StyledFlexProps) => width};
  padding: ${({ padding }: StyledFlexProps) => padding || 0};

  ${({ flexGrow }: StyledFlexProps) =>
    flexGrow ? `flex-grow: ${flexGrow};` : ""}
  ${({ flexShrink }: StyledFlexProps) =>
    flexShrink ? `flex-shrink: ${flexShrink};` : ""}
`;
