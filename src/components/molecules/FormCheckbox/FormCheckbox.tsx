// == Import : NPM
import { Flex } from "react-rocket-ui";

// == Import : local
import { Checkbox, InputLabel, InputDescription } from "../../atoms";

type FormCheckboxProps = {
  checked?: boolean;
  description?: string;
  id: string;
  label: string;
  labelPosition?: "left" | "right";
  required?: boolean;
  onChange: (value: boolean) => void;
};
export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  checked,
  id,
  description,
  label,
  labelPosition = "right",
  required,
  onChange,
}) => {
  const descriptionId = `${id}-description`;

  return (
    <Flex
      gap={5}
      flexDirection={labelPosition === "right" ? "row" : "row-reverse"}
      justifyContent="start"
    >
      <Checkbox
        id={id}
        aria-describedby={descriptionId}
        aria-required={required}
        checked={checked}
        onChange={onChange}
      />
      <Flex>
        <InputLabel htmlFor={id} label={label} required={required} />
        {description && (
          <InputDescription id={descriptionId} description={description} />
        )}
      </Flex>
    </Flex>
  );
};
