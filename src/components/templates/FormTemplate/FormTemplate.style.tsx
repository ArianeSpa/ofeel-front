import styled from "styled-components";
import { MainTheme, getGutters, GetGuttersProps } from "@/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["checked"].includes(prop),
};
export type StyledFormTemplateProps = {
  theme?: MainTheme;
  width?: string;
} & GetGuttersProps;
export const StyledFormTemplate = styled.form.withConfig(
  forwardConfig
)<StyledFormTemplateProps>`
  background-image: ${({ theme }: StyledFormTemplateProps) =>
    theme?.gradient.dashboard};
  box-sizing: border-box;
  max-width: ${({ width }: StyledFormTemplateProps) => width ?? "350px"};
  margin: 20px auto;
  padding: 20px 30px;
  ${getGutters}
`;
