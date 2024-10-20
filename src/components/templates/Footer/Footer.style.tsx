import styled from "styled-components";

export const StyledCopyright = styled.p`
  display: block;
  margin: 0;
  font-style: italic;
  font-size: 12px;
  color: ${({ theme }) => theme?.color.background.bg2};
`;

export const instaBackground = `radial-gradient(
  circle farthest-corner at 28% 100%,
 #fcdf8f 0%,
  #fbd377 10%,
  #fa8e37 22%,
  #f73344 35%,
  transparent 65%
), linear-gradient(145deg, #3051f1 10%, #c92bb7 70%)`;
