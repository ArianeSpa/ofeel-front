import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["open", "position", "width"].includes(prop),
};

export type StyledDrawerProps = {
  theme?: MainTheme;
  open: boolean;
  position?: "top" | "right" | "bottom" | "left";
  width?: string;
  height?: string;
};
export const StyledDrawer = styled.div.withConfig(
  forwardConfig
)<StyledDrawerProps>`
  --translate: ${({ position, open }: StyledDrawerProps) => {
    switch (position) {
      case "top":
        return open ? "translateY(0)" : "translateY(-100%)";
      case "right":
        return open ? "translateX(0)" : "translateX(100%)";
      case "left":
        return open ? "translateX(0)" : "translateX(-100%)";
      case "bottom":
        return open ? "translateY(0)" : "translateY(100%)";
      default:
        return "";
    }
  }};

  --height: ${({ position, height }: StyledDrawerProps) => {
    switch (position) {
      case "left":
      case "right":
        return "100vh";
      default:
        return height ?? "250px";
    }
  }};
  --width: ${({ position, width }: StyledDrawerProps) => {
    switch (position) {
      case "top":
      case "bottom":
        return "100%";
      default:
        return width ?? "250px";
    }
  }};

  --top: ${({ position }: StyledDrawerProps) => {
    switch (position) {
      case "top":
      case "right":
      case "left":
        return 0;
      default:
        return "unset";
    }
  }};
  --left: ${({ position }: StyledDrawerProps) => {
    switch (position) {
      case "bottom":
      case "top":
      case "left":
        return 0;
      default:
        return "unset";
    }
  }};
  --right: ${({ position }: StyledDrawerProps) =>
    position === "right" ? 0 : "unset"};
  --bottom: ${({ position }: StyledDrawerProps) =>
    position === "bottom" ? 0 : "unset"};

  height: var(--height);
  width: var(--width);

  position: absolute;
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);

  background: ${({ theme }: StyledDrawerProps) => theme?.color.background.bg1};

  transform: var(--translate);
  transition: transform 0.3s ease-in-out;
  z-index: ${({ theme }) => theme?.zIndex.burgerMenu};

  visibility: ${({ open }: StyledDrawerProps) =>
    !open ? "hidden" : "visible"};

  @media (max-width: 576px) {
    width: 100%;
  }
`;
