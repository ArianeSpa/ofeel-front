// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Checkbox, Form, Segment, Container, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import MessageModal from 'src/containers/Dashboard/MessageModal';


// == Composant
const Login = ({
  changeUserData,
  username,
  password,
  doAuthenticate,
  message,
  showLoginPassword,
  changeStateShow,
}) => {
  const handleChangeData = (event, data) => {
    changeUserData(data.id, data.value);
  };
  const changeShow = (event, data) => {
    const { id } = data;
    changeStateShow(id);
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
            type={showLoginPassword ? 'text' : 'password'}
            value={password}
            icon={<Icon name={showLoginPassword ? 'eye slash' : 'eye'} id="showLoginPassword" onClick={changeShow} link />}

          />
        </Form.Group>
        <Form.Group
          className="formFields"
        >
          <Checkbox label="Se souvenir de moi" />
        </Form.Group>
        <Button type="submit" className="submitButton">Submit</Button>
      </Form>
      {message !== '' && (
        <MessageModal
          content={message}
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
  changeStateShow: PropTypes.func.isRequired,
  changeUserData: PropTypes.func.isRequired,
  doAuthenticate: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showLoginPassword: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default Login;
