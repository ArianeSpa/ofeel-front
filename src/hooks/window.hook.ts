// == Import : npm
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return { windowHeight, windowWidth };
};
