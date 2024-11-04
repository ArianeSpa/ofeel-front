// == Import : npm
import { FaCheck } from "react-icons/fa";

// == Import : local
import { StyledCheckbox, StyledCheckboxProps } from "./Checkbox.style";
import { useTheme } from "@/theme/theme";

type CheckboxProps = {
  checked?: boolean;
  onChange: (value: boolean) => void;
} & Omit<StyledCheckboxProps, "theme" | "onChange">;
export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  ...buttonProps
}) => {
  const { color } = useTheme();

  const handleCheckboxClick = () => {
    onChange(!checked);
  };
  return (
    <StyledCheckbox
      type="button"
      role="checkbox"
      aria-checked={checked}
      checked={checked}
      onClick={handleCheckboxClick}
      {...buttonProps}
    >
      {checked && <FaCheck size={18} color={color?.grey.g1} />}
    </StyledCheckbox>
  );
};
