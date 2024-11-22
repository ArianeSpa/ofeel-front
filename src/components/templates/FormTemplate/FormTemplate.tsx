// == Import : npm
import { FormEvent, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "react-rocket-ui";

// == Import : local
import { Button, CustomLink } from "../../atoms";
import {
  StyledFormTemplate,
  StyledFormTemplateProps,
} from "./FormTemplate.style";

type FormTemplateProps = {
  buttonLabel: string;
  children: ReactNode | ReactNode[];
  link?: {
    label: string;
    to: string;
  };
  onSubmit: () => void;
} & Omit<StyledFormTemplateProps, "theme">;
export const FormTemplate: React.FC<FormTemplateProps> = ({
  buttonLabel,
  children,
  link,
  onSubmit,
  ...formProps
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <StyledFormTemplate onSubmit={handleSubmit} {...formProps}>
      {children}

      <Flex gap={7} pt={6}>
        <Button type="submit">{buttonLabel}</Button>
        {link && (
          <CustomLink as={NavLink} to={link.to}>
            {link.label}
          </CustomLink>
        )}
      </Flex>
    </StyledFormTemplate>
  );
};
