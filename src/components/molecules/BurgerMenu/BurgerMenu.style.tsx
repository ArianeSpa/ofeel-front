import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["open"].includes(prop),
};

export type StyledBurgerMenuProps = {
  theme?: MainTheme;
  open?: boolean;
};
export const StyledBurgerMenu = styled.nav.withConfig(
  forwardConfig
)<StyledBurgerMenuProps>`
  position: absolute;
  top: 0;
  right: 0;

  background: ${({ theme }: StyledBurgerMenuProps) =>
    theme?.color.background.bg1};
  display: flex;
  flex-direction: column;
  gap: 70px;
  height: 100vh;
  justify-content: center;
  padding-right: 30px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: ${({ theme }) => theme?.zIndex.burgerMenu};
  width: 225px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
