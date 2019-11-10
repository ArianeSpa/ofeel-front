/* eslint-disable no-unused-expressions */
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
  showSignupPassword,
  showSignupPasswordConf,
  changeStateShow,
  changeMessageList,
  errorMessagesSignup,
  clearMessageList,
  clearAllAndInform,
}) => {
  const handleChangeNewsletter = (event, data) => {
    const checked = data.checked ? 1 : 0;
    changeNewsletter(checked);
  };

  const handleChangeData = (event, data) => {
    changeUserData(data.id, data.value);
  };

  const changeShow = (event, data) => {
    const { id } = data;
    changeStateShow(id);
  };

  const checkUsername = () => {
    const messageUsername = 'Votre pseudo est trop court. Inscrivez au moins 2 caractères.';
    if (username.length < 2) {
      changeMessageList(messageUsername);
    }
    else {
      clearMessageList(messageUsername);
    }
  };

  const checkEmail = () => {
    const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const messageEmail = 'L\'email que vous avez entré n\'est pas valide.';
    if (!email.match(validFormat)) {
      changeMessageList(messageEmail);
    }
    else {
      clearMessageList(messageEmail);
    }
  };

  const checkPasswordSecurity = () => {
    const messageLetter = 'Votre mot de passe doit contenir au moins 1 lettre.';
    if (!RegExp(/[a-zA-Z]/).test(password)) {
      changeMessageList(messageLetter);
    }
    else {
      clearMessageList(messageLetter);
    }

    const messageNumber = 'Votre mot de passe doit contenir au moins 1 chiffre.';
    if (!RegExp(/\d+/).test(password)) {
      changeMessageList(messageNumber);
    }
    else {
      clearMessageList(messageNumber);
    }

    const messageLength = 'Votre mot de passe doit contenir au moins 8 caractères.';
    if (password.length < 8) {
      changeMessageList(messageLength);
    }
    else {
      clearMessageList(messageLength);
    }
  };

  const checkPasswordConf = () => {
    const messagePasswordConf = 'Vous avez entré deux mots de passe différents.';
    if (password !== passwordConf) {
      changeMessageList(messagePasswordConf);
    }
    else {
      clearMessageList(messagePasswordConf);
    }
  };

  const testAndCreate = () => {
    const messageSubmit = 'Nous ne pouvons pas créer votre compte.';
    if (
      errorMessagesSignup.length === 0
      || (errorMessagesSignup.length === 1 && errorMessagesSignup.includes(messageSubmit))
    ) {
      createAccount();
    }
    else {
      clearAllAndInform(messageSubmit);
      checkUsername();
      checkEmail();
      checkPasswordSecurity();
      checkPasswordConf();
    }
  };

  return (
    <Segment inverted id="signupSegment">
      <Form id="signupForm" inverted onSubmit={testAndCreate}>
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
            onBlur={checkUsername}
            onChange={handleChangeData}
            placeholder="Pseudo"
            value={username}
            required
          />
          <Form.Input
            className="oneField"
            id="email"
            label="Email"
            onBlur={checkEmail}
            onChange={handleChangeData}
            placeholder="email@example.com"
            value={email}
            required
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
            required
          />
          <Form.Input
            className="oneField"
            id="passwordConf"
            label="Confirmez votre mot de passe"
            onBlur={checkPasswordConf}
            onChange={handleChangeData}
            placeholder="********"
            type={showSignupPasswordConf ? 'text' : 'password'}
            value={passwordConf}
            icon={<Icon name={showSignupPasswordConf ? 'eye slash' : 'eye'} id="showSignupPasswordConf" onClick={changeShow} link />}
            required
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
          content="Une erreur s'est produite avec le serveur, veuillez réessayer."
          error
          positive={false}
        />
      )}
      {savedPreference === 'saved' && (
        <MessageModal
          content="Votre compte a bien été créé, vous pouvez maintenant vous connecter !"
          error={false}
          positive
        />
      )}
      {errorMessagesSignup.length !== 0 && (
        <MessageModal
          header="Une erreur s'est produite : "
          list={errorMessagesSignup}
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
  changeMessageList: PropTypes.func.isRequired,
  changeNewsletter: PropTypes.func.isRequired,
  changeStateShow: PropTypes.func.isRequired,
  changeUserData: PropTypes.func.isRequired,
  clearAllAndInform: PropTypes.func.isRequired,
  clearMessageList: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  errorMessagesSignup: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  newsletter: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  passwordConf: PropTypes.string.isRequired,
  savedPreference: PropTypes.string.isRequired,
  showSignupPassword: PropTypes.bool.isRequired,
  showSignupPasswordConf: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default SignUp;
