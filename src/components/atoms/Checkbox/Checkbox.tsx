// == Import : local
import { StyledCheckbox, StyledCheckboxProps } from "./Checkbox.style";

type CheckboxProps = {
  checked?: boolean;
  onChange: (value: boolean) => void;
} & Omit<StyledCheckboxProps, "theme" | "onChange">;
export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  ...buttonProps
}) => {
  const handleCheckboxClick = () => {
    onChange(!checked);
  };
  return (
    <StyledCheckbox
      type="checkbox"
      checked={checked}
      onClick={handleCheckboxClick}
      {...buttonProps}
    />
  );
};
