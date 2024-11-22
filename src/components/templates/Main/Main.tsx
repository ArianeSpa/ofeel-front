// == Import : npm
import { ReactNode } from "react";
import { capitalize, upperCase } from "lodash";
import { Flex, Typo } from "react-rocket-ui";

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
    <Flex as="main" fullHeight fullWidth style={{ overflow: "hidden" }}>
      <Typo as="h1" color="yellow.y5" fontSize={12}>
        {pageTitle}
      </Typo>

      {children}
    </Flex>
  );
};
