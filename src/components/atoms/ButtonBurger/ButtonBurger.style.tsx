import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["open"].includes(prop),
};

type StyledButtonBurgerProps = {
  theme?: MainTheme;
  open?: boolean;
};
export const StyledButtonBurger = styled.button.withConfig(
  forwardConfig
)<StyledButtonBurgerProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  width: ${({ open }) => (open ? "36px" : "40px")};
  border: none;
  height: ${({ open }) => (open ? "36px" : "40px")};
  z-index: ${({ theme }) => theme?.zIndex.burgerButton};

  &:focus {
    outline: none;
  }

  &:hover > :first-child,
  &:hover > :nth-child(3) {
    background: ${({ theme }: StyledButtonBurgerProps) =>
      theme?.color.yellow.y4};
  }

  span {
    display: block;
    height: 6px;
    background: ${({ theme, open }: StyledButtonBurgerProps) =>
      open ? theme?.color?.grey?.g4 : theme?.color.yellow.y4};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "36px" : "40px")};
      height: ${({ open }) => (open ? "4px" : "6px")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      width: 40px;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "36px" : "40px")};
      height: ${({ open }) => (open ? "4px" : "6px")};
    }
  }
`;
