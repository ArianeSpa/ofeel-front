import { HTMLAttributes } from "react";
import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["checked"].includes(prop),
};
export type StyledCheckboxProps = {
  theme?: MainTheme;
  checked?: boolean;
} & HTMLAttributes<HTMLInputElement>;
export const StyledCheckbox = styled.button.withConfig(
  forwardConfig
)<StyledCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  background-color: ${({ theme }: StyledCheckboxProps) => theme?.color.grey.g5};
  border: ${({ theme, checked }: StyledCheckboxProps) =>
    `2px solid ${checked ? theme?.color.blue.b1 : theme?.color.grey.g4}`};
`;
