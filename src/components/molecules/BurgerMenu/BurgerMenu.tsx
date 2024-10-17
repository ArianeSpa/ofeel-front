// == Import : npm
import { useState } from "react";

// == Import : local
import { ButtonBurger, NavMenuItem } from "../../atoms";
import { MenuItemsProps } from "../NavBar/NavBar";
import { StyledBurgerMenu, StyledBurgerMenuProps } from "./BurgerMenu.style";

type BurgerMenuProps = {
  menuItems: MenuItemsProps[];
} & Omit<StyledBurgerMenuProps, "theme">;
export const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonBurger open={open} setOpen={setOpen} />
      <StyledBurgerMenu open={open}>
        {menuItems.map(
          ({ content, id, hide, to }) =>
            !hide && (
              <NavMenuItem key={id} id={id} to={to}>
                {content}
              </NavMenuItem>
            )
        )}
      </StyledBurgerMenu>
    </>
  );
};
