import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: ${({ theme }) => theme?.color.grey.g1};
  z-index: ${({ theme }) => theme?.zIndex.backdrop};
`;
