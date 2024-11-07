// == Import : npm
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, TextArea } from "semantic-ui-react";

// == Import : local
import { Flex, FormInput, FormTemplate } from "@/components";
import { useWindowSize } from "@/hooks";
import "./contact.scss";

// == Dropdown options

const handleSubmit = () => {
  // TODO
};

// == Composant
export const Contact = () => {
  const { t } = useTranslation();
  const { isDesktop } = useWindowSize();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const subjects = [
    {
      key: "dg",
      text: t("FORM.LABEL.CONTACT_SUBJECT_GENERAL"),
      value: "Demandes d'ordre générale",
    },
    {
      key: "rs",
      text: t("FORM.LABEL.CONTACT_SUBJECT_SUGGESTIONS"),
      value: "Remarques/Suggestions",
    },
    {
      key: "pt",
      text: t("FORM.LABEL.CONTACT_SUBJECT_TECHNICAL"),
      value: "Problèmes techniques",
    },
  ];

  return (
    <FormTemplate
      buttonLabel={t("COMMON.LOGIN")}
      width="600px"
      onSubmit={handleSubmit}
    >
      <Flex
        gap={12}
        flexDirection="row"
        alignItems="start"
        flexWrap={isDesktop ? "no-wrap" : "wrap"}
      >
        <FormInput
          required
          id="username"
          label={t("FORM.LABEL.USERNAME")}
          placeholder={t("FORM.PLACEHOLDER.USERNAME")}
          value={username}
          onChange={handleUsername}
        />
        <FormInput
          required
          id="email"
          label={t("FORM.LABEL.EMAIL")}
          placeholder="email@example.com"
          value={email}
          onChange={handleEmail}
        />
      </Flex>
      <Flex gap={12} alignItems="stretch" mt={8}>
        {/* @dodo replace with lib components when created */}
        <Form.Group>
          <Form.Select
            fluid
            label={t("FORM.LABEL.CONTACT_SUBJECT")}
            placeholder={t("FORM.PLACEHOLDER.CONTACT_SUBJECT")}
            options={subjects}
          />
        </Form.Group>
        <Form.Group>
          <TextArea
            label={t("FORM.PLACEHOLDER.CONTACT_MESSAGE")}
            placeholder={t("FORM.PLACEHOLDER.CONTACT_MESSAGE")}
            style={{ width: "100%", minHeight: "150px" }}
          />
        </Form.Group>
      </Flex>
    </FormTemplate>
  );
};
