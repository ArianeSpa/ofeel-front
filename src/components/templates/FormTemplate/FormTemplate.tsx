// == Import : npm
import { FormEvent, ReactNode } from "react";
import { NavLink } from "react-router-dom";

// == Import : local
import { Button, CustomLink, Flex } from "../../atoms";
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
} & StyledFormTemplateProps;
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

      <Flex gap={14} padding="50px 0px 0px">
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
