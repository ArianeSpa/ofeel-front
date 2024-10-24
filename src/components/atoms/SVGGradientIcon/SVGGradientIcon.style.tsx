import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["gradientId", "isActive"].includes(prop),
};
export type StyledSVGGradientIconProps = {
  theme?: MainTheme;
  gradientId: string;
  color?: string;
  type?: "gradient" | "color";
};
export const StyledSVGGradientIcon = styled.span.withConfig(
  forwardConfig
)<StyledSVGGradientIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > svg {
    color: black;
    fill: ${({ gradientId, color, type }: StyledSVGGradientIconProps) =>
      type === "gradient" ? `url(#${gradientId})` : color};
  }
`;
