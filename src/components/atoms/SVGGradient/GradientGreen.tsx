import { useTheme } from "@/theme/theme";

type GradientGreenProps = {
  id: string;
};
export const GradientGreen: React.FC<GradientGreenProps> = ({ id }) => {
  const { color } = useTheme();

  return (
    <linearGradient id={id} x2="1" y2="1">
      <stop offset="0%" stopColor={color.green.g1} />
      <stop offset="50%" stopColor={color.green.g3} />
      <stop offset="100%" stopColor={color.green.g5} />
    </linearGradient>
  );
};
