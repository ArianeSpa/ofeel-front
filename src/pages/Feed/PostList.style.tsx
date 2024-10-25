import styled from "styled-components";
import { MainTheme } from "@/theme/theme";

type StyledPostListProps = {
  theme?: MainTheme;
};
export const StyledPostList = styled.div<StyledPostListProps>`
  height: 85%;
  margin: 0 1em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    &-track {
      background-image: ${({ theme }: StyledPostListProps) =>
        theme?.gradient.yellow};
      border-radius: 5px;
    }
    &-thumb {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;
