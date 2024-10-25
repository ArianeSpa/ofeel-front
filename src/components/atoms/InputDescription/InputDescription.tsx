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
  ...props
}) => {
  return (
    <StyledInputDescription {...props}>
      {capitalize(description)}
    </StyledInputDescription>
  );
};
