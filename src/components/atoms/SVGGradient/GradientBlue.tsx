import { useTheme } from "@/theme/theme";

type GradientBlueProps = {
  id: string;
};
export const GradientBlue: React.FC<GradientBlueProps> = ({ id }) => {
  const { color } = useTheme();

  return (
    <linearGradient id={id} x2="1" y2="1">
      <stop offset="0%" stopColor={color.blue.b1} />
      <stop offset="50%" stopColor={color.blue.b3} />
      <stop offset="100%" stopColor={color.blue.b5} />
    </linearGradient>
  );
};
