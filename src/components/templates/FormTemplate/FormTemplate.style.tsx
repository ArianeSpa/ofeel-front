import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

export type StyledFormTemplateProps = {
  theme?: MainTheme;
  width?: string;
};
export const StyledFormTemplate = styled.form<StyledFormTemplateProps>`
  background-image: ${({ theme }: StyledFormTemplateProps) =>
    theme?.gradient.dashboard};
  max-width: ${({ width }: StyledFormTemplateProps) => width || "350px"};
  margin: 20px auto;
  box-sizing: border-box;
  padding: 20px 30px;
`;
