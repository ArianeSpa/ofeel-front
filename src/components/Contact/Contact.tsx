// == Import : npm
import React from "react";
import { Button, Form, Segment, TextArea } from "semantic-ui-react";

// == Import : local
import "./contact.scss";

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

// == Composant
const Contact = () => (
  <Segment inverted id="contactSegment">
    <Form inverted className="contactForm">
      <Form.Group className="formFields" stackable widths={2}>
        <Form.Input className="oneField" label="Pseudo" placeholder="Pseudo" />
        <Form.Input
          className="oneField"
          label="Email"
          placeholder="email@example.com"
        />
      </Form.Group>

      <Form.Group className="formFields" id="subject">
        <Form.Select
          className="oneField"
          fluid
          id="contactDropdown"
          label="Sujet"
          options={subjects}
          placeholder="Votre demande concerne"
        />
      </Form.Group>
      <Form.Group className="formFields">
        <TextArea
          className="oneField"
          id="contactTextArea"
          label="votre message"
          placeholder="Votre message"
        />
      </Form.Group>
      <Button type="submit" className="submitButton">
        Envoyer
      </Button>
    </Form>
  </Segment>
);

export default Contact;
