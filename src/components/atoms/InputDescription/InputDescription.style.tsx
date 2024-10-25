import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type GetColorProps = {
  status?: StyledInputDescriptionProps["status"];
  theme?: MainTheme;
};
const getColor = ({ status, theme }: GetColorProps) => {
  switch (status) {
    case "error":
      return theme?.color.pink.p5;
    case "info":
      return theme?.color.blue.b5;
    default:
      return theme?.color.grey.g5;
  }
};
const forwardConfig = {
  shouldForwardProp: (prop: string) => !["status"].includes(prop),
};
export type StyledInputDescriptionProps = {
  theme?: MainTheme;
  status?: "error" | "info";
};
export const StyledInputDescription = styled.span.withConfig(
  forwardConfig
)<StyledInputDescriptionProps>`
  color: ${({ status, theme }: StyledInputDescriptionProps) =>
    getColor({ status, theme })};
`;
