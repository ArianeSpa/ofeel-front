// == Import : npm
import { ReactNode } from "react";
import { capitalize, upperCase } from "lodash";

// == Import : local
import { StyledMain } from "./Main.style";
import { Typo } from "../../atoms";

type MainProps = {
  h1?: string;
  subtitle?: string;
  children?: ReactNode | ReactNode[];
};
export const Main: React.FC<MainProps> = ({ h1, subtitle, children }) => {
  const pageTitle = [upperCase(h1), capitalize(subtitle)]
    .filter(Boolean)
    .join(" - ");

  return (
    <StyledMain>
      <Typo as="h1" color="yellow.y5" fontSize={24}>
        {pageTitle}
      </Typo>

      {children}
    </StyledMain>
  );
};
