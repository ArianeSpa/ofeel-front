import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledCustomLinkProps = {
  theme?: MainTheme;
  fontSize?: number;
};
export const StyledCustomLink = styled.span<StyledCustomLinkProps>`
  color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g3};
  font-size: ${({ fontSize }: StyledCustomLinkProps) => `${fontSize || 12}px`};
  text-decoration: underline;
  &:hover {
    color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g5};
  }
`;
