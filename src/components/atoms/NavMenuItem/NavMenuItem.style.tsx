import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MainTheme } from "@/theme/theme";

export type StyledNavLinkProps = {
  theme?: MainTheme;
};
export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  color: ${({ theme }: StyledNavLinkProps) => theme?.color.grey.g5};
  font-size: 20px;
  font-weight: 600;
  font-family: ${({ theme }: StyledNavLinkProps) => theme?.font.family.livvic};
  letter-spacing: 6px;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  transition: color 0.3s linear;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: right;
  }

  @media (max-width: 576px) {
    font-size: 24px;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }: StyledNavLinkProps) => theme?.color.grey.g4};
  }
  &.active {
    color: ${({ theme }: StyledNavLinkProps) => theme?.color.yellow.y4};
  }
`;
