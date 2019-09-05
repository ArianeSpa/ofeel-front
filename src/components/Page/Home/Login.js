import React from 'react';
import {
  Button, Checkbox, Form, Segment,
} from 'semantic-ui-react';

import './form.scss';

const Login = () => (
  <Segment inverted className="block login">
    <Form inverted>
      <Form.Field>
        <Form.Input label="Pseudo" placeholder="Pseudo" />
      </Form.Field>
      <Form.Field>
        <Form.Input type="password" label="Mot de passe" placeholder="Mot de passe" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Se souvenir de moi" />
      </Form.Field>
      <Button type="submit" className="submit">Submit</Button>
    </Form>
  </Segment>
);

export default Login;
