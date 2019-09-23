// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Checkbox, Form, Segment, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';

// == Composant
const Login = ({
  changeInputUsername, changeInputPassword, username, password, doAuthenticate, connexionBool,
}) => {
  const handleChangeUsername = (event) => {
    const { value } = event.target;

    changeInputUsername(value);
  };
  const handleChangePassword = (event) => {
    const { value } = event.target;
    changeInputPassword(value);
  };
  return (
    <Segment inverted className="block login">
      <Form inverted onSubmit={doAuthenticate}>
        <Form.Field>
          <Form.Input value={username} onChange={handleChangeUsername} label="Pseudo" placeholder="Pseudo" />
        </Form.Field>
        <Form.Field>
          <Form.Input value={password} onChange={handleChangePassword} type="password" label="Mot de passe" placeholder="Mot de passe" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Se souvenir de moi" />
        </Form.Field>
        {connexionBool === 0 && <p>Erreur de pseudo ou de mot de passe.</p>}
        <Button type="submit" className="submit">Submit</Button>
      </Form>
      <Divider horizontal>
        Pas encore inscrit ? <Link to="/signup" className="signupLink">Créez un compte !</Link>
      </Divider>
    </Segment>
  );
};

Login.propTypes = {
  changeInputUsername: PropTypes.func.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  doAuthenticate: PropTypes.func.isRequired,
  connexionBool: PropTypes.number.isRequired,
};


export default Login;
