import styled from "styled-components";
import { MainTheme } from "./theme/theme";
import { Flex } from "./components";

type StyledAppProps = {
  theme?: MainTheme;
};
export const StyledApp = styled(Flex)<StyledAppProps>`
  background-image: ${({ theme }: StyledAppProps) => theme?.gradient.body};
  height: 100vh;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

export const StyledMain = styled.main<StyledAppProps>`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
