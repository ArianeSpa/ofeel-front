// == Import : npm
import { capitalize } from "lodash";

// == Import : local
import {
  StyledInputDescription,
  StyledInputDescriptionProps,
} from "./InputDescription.style";

type InputDescriptionProps = {
  description: string;
  id: string;
} & Omit<StyledInputDescriptionProps, "theme">;
export const InputDescription: React.FC<InputDescriptionProps> = ({
  description,
  ...props
}) => {
  return (
    <StyledInputDescription {...props}>
      {capitalize(description)}
    </StyledInputDescription>
  );
};
