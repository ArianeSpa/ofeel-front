import styled from "styled-components";

import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["gap"].includes(prop),
};
export type StyledNavBarContainerProps = {
  theme?: MainTheme;
  gap?: number;
};
export const StyledNavBarContainer = styled.ol.withConfig(
  forwardConfig
)<StyledNavBarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 16px;
  width: 100%;
  gap: ${({ gap }: StyledNavBarContainerProps) => `${gap}px`};
  list-style-type: none;
`;
