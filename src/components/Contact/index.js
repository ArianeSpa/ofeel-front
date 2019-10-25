// == Import : npm
import React from 'react';
import {
  Header, Button, Form, Segment, Dropdown, TextArea,
} from 'semantic-ui-react';

// == Import : local
import 'src/components/Home/form.scss';
import './contact.scss';

// == Dropdown options
const typeOfSubject = [
  { key: 'dg', text: 'Demande générale', value: 'Demande générale' },
  { key: 'rs', text: 'Remarques/Suggestions', value: 'Remarques/Suggestions' },
  { key: 'pt', text: 'Problèmes techniques', value: 'Problèmes techniques' },
];

// == Composant
const Contact = () => (
  <Segment inverted className="block contact">
    <Form inverted className="contactForm">
      <Form.Group stackable widths={2} className="contactFields">
        <Form.Input label="Pseudo" placeholder="Pseudo" />
        <Form.Input label="Email" placeholder="email@example.com" />
      </Form.Group>
      <Header inverted size="small" className="subjectHeader">Sujets</Header>
      <Form.Group className="contactFields subject">
        <Dropdown
          placeholder="Votre demande concerne"
          selection
          fluid
          options={typeOfSubject}
          className="contactDropdown"
        />
      </Form.Group>
      <Form.Group className="contactFields message">
        <TextArea className="textStyle" placeholder="Votre message" />
      </Form.Group>
      <Button type="submit" className="submit contactSubmit">Envoyer</Button>
    </Form>
  </Segment>
);

export default Contact;
