import styled from "styled-components";
import { MainTheme } from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["fontSize"].includes(prop),
};
type StyledCustomLinkProps = {
  theme?: MainTheme;
  fontSize?: number;
};
export const StyledCustomLink = styled.span.withConfig(
  forwardConfig
)<StyledCustomLinkProps>`
  color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g3};
  font-size: ${({ fontSize }: StyledCustomLinkProps) => `${fontSize ?? 12}px`};
  text-decoration: underline;
  &:hover {
    color: ${({ theme }: StyledCustomLinkProps) => theme?.color.green.g5};
  }
`;
