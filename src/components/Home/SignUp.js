// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Form, Segment, Container, Checkbox, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import MessageModal from 'src/containers/Dashboard/MessageModal';

// == Composant
const SignUp = ({
  changeNewsletter,
  changeUserData,
  createAccount,
  email,
  newsletter,
  password,
  passwordConf,
  savedPreference,
  username,
  showMessage,
  message,
  showSignupPassword,
  showSignupPasswordConf,
  changeStateShow,
}) => {
  const handleChangeNewsletter = (event, data) => {
    const checked = data.checked ? 1 : 0;
    changeNewsletter(checked);
  };

  const handleChangeData = (event, data) => {
    changeUserData(data.id, data.value);
  };

  const testBefore = () => {
    if (password === passwordConf && email.trim() !== '' && username.trim() !== '') {
      // changeUserData('savedPreference', 'saved');
      createAccount();
    }
    else {
      changeUserData('savedPreference', 'notsaved');
    }
  };

  const checkPasswordSecurity = (event) => {
    // const { value } = event.target;
    // const containLetter = RegExp(/[a-zA-Z]/).test(value);
    // const containNumber = RegExp(/\d+/).test(value);
    // const lengthPassword = value.length > 8;
    // return ({
    //   containLetter,
    //   containNumber,
    //   lengthPassword,
    // });
  };

  const checkUsername = (event) => {
    const { value } = event.target;
    if (value === '') {
      showMessage('message', 'Attention, vous n\'avez entré aucun pseudo.');
    }
  };

  const changeShow = (event, data) => {
    const { id } = data;
    changeStateShow(id);
  };

  return (
    <Segment inverted id="signupSegment">
      <Form id="signupForm" inverted onSubmit={testBefore}>
        <p id="signupInfo">
          Pour créez un compte, choisissez un pseudo et renseignez votre email de contact. Pour des raisons de sécurité, votre mot de passe doit contenir :
        </p>
        <ul id="passwordList">
          <li className="listItem">au moins 8 caractères</li>
          <li className="listItem">au moins 1 chiffre</li>
          <li className="listItem">au moins une lettre</li>
        </ul>
        <Form.Group
          widths={2}
          className="formFields"
        >
          <Form.Input
            className="oneField"
            id="username"
            label="Pseudo"
            onChange={handleChangeData}
            onBlur={checkUsername}
            placeholder="Pseudo"
            value={username}
          />
          <Form.Input
            className="oneField"
            id="email"
            label="Email"
            onChange={handleChangeData}
            placeholder="email@example.com"
            value={email}
          />
        </Form.Group>
        <Form.Group
          widths={2}
          className="formFields"
        >
          <Form.Input
            className="oneField"
            id="password"
            label="Mot de passe"
            onBlur={checkPasswordSecurity}
            onChange={handleChangeData}
            placeholder="********"
            type={showSignupPassword ? 'text' : 'password'}
            value={password}
            icon={<Icon name={showSignupPassword ? 'eye slash' : 'eye'} id="showSignupPassword" onClick={changeShow} link />}
          />
          <Form.Input
            className="oneField"
            id="passwordConf"
            label="Confirmez votre mot de passe"
            onChange={handleChangeData}
            placeholder="********"
            type={showSignupPasswordConf ? 'text' : 'password'}
            value={passwordConf}
            icon={<Icon name={showSignupPasswordConf ? 'eye slash' : 'eye'} id="showSignupPasswordConf" onClick={changeShow} link />}

          />
        </Form.Group>
        <Form.Group
          className="formFields"
        >
          <Checkbox
            checked={newsletter === 1}
            id="newsletter"
            label="Inscription à la newsletter"
            onChange={handleChangeNewsletter}
            value="newsletter"
          />
        </Form.Group>

        <Button type="submit" className="submitButton">Submit</Button>
      </Form>
      {savedPreference === 'notsaved' && (
        <MessageModal
          content="Une erreur s'est produite, veuillez réessayer."
          error
          positive={false}
        />
      )}
      {savedPreference === 'saved' && (
        <MessageModal
          content="Votre compte a bien été créé, surveillez vos spams !"
          error={false}
          positive
        />
      )}
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
        exact
        to="/"
      >
        Déjà inscrit ? Connectez-vous !
      </Container>
    </Segment>
  );
};

SignUp.propTypes = {
  changeNewsletter: PropTypes.func.isRequired,
  changeStateShow: PropTypes.func.isRequired,
  changeUserData: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  newsletter: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  passwordConf: PropTypes.string.isRequired,
  savedPreference: PropTypes.string.isRequired,
  showMessage: PropTypes.func.isRequired,
  showSignupPassword: PropTypes.bool.isRequired,
  showSignupPasswordConf: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default SignUp;
