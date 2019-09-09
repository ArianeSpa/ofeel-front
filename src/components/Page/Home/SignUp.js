import React from 'react';
import { 
  Button, Form, Segment, Divider
} from 'semantic-ui-react';

import './form.scss';


const SignUp = () => (
  <Segment inverted className="block">
    <Form inverted>
      <Form.Group unstackable widths={2}>
        <Form.Input label="Pseudo" placeholder="Pseudo" />
        <Form.Input label="Email" placeholder="email@example.com" />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input type="password" label="Mot de passe" placeholder="Mot de passe" />
        <Form.Input type="password" label="Confirmation du mot de passe" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Checkbox label="Inscription à la newsletter" />
      <Form.Checkbox label="J'accepte les conditions générales" />
      <Button type="submit" className="submit">Submit</Button>
    </Form>
    <Divider horizontal >
        Déjà inscrit ? <a href="/" className="signupLink">Connectez-vous !</a>
    </Divider>
  </Segment>
);

export default SignUp;
