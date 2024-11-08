import styled from "styled-components";
import { MainTheme } from "@/theme";

type StyledBackdropProps = {
  theme?: MainTheme;
};
export const StyledBackdrop = styled.div<StyledBackdropProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: ${({ theme }) => theme?.color.grey.g1};
  z-index: ${({ theme }) => theme?.zIndex.backdrop};
`;
