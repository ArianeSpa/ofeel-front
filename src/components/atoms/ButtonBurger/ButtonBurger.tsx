import { StyledButtonBurger } from "./ButtonBurger.style";

type ButtonBurgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const ButtonBurger: React.FC<ButtonBurgerProps> = ({
  open,
  setOpen,
}) => {
  return (
    <StyledButtonBurger
      aria-label="Burger menu"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span aria-hidden />
      <span aria-hidden />
      <span aria-hidden />
    </StyledButtonBurger>
  );
};
