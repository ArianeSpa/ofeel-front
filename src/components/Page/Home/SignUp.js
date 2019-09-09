import React from 'react';
import {
  Button, Form, Segment, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './form.scss';


const SignUp = ({
  changeInputUsername, username, changeInputEmail, email, createAccount,
}) => {
  
  const handleChangeUsername = (event) => {
    const { value } = event.target;
    changeInputUsername(value);
  };
  
  const handleAddEmail = (event) => {
    const { value } = event.target;
    changeInputEmail(value);
  };

  return (
    <Segment inverted className="block">
      <Form inverted onSubmit={createAccount}>
        <Form.Group className="infoPassword">
          <p>Pour créez un compte, renseignez ci-dessous votre pseudo et votre email de contact. Vous recevrez un lien par email pour personnaliser votre mot de passe et finaliser votre inscription.</p>
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input value={username} onChange={handleChangeUsername} label="Pseudo" placeholder="Pseudo" />
          <Form.Input value={email} onChange={handleAddEmail} label="Email" placeholder="email@example.com" />
        </Form.Group>
        <Form.Checkbox label="Inscription à la newsletter" />
        <Form.Checkbox label="J'accepte les conditions générales" />
        <Button type="submit" className="submit">Submit</Button>
      </Form>
      <Divider horizontal>
        Déjà inscrit ? <a href="/" className="signupLink">Connectez-vous !</a>
      </Divider>
    </Segment>
  );
};

SignUp.propTypes = {
  changeInputUsername: PropTypes.func/*.isRequired*/,
  changeInputEmail: PropTypes.func/*.isRequired*/,
  username: PropTypes.string/*.isRequired*/,
  email: PropTypes.string/*.isRequired*/,
  createAccount: PropTypes.func.isRequired,
};

export default SignUp;
