// == Import : npm
import { useState } from "react";

// == Import : local
import {
  InputBase,
  InputBaseProps,
  InputDescription,
  InputLabel,
} from "../../atoms";

type FormInputProps = {
  description?: string;
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  validators?: () => string | undefined;
} & InputBaseProps;
/**
 * @param description not required, will be displayed below component
 * @param label not required, if not provided, use aria-label to identify input
 * @param id required to link input to label ("for") and description to input ("aria-describedby")
 * @param validators A function that should return a string error. Error is displayed instead description.
 */
export const FormInput: React.FC<FormInputProps> = ({
  description,
  id,
  label,
  required,
  validators = () => undefined,
  onChange,
  onBlur,
  ...inputProps
}) => {
  if (
    !label &&
    !inputProps["aria-label"] &&
    process.env.NODE_ENV === "development"
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      "According to accessibility rules, FormInput should receive at least a label or an aria-label"
    );
  }
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const descriptionId = `${id}-description`;

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const message = validators();
    setErrorMessage(message);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setErrorMessage(undefined);
    if (onChange) {
      onChange(event);
    }
  };

  const descriptionValue = errorMessage ?? description;
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <InputLabel
          mb={1}
          label={label}
          htmlFor={id}
          required={required}
          error={!!errorMessage}
        />
      )}
      <InputBase
        aria-describedby={descriptionId}
        aria-required={required}
        error={!!errorMessage}
        id={id}
        onBlur={handleBlur}
        onChange={handleChange}
        {...inputProps}
      />
      {descriptionValue && (
        <InputDescription
          error={!!errorMessage}
          description={descriptionValue}
          id={descriptionId}
        />
      )}
    </div>
  );
};
