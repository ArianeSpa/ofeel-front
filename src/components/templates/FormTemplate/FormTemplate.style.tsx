import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledFormTemplateProps = {
  theme?: MainTheme;
};
export const StyledFormTemplate = styled.form<StyledFormTemplateProps>`
  background-image: ${({ theme }: StyledFormTemplateProps) =>
    theme?.gradient.dashboard};
  width: 350px;
  margin: 20px auto;
  box-sizing: border-box;
  padding: 20px 30px;
`;
