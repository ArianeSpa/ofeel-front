// == Import : npm
import { ReactNode } from "react";

// == Import : local
import {
  StyledSVGGradientIcon,
  StyledSVGGradientIconProps,
} from "./SVGGradientIcon.style";

type SVGGradientIconProps = {
  icon: ReactNode;
} & Omit<StyledSVGGradientIconProps, "theme">;
export const SVGGradientIcon: React.FC<SVGGradientIconProps> = ({
  gradientId,
  color,
  icon,
  type = "gradient",
}) => {
  return (
    <StyledSVGGradientIcon
      gradientId={gradientId}
      color={color ?? "grey.g1"}
      type={type}
    >
      {icon}
    </StyledSVGGradientIcon>
  );
};
