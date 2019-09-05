import React from 'react';
import {
  Header, Button, Form, Segment, Dropdown, TextArea,
} from 'semantic-ui-react';

import 'src/components/Page/Home/form.scss';
import './contact.scss';

const typeOfSubject = [
  { key: 'dg', text: 'Demande générale', value: 'Demande générale' },
  { key: 'rs', text: 'Remarques/Suggestions', value: 'Remarques/Suggestions' },
  { key: 'pt', text: 'Problèmes techniques', value: 'Problèmes techniques' },
];

const Contact = () => (
  <Segment inverted className="block contact">
    <Form inverted>
      <Form.Group unstackable widths={2}>
        <Form.Input label="Pseudo" placeholder="Pseudo" />
        <Form.Input label="Email" placeholder="email@example.com" />
      </Form.Group>
      <Header inverted size="small">Sujets</Header>
      <Form.Group>
        <Dropdown
          placeholder="Votre demande concerne"
          selection
          fluid
          options={typeOfSubject}
        />
      </Form.Group>
      <Form.Group>
        <TextArea className="textStyle" placeholder="Votre message" />
      </Form.Group>
      <Button type="submit" className="submit">Envoyer</Button>
    </Form>
  </Segment>
);

export default Contact;
