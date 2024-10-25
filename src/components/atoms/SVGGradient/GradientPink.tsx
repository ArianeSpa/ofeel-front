import { useTheme } from "@/theme/theme";

type GradientPinkProps = {
  id: string;
};
export const GradientPink: React.FC<GradientPinkProps> = ({ id }) => {
  const { color } = useTheme();
  return (
    <linearGradient id={id} x2="1" y2="1">
      <stop offset="0%" stopColor={color.pink.p1} />
      <stop offset="50%" stopColor={color.pink.p3} />
      <stop offset="100%" stopColor={color.pink.p5} />
    </linearGradient>
  );
};
