// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Checkbox, Form, Segment, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import SavedModal from 'src/containers/Dashboard/SavedModal';


// == Composant
const Login = ({
  changeInputUsername, changeInputPassword, username, password, doAuthenticate, savedPreference,
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
        <Button type="submit" className="submit">Submit</Button>
      </Form>
      {savedPreference === 'notsaved' && <SavedModal content="Erreur de pseudo ou de mot de passe." positive={false} error />}
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
  savedPreference: PropTypes.string.isRequired,
};


export default Login;
