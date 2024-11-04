import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledCustomLinkProps = {
  theme?: MainTheme;
};
export const StyledCustomLink = styled.span<StyledCustomLinkProps>`
  color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g3};
  font-size: 14px;
  &:hover {
    color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g5};
  }
`;
