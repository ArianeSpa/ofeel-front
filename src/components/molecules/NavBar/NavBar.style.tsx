import styled from "styled-components";

import { MainTheme } from "@/theme/theme";

export type StyledNavBarContainerProps = {
  theme?: MainTheme;
  gap?: number;
};
export const StyledNavBarContainer = styled.ol<StyledNavBarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 16px;
  width: 100%;
  font-size: 16px;
  font-family: ${({ theme }: StyledNavBarContainerProps) =>
    theme?.font.family.livvic};
  gap: ${({ gap }: StyledNavBarContainerProps) => `${gap}px`};
  list-style-type: none;
`;
