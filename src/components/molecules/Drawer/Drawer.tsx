// == Import : npm
import { ReactNode, useRef } from "react";

// == Import : local
import { useOnClickOutside } from "@/hooks";
import { Backdrop } from "../../atoms";
import { StyledDrawer, StyledDrawerProps } from "./Drawer.style";

type DrawerProps = {
  disableClickOutside?: boolean;
  children?: ReactNode | ReactNode[];
  hideBackdrop?: boolean;
  setOpen: (value: boolean) => void;
} & StyledDrawerProps;
export const Drawer: React.FC<DrawerProps> = ({
  children,
  open,
  position = "right",
  hideBackdrop = false,
  disableClickOutside = false,
  setOpen,
}) => {
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(
    node,
    !disableClickOutside ? () => setOpen(false) : undefined
  );

  return (
    <>
      <StyledDrawer ref={node} open={open} position={position}>
        {children}
      </StyledDrawer>
      {open && !hideBackdrop && <Backdrop />}
    </>
  );
};
