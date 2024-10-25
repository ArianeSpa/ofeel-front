import styled from "styled-components";
import { MainTheme } from "./theme/theme";
import { Flex } from "./components";

type StyledAppProps = {
  theme?: MainTheme;
};
export const StyledApp = styled(Flex)<StyledAppProps>`
  background-image: ${({ theme }: StyledAppProps) => theme?.gradient.body};
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

export const StyledMain = styled.main<StyledAppProps>`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
