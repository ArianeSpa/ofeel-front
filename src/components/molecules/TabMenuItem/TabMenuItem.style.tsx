import styled from "styled-components";

import { MainTheme } from "@/theme/theme";
import { GradientColor } from "@/theme/colors";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["isDesktop"].includes(prop),
};
export type StyledTabMenuItemProps = {
  theme?: MainTheme;
  isDesktop?: boolean;
};
export const StyledTabMenuItem = styled.a.withConfig(
  forwardConfig
)<StyledTabMenuItemProps>`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${({ isDesktop }: StyledTabMenuItemProps) =>
    isDesktop ? "row" : "column"};
  align-items: center;
  justify-content: center;
  box-shadow: ${({ isDesktop }: StyledTabMenuItemProps) =>
    isDesktop
      ? "inset -10px 0 10px -3px #00000075"
      : "inset 0 -10px 7px -3px #00000075"};
  background-color: transparent;
  background-size: cover;
  border-radius: ${({ isDesktop }: StyledTabMenuItemProps) =>
    isDesktop ? "0 6px 6px 0" : "0 0 6px 6px"};
  &.active {
    border-left: ${({ theme, isDesktop }: StyledTabMenuItemProps) =>
      isDesktop ? `1px solid ${theme?.color.grey.g3}` : "none"};
    border-top: ${({ theme, isDesktop }: StyledTabMenuItemProps) =>
      isDesktop ? "none" : `1px solid ${theme?.color.grey.g3}`};
    border-radius: ${({ isDesktop }: StyledTabMenuItemProps) =>
      isDesktop ? "6px 0 0 6px" : "6px 6px 0 0"};
    box-shadow: ${({ isDesktop }: StyledTabMenuItemProps) =>
      isDesktop
        ? "-15px 0px 10px 3px #00000075"
        : "0px -13px 12px 1px #00000075"};
  }
`;

const forwardBorderConfig = {
  shouldForwardProp: (prop: string) =>
    !["gradientColor", "isDesktop"].includes(prop),
};
type StyledBorderProps = {
  theme?: MainTheme;
  gradientColor: GradientColor;
  isDesktop?: boolean;
};
export const StyledBorder = styled.div.withConfig(
  forwardBorderConfig
)<StyledBorderProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ isDesktop }: StyledBorderProps) => (isDesktop ? "8px" : "100%")};
  height: ${({ isDesktop }: StyledBorderProps) => (isDesktop ? "100%" : "4px")};
  border-radius: 4px;
  background-image: ${({ theme, gradientColor }: StyledBorderProps) =>
    theme?.gradient[gradientColor]};
`;
