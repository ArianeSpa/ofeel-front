import { StyledInputBase, StyledInputBaseProps } from "./InputBase.style";

type InputBaseProps = {
  placeholder?: string;
  value?: string;
  id: string;
} & StyledInputBaseProps;
export const InputBase: React.FC<InputBaseProps> = ({ ...props }) => {
  return <StyledInputBase {...props} />;
};
