import { ReactNode } from "react";
import { useTheme } from "@/theme/theme";
import {
  StyledSVGGradientIcon,
  StyledSVGGradientIconProps,
} from "./SVGGradientIcon.style";

type SVGGradientIconProps = {
  icon: ReactNode;
} & StyledSVGGradientIconProps;
export const SVGGradientIcon: React.FC<SVGGradientIconProps> = ({
  gradientId,
  color,
  icon,
  type = "gradient",
}) => {
  const theme = useTheme();
  return (
    <StyledSVGGradientIcon
      gradientId={gradientId}
      color={color || theme?.color?.grey?.g1}
      type={type}
    >
      {icon}
    </StyledSVGGradientIcon>
  );
};
