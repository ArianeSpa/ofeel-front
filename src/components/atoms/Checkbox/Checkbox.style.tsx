import { HTMLAttributes } from "react";
import styled from "styled-components";
import { MainTheme } from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["checked"].includes(prop),
};
export type StyledCheckboxProps = {
  theme?: MainTheme;
  checked?: boolean;
} & HTMLAttributes<HTMLInputElement>;
export const StyledCheckbox = styled.input.withConfig(
  forwardConfig
)<StyledCheckboxProps>`
  padding: 1px;
  height: 18px;
  width: 18px;

  border-radius: 2px;
  background-color: ${({ theme }: StyledCheckboxProps) => theme?.color.grey.g5};
  border: ${({ theme, checked }: StyledCheckboxProps) =>
    `2px solid ${checked ? theme?.color.blue.b1 : theme?.color.grey.g4}`};
  cursor: pointer;
  appearance: none;
  &:hover {
    box-shadow: 0px 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  margin: 0;
  transform: translateY(-0.075em);
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &[type="checkbox"]::before {
    content: "";
    height: 100%;
    width: 100%;

    transform: ${({ checked }: StyledCheckboxProps) =>
      `scale(${checked ? 1 : 0})`};
    transition: 120ms transform ease-in-out;
    box-shadow: ${({ theme }: StyledCheckboxProps) =>
      `inset 1em 1em ${theme?.color.blue.b1}`};
    transform-origin: bottom left;
    clip-path: polygon(15% 28%, 0% 45%, 35% 100%, 100% 20%, 85% 0%, 36% 60%);
  }

  &[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
