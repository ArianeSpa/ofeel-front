// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Form, Segment, Container, Checkbox,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import SavedModal from 'src/containers/Dashboard/SavedModal';

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
            type="password"
            value={password}
          />
          <Form.Input
            className="oneField"
            id="passwordConf"
            label="Confirmez votre mot de passe"
            onChange={handleChangeData}
            placeholder="********"
            type="password"
            value={passwordConf}
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
        <SavedModal
          content="Une erreur s'est produite, veuillez réessayer."
          error
          positive={false}
        />
      )}
      {savedPreference === 'saved' && (
        <SavedModal
          content="Votre compte a bien été créé, surveillez vos spams !"
          error={false}
          positive
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
  changeUserData: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  newsletter: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  passwordConf: PropTypes.string.isRequired,
  savedPreference: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default SignUp;
