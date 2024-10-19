// == Import : npm
import React from "react";

// == Import : local
import { useWindowSize } from "@/hooks/window.hook";
import logo from "@/assets/images/logo_fond_transparent2.png";

export const Logo: React.FC = () => {
  const { windowWidth } = useWindowSize();

  const autoWidth = windowWidth * 0.15;
  const finalWidth = autoWidth < 150 ? autoWidth : 150;

  return (
    <img
      role="none"
      width={finalWidth}
      style={{ flexShrink: 0 }}
      src={logo}
      alt=""
    />
  );
};
