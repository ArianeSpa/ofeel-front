import { useTheme as useStyledTheme } from "styled-components";
import { color, gradient } from "./colors";

const fontFamily = {
  pacifico: `'Pacifico', cursive`,
  livvic: `'Livvic', sans-serif`,
  cabin: `'Cabin', sans-serif`,
};

type GetFontStyleProps = {
  weight: string;
  size: string;
  lineHeight: string;
  family?: string;
  transform?: string;
};
export const getFontStyle = ({
  weight,
  size,
  lineHeight,
  family = fontFamily.livvic,
  transform = "default",
}: GetFontStyleProps) =>
  `
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${lineHeight};
    font-family: ${family};
    text-transform: ${transform};
  `;

export const mainTheme = {
  font: {
    family: fontFamily,
    heading: {
      h1: getFontStyle({
        weight: "700",
        size: "32px",
        lineHeight: "40px",
        family: fontFamily.cabin,
      }),
      h2: getFontStyle({
        weight: "700",
        size: "28px",
        lineHeight: "36px",
        family: fontFamily.cabin,
      }),
      h3: getFontStyle({
        weight: "700",
        size: "24px",
        lineHeight: "32px",
        family: fontFamily.cabin,
      }),
      h4: getFontStyle({
        weight: "600",
        size: "20px",
        lineHeight: "28px",
        family: fontFamily.cabin,
      }),
      h5: getFontStyle({
        weight: "600",
        size: "18px",
        lineHeight: "24px",
        family: fontFamily.cabin,
      }),
      h6: getFontStyle({
        weight: "600",
        size: "16px",
        lineHeight: "20px",
        family: fontFamily.cabin,
      }),
    },
    subtitle: {
      tiny: getFontStyle({
        weight: "700",
        size: "10px",
        lineHeight: "16px",
      }),
      mini: getFontStyle({
        weight: "600",
        size: "12px",
        lineHeight: "16px",
      }),
      small: getFontStyle({
        weight: "600",
        size: "14px",
        lineHeight: "20px",
      }),
      mediumBold: getFontStyle({
        weight: "600",
        size: "16px",
        lineHeight: "24px",
      }),
      large: getFontStyle({
        weight: "600",
        size: "18px",
        lineHeight: "28px",
      }),
    },
    body: {
      tiny: getFontStyle({
        weight: "500",
        size: "10px",
        lineHeight: "16px",
      }),
      mini: getFontStyle({ weight: "500", size: "12px", lineHeight: "16px" }),
      small: getFontStyle({ weight: "500", size: "14px", lineHeight: "20px" }),
      medium: getFontStyle({ weight: "500", size: "16px", lineHeight: "24px" }),
      large: getFontStyle({ weight: "500", size: "18px", lineHeight: "28px" }),
    },
    button: {
      small: getFontStyle({
        weight: "600",
        size: "12px",
        lineHeight: "20px",
        transform: "uppercase",
      }),
      medium: getFontStyle({
        weight: "600",
        size: "16px",
        lineHeight: "24px",
        transform: "uppercase",
      }),
      large: getFontStyle({
        weight: "600",
        size: "18px",
        lineHeight: "24px",
        transform: "uppercase",
      }),
    },
  },
  color,
  gradient,
  zIndex: {
    burgerButton: 1500,
    burgerMenu: 1000,
    modal: 500,
    backdrop: 400,
    dropdown: 100,
  },
};

export type MainTheme = typeof mainTheme;
export const useTheme = useStyledTheme as () => MainTheme;
