import styled from "styled-components";
import { ButtonIcon } from "@/components";
import { MainTheme } from "@/theme/theme";

const forwardConfig = {
  shouldForwardProp: (prop: string) => !["isSelected"].includes(prop),
};

type StyledFeedFilterButtonProps = {
  isSelected?: boolean;
  theme?: MainTheme;
};
export const StyledFeedFilterButton = styled(ButtonIcon).withConfig(
  forwardConfig
)<StyledFeedFilterButtonProps>`
  opacity: ${({ isSelected }: StyledFeedFilterButtonProps) =>
    isSelected ? 1 : 0.7};
  &:hover {
    opacity: 1;
    border: ${({ theme }: StyledFeedFilterButtonProps) =>
      `1px solid ${theme?.color.yellow.y4}`};
  }
`;
