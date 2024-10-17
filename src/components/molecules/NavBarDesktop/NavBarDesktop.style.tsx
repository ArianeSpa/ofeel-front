import styled from "styled-components";

import { MainTheme } from "@/theme/theme";

export type StyledNavBarItemContainerProps = {
  theme?: MainTheme;
  gap?: number;
};
export const StyledNavBarItemContainer = styled.ol<StyledNavBarItemContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 16px;
  width: 100%;
  font-size: 16px;
  font-family: ${({ theme }: StyledNavBarItemContainerProps) =>
    theme?.font.family.livvic};
  gap: ${({ gap }: StyledNavBarItemContainerProps) => `${gap}px`};
  list-style-type: none;
`;
