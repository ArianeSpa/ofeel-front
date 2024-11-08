import styled from "styled-components";
import { MainTheme } from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["error"].includes(prop),
};
export type StyledInputDescriptionProps = {
  theme?: MainTheme;
  error?: boolean;
};
export const StyledInputDescription = styled.span.withConfig(
  forwardConfig
)<StyledInputDescriptionProps>`
  display: block;
  color: ${({ theme, error }: StyledInputDescriptionProps) =>
    error ? theme?.color.pink.p5 : theme?.color.grey.g5};
  width: 100%;
  font-size: 0.85em;
  font-style: italic;
`;
