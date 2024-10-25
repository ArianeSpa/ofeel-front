import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

export type StyledInputBaseProps = {
  theme?: MainTheme;
  error?: boolean;
};

export const StyledInputBase = styled.input<StyledInputBaseProps>`
  display: block;
  background-color: ${({ theme }: StyledInputBaseProps) =>
    theme?.color.grey.g5};
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-shadow: ${({ theme, error }: StyledInputBaseProps) =>
    error ? `inset 0 0 1px 2px ${theme?.color.pink.p2}` : "none"};
  &:focus-visible {
    outline: none;
    box-shadow: ${({ theme, error }: StyledInputBaseProps) =>
      `inset 0 0 1px 2px ${
        error ? theme?.color.pink.p5 : theme?.color.blue.b5
      }`};
  }
`;
