// == Import : npm
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

// == Import : local
import { useWindowSize } from "@/hooks/window.hook";
import { GradientColor } from "@/theme/colors";
import { SVGGradient, SVGGradientId, SVGGradientIcon } from "../../atoms";
import { StyledBorder, StyledTabMenuItem } from "./TabMenuItem.style";

type TabMenuItemProps = {
  ariaLabel: string; // accessibility requirement
  icon: ReactNode;
  url: string;
  gradientColor: GradientColor;
};

export const TabMenuItem: React.FC<TabMenuItemProps> = ({
  ariaLabel,
  icon,
  url,
  gradientColor,
}) => {
  const { isDesktop } = useWindowSize();
  const gradientId = SVGGradientId[gradientColor];

  return (
    <StyledTabMenuItem
      aria-label={ariaLabel}
      as={NavLink}
      to={url}
      isDesktop={isDesktop}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <StyledBorder gradientColor={gradientColor} isDesktop={isDesktop} />
          )}
          <SVGGradient gradientId={gradientId} gradientColor={gradientColor} />
          <SVGGradientIcon
            gradientId={gradientId}
            icon={icon}
            type={isActive ? "gradient" : "color"}
          />
        </>
      )}
    </StyledTabMenuItem>
  );
};
