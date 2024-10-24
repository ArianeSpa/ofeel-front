import styled from "styled-components";
import { Flex, FlexProps } from "@/components";

export const StyledDashboard = styled(Flex)`
  background: transparent;
  background-image: ${({ theme }: FlexProps) => theme?.gradient.dashboard};
  box-shadow: 5px 5px 10px 5px rgba(0, 110, 178, 0.3);
  height: 100%;
  margin: 10px 0;
  overflow: hidden;
`;
