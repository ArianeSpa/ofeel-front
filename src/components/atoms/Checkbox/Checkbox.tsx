import { FaCheck } from "react-icons/fa";
import { StyledCheckbox, StyledCheckboxProps } from "./Checkbox.style";
import { useTheme } from "@/theme/theme";

type CheckboxProps = {
  checked?: boolean;
} & StyledCheckboxProps;
export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  ...buttonProps
}) => {
  const { color } = useTheme();
  return (
    <StyledCheckbox
      type="button"
      role="checkbox"
      aria-checked={checked}
      checked={checked}
      {...buttonProps}
    >
      {checked && <FaCheck size={18} color={color?.grey.g1} />}
    </StyledCheckbox>
  );
};
