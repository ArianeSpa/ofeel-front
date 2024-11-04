// == Import : npm
import { ChangeEvent, useState } from "react";
import { Form, TextArea } from "semantic-ui-react";

// == Import : local
import { Flex, FormInput, FormTemplate } from "@/components";
import "./contact.scss";
import { useWindowSize } from "@/hooks/window.hook";

// == Dropdown options
const subjects = [
  {
    key: "dg",
    text: "Demandes d'ordre générale",
    value: "Demandes d'ordre générale",
  },
  { key: "rs", text: "Remarques/Suggestions", value: "Remarques/Suggestions" },
  { key: "pt", text: "Problèmes techniques", value: "Problèmes techniques" },
];

const handleSubmit = () => {
  /** @todo add submission */
};

// == Composant
export const Contact = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { isDesktop } = useWindowSize();
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <FormTemplate buttonLabel="Envoyer" width="600px" onSubmit={handleSubmit}>
      <Flex
        gap={12}
        flexDirection="row"
        alignItems="start"
        flexWrap={isDesktop ? "no-wrap" : "wrap"}
      >
        <FormInput
          required
          id="username"
          label="Pseudo"
          placeholder="Saisissez un pseudo"
          value={username}
          onChange={handleUsername}
        />
        <FormInput
          required
          id="email"
          label="Email"
          placeholder="email@example.com"
          value={email}
          onChange={handleEmail}
        />
      </Flex>
      <Flex gap={12} alignItems="stretch" margin="30px 0 0">
        {/* @dodo replace with lib components when created */}
        <Form.Group>
          <Form.Select
            fluid
            label="Sujet"
            options={subjects}
            placeholder="Votre demande concerne"
          />
        </Form.Group>
        <Form.Group>
          <TextArea
            label="votre message"
            placeholder="Votre message"
            style={{ width: "100%", minHeight: "150px" }}
          />
        </Form.Group>
      </Flex>
    </FormTemplate>
  );
};
