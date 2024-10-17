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
  color: {
    grey: {
      g1: "#000000",
      g2: "#3f3f3f",
      g3: "#858585",
      g4: "#c9c9c9",
      g5: "#ffffff",
    },
    common: {
      white: "white",
      black: "black",
    },
    yellow: {
      y1: "#ff8a00",
      y2: "#fda406",
      y3: "#f9bb1d",
      y4: "#f4d236",
      y5: "#eee851",
    },
    green: {
      g1: "#0aa497",
      g2: "#00bb9d",
      g3: "#00d29c",
      g4: "#00e994",
      g5: "#00ff85",
    },
    blue: {
      b1: "#177bdd",
      b2: "#2d85df",
      b3: "#3f8fe1",
      b4: "#5099e2",
      b5: "#61a3e3",
    },
    pink: {
      p1: "#ff0022",
      p2: "#ff0059",
      p3: "#ff008b",
      p4: "#ff3cba",
      p5: "#e361e3",
    },
    background: {
      bg1: "#480773",
      bg2: "#3f1e80",
      bg3: "#332e8b",
      bg4: "#233a95",
      bg5: "#00469e",
      bg6: "#006eb2",
      bg7: "#0091b8",
      bg8: "#50b1b9",
      bg9: "#a2e9f0",
    },
  },
  zIndex: {
    burgerButton: 1500,
    burgerMenu: 1000,
    modal: 500,
    backdrop: 400,
    dropdown: 100,
  },
};

export type MainTheme = typeof mainTheme;
