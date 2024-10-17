// == Import : npm
import { useRef, useState } from "react";

// == Import : local
import { Backdrop, ButtonBurger, NavMenuItem } from "../../atoms";
import { MenuItemsProps } from "../NavBar/NavBar";
import { StyledBurgerMenu, StyledBurgerMenuProps } from "./BurgerMenu.style";
import { useOnClickOutside } from "./burgerMenu.hook";

type BurgerMenuProps = {
  menuItems: MenuItemsProps[];
} & Omit<StyledBurgerMenuProps, "theme">;
export const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems }) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  const handleNavItemClick = () => {
    setOpen(!open);
  };

  return (
    <div ref={node}>
      <ButtonBurger open={open} setOpen={setOpen} />
      <StyledBurgerMenu open={open}>
        {menuItems.map(
          ({ content, id, hide, to }) =>
            !hide && (
              <NavMenuItem
                key={id}
                id={id}
                to={to}
                onClick={handleNavItemClick}
              >
                {content}
              </NavMenuItem>
            )
        )}
      </StyledBurgerMenu>
      {open && <Backdrop />}
    </div>
  );
};
