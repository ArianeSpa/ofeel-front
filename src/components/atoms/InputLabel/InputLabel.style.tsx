import { HTMLAttributes } from "react";
import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["fontSize", "required", "error"].includes(prop),
};
export type StyledInputLabelProps = {
  theme?: MainTheme;
  fontSize?: number;
  required?: boolean;
  error?: boolean;
} & HTMLAttributes<HTMLLabelElement>;
export const StyledInputLabel = styled.label.withConfig(
  forwardConfig
)<StyledInputLabelProps>`
  display: block;
  color: ${({ theme, error }: StyledInputLabelProps) =>
    error ? theme?.color.pink.p5 : theme?.color.grey.g5};
  font-size: ${({ fontSize }: StyledInputLabelProps) =>
    fontSize ? `${fontSize}px` : "inherit"};
  font-weight: 600;
  &::after {
    content: ${({ required }: StyledInputLabelProps) => required && `'*'`};
    color: ${({ theme }: StyledInputLabelProps) => theme?.color.pink.p5};
    vertical-align: top;
    display: inmine-block;
    margin-left: 3px;
  }
`;
