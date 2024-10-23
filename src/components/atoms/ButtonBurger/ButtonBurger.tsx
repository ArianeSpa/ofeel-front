import { useTranslation } from "react-i18next";
import { StyledButtonBurger } from "./ButtonBurger.style";

type ButtonBurgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const ButtonBurger: React.FC<ButtonBurgerProps> = ({
  open,
  setOpen,
}) => {
  const { t } = useTranslation();
  return (
    <StyledButtonBurger
      aria-label={t("COMMON.BURGER_MENU")}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span aria-hidden />
      <span aria-hidden />
      <span aria-hidden />
    </StyledButtonBurger>
  );
};
