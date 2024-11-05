import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

const getSize = (size?: StyledLinkIconProps["size"]) => {
  switch (size) {
    case "small":
      return "26px";
    case "large":
      return "44px";
    case "medium":
    default:
      return "32px";
  }
};

const forwardConfig = {
  shouldForwardProp: (prop: string) =>
    !["size", "variant", "background", "borderColor"].includes(prop),
};
export type StyledLinkIconProps = {
  theme?: MainTheme;
  size?: "small" | "medium" | "large";
  variant?: "square" | "rounded" | "circle";
  background?: string;
  borderColor?: string;
} & React.LinkHTMLAttributes<HTMLLinkElement>;
export const StyledLinkIcon = styled.a.withConfig(
  forwardConfig
)<StyledLinkIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px;
  background: ${({ background }: StyledLinkIconProps) =>
    background ?? "transparent"};
  border: ${({ borderColor }: StyledLinkIconProps) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  border-radius: 50%;
  height: ${({ size }: StyledLinkIconProps) => getSize(size)};
  width: ${({ size }: StyledLinkIconProps) => getSize(size)};
  &:hover {
    box-shadow: 10px 10px 22px -12px rgba(0, 0, 0, 0.75);
    border: ${({ borderColor }: StyledLinkIconProps) =>
      borderColor ? `1px solid ${borderColor}` : "none"};
  }
`;
