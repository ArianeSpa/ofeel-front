import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledWorkoutListProps = {
  theme?: MainTheme;
};
export const StyledWorkoutList = styled.div<StyledWorkoutListProps>`
  height: 100%;
  overflow: scroll;
  margin: 0;
  &::-webkit-scrollbar {
    &-track {
      background-color: transparent;
      border-radius: 5px;
    }
    &-thumb {
      background-image: ${({ theme }: StyledWorkoutListProps) =>
        theme?.gradient.green};
      &:hover {
        background-image: ${({ theme }: StyledWorkoutListProps) =>
          theme?.gradient.blue};
      }
    }
  }
`;
