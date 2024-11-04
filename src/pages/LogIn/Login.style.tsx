import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledFormProps = {
  theme?: MainTheme;
};
export const StyledForm = styled.form<StyledFormProps>`
  background-image: ${({ theme }: StyledFormProps) =>
    theme?.gradient.dashboard};
  width: 350px;
  margin: 20px auto;
  box-sizing: border-box;
`;
