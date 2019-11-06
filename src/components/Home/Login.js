// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Checkbox, Form, Segment, Container,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import SavedModal from 'src/containers/Dashboard/SavedModal';


// == Composant
const Login = ({
  changeUserData, username, password, doAuthenticate, savedPreference,
}) => {
  const handleChangeData = (event, data) => {
    changeUserData(data.id, data.value);
  };
  return (
    <Segment inverted id="loginSegment">
      <Form inverted onSubmit={doAuthenticate}>
        <Form.Group
          className="formFields"
          id="loginFields"
          widths={2}
        >
          <Form.Input
            className="oneField"
            id="username"
            label="Pseudo"
            onChange={handleChangeData}
            placeholder="Pseudo"
            value={username}
          />
          <Form.Input
            className="oneField"
            id="password"
            label="Mot de passe"
            onChange={handleChangeData}
            placeholder="Mot de passe"
            type="password"
            value={password}
          />
        </Form.Group>
        <Form.Group
          className="formFields"
        >
          <Checkbox label="Se souvenir de moi" />
        </Form.Group>
        <Button type="submit" className="submitButton">Submit</Button>
      </Form>
      {savedPreference === 'notsaved' && (
        <SavedModal
          content="Erreur de pseudo ou de mot de passe."
          error
          positive={false}
        />
      )}
      <Container
        as={NavLink}
        className="formLink"
        to="/signup"
      >
        Pas encore inscrit ? Créez un compte !
      </Container>
    </Segment>
  );
};

Login.propTypes = {
  changeUserData: PropTypes.func.isRequired,
  doAuthenticate: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  savedPreference: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Login;
