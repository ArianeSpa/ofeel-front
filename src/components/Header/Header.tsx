// == Import : npm
import React from "react";

// == Import : local
import "./header.scss";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

type HeaderProps = {
  changeHeaderClassname: (value: string) => void;
  changeViewPosition: (value?: number) => void;
  headerClassname: string;
  logged: boolean;
  yPosition: number;
};
// == Composant
export const Header: React.FC<HeaderProps> = ({
  logged,
  yPosition,
  headerClassname,
  changeViewPosition,
  changeHeaderClassname,
}) => (
  <>
    <HeaderMobile
      changeHeaderClassname={changeHeaderClassname}
      changeViewPosition={changeViewPosition}
      headerClassname={headerClassname}
      logged={logged}
      yPosition={yPosition}
    />
    <HeaderDesktop logged={logged} />
  </>
);
