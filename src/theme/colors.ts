export const blue = {
  b1: "#177bdd",
  b2: "#2d85df",
  b3: "#3f8fe1",
  b4: "#5099e2",
  b5: "#61a3e3",
};
export const green = {
  g1: "#0aa497",
  g2: "#00bb9d",
  g3: "#00d29c",
  g4: "#00e994",
  g5: "#00ff85",
};
export const grey = {
  g1: "#000000",
  g2: "#3f3f3f",
  g3: "#858585",
  g4: "#c9c9c9",
  g5: "#ffffff",
};
export const pink = {
  p1: "#ff0022",
  p2: "#ff0059",
  p3: "#ff008b",
  p4: "#ff3cba",
  p5: "#e361e3",
};
export const yellow = {
  y1: "#ff8a00",
  y2: "#fda406",
  y3: "#f9bb1d",
  y4: "#f4d236",
  y5: "#eee851",
};
export const background = {
  bg1: "#480773",
  bg2: "#3f1e80",
  bg3: "#332e8b",
  bg4: "#233a95",
  bg5: "#00469e",
  bg6: "#006eb2",
  bg7: "#0091b8",
  bg8: "#50b1b9",
  bg9: "#a2e9f0",
};

export const color = {
  background,
  blue,
  green,
  grey,
  pink,
  yellow,
};

export const bodyGradient = `
linear-gradient(to bottom, ${background.bg1}, ${background.bg2}, ${background.bg3}, ${background.bg4}, ${background.bg5}, ${background.bg6}, ${background.bg7}, ${background.bg8}, ${background.bg9}, ${grey.g5})
`;
export const dashboardGradient = `radial-gradient(circle,rgba(43, 43, 61, 0.2), rgba(43, 43, 61, 0.3), rgba(43, 43, 61, 0.4), rgba(43, 43, 61, 0.5), rgba(43, 43, 61, 0.6))`;
export const blueGradient = `linear-gradient(to bottom, ${blue.b1}, ${blue.b2}, ${blue.b3}, ${blue.b4}, ${blue.b5})`;
export const greenGradient = `linear-gradient(to bottom, ${green.g1}, ${green.g2}, ${green.g3}, ${green.g4}, ${green.g5})`;
export const pinkGradient = `linear-gradient(to bottom, ${pink.p1}, ${pink.p2}, ${pink.p3}, ${pink.p4}, ${pink.p5})`;
export const yellowGradient = `linear-gradient(to bottom, ${yellow.y1}, ${yellow.y2}, ${yellow.y3}, ${yellow.y4}, ${yellow.y5})`;
export const getTabGradient = (isDesktop: boolean) => `
linear-gradient(${
  isDesktop ? "to right" : "to bottom"
}, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))
`;
export const gradient = {
  body: bodyGradient,
  dashboard: dashboardGradient,
  blue: blueGradient,
  green: greenGradient,
  pink: pinkGradient,
  yellow: yellowGradient,
  tab: getTabGradient,
};
