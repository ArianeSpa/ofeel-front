import styled from "styled-components";

import { MainTheme } from "@/theme/theme";
import { getGutters, GetGuttersProps } from "@/theme/gutters";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["alignItems", "flexDirection", "gap", "justifyContent", "width"].includes(
      prop
    ),
};
export type StyledOLProps = {
  theme?: MainTheme;
  alignItems?: string;
  flexDirection?: string;
  gap?: number;
  justifyContent?: string;
  width?: string;
} & GetGuttersProps;
export const StyledOL = styled.ol.withConfig(forwardConfig)<StyledOLProps>`
  display: flex;
  align-items: ${({ alignItems }: StyledOLProps) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }: StyledOLProps) =>
    justifyContent ?? "start"};
  flex-direction: ${({ flexDirection }: StyledOLProps) =>
    flexDirection ?? "row"};
  gap: ${({ gap }: StyledOLProps) => `${gap ?? 0}px`};
  width: ${({ width }: StyledOLProps) => width ?? "100%"};

  padding: 0 16px;
  list-style-type: none;
  ${getGutters}
`;
