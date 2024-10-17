import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

export type StyledNavMenuItemProps = {
  theme?: MainTheme;
} & React.LiHTMLAttributes<HTMLElement>;
export const StyledNavMenuItem = styled.li<StyledNavMenuItemProps>`
  color: ${({ theme }: StyledNavMenuItemProps) => theme?.color.grey.g5};
  font-size: 20px;
  font-weight: 600;
  font-family: ${({ theme }: StyledNavMenuItemProps) =>
    theme?.font.family.livvic};
  letter-spacing: 6px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
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
    color: ${({ theme }: StyledNavMenuItemProps) => theme?.color.grey.g4};
  }
  &.active {
    color: ${({ theme }: StyledNavMenuItemProps) => theme?.color.yellow.y4};
  }
`;
