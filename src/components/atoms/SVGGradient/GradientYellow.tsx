import { useTheme } from "@/theme/theme";

type GradientYellowProps = {
  id: string;
};
export const GradientYellow: React.FC<GradientYellowProps> = ({ id }) => {
  const { color } = useTheme();

  return (
    <linearGradient id={id} x2="1" y2="1">
      <stop offset="0%" stopColor={color.yellow.y1} />
      <stop offset="50%" stopColor={color.yellow.y3} />
      <stop offset="100%" stopColor={color.yellow.y5} />
    </linearGradient>
  );
};
