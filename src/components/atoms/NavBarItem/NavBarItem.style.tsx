import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

export type StyledNavBarItemProps = {
  theme?: MainTheme;
};

export const StyledNavBarItem = styled.a<StyledNavBarItemProps>`
  color: ${({ theme }: StyledNavBarItemProps) => theme?.color.common.white};
  font-size: 1.1em;
  text-transform: uppercase;
  display: block;
  text-decoration: none;
  &.active {
    color: ${({ theme }: StyledNavBarItemProps) => theme?.color.yellow.y4};
  }
`;
