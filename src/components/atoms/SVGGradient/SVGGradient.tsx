import { GradientColor } from "@/theme/colors";
import { GradientBlue } from "./GradientBlue";
import { GradientGreen } from "./GradientGreen";
import { GradientPink } from "./GradientPink";
import { GradientYellow } from "./GradientYellow";

export const SVGGradientId = {
  [GradientColor.BLUE]: "linear-gradient-blue",
  [GradientColor.GREEN]: "linear-gradient-green",
  [GradientColor.PINK]: "linear-gradient-pink",
  [GradientColor.YELLOW]: "linear-gradient-yellow",
};

type SVGGradientProps = {
  gradientColor: GradientColor;
  gradientId: string;
  width?: string | number;
  height?: string | number;
};

export const SVGGradient: React.FC<SVGGradientProps> = ({
  gradientColor,
  gradientId,
}) => {
  const linearGradients = {
    [GradientColor.BLUE]: GradientBlue,
    [GradientColor.GREEN]: GradientGreen,
    [GradientColor.PINK]: GradientPink,
    [GradientColor.YELLOW]: GradientYellow,
  };
  const LinearGradient = linearGradients[gradientColor];

  return (
    <svg style={{ width: 0, height: 0 }} aria-hidden="true" focusable="false">
      <defs>
        <LinearGradient id={gradientId} />
      </defs>
    </svg>
  );
};
