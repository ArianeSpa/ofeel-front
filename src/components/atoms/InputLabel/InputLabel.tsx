// == Import : npm
import { capitalize } from "lodash";

// == Import : local
import { StyledInputLabel, StyledInputLabelProps } from "./InputLabel.style";

type InputLabelProps = {
  label: string;
  htmlFor: string;
} & Omit<StyledInputLabelProps, "theme">;
export const InputLabel: React.FC<InputLabelProps> = ({ label, ...props }) => {
  return <StyledInputLabel {...props}>{capitalize(label)}</StyledInputLabel>;
};
