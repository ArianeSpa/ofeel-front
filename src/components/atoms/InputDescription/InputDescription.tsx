import { capitalize } from "lodash";
import {
  StyledInputDescription,
  StyledInputDescriptionProps,
} from "./InputDescription.style";

type InputDescriptionProps = {
  description: string;
  id: string;
} & StyledInputDescriptionProps;
export const InputDescription: React.FC<InputDescriptionProps> = ({
  description,
  error,
  ...props
}) => {
  return (
    <StyledInputDescription error={error} {...props}>
      {capitalize(description)}
    </StyledInputDescription>
  );
};
