// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, Segment, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './form.scss';
import SavedModal from 'src/containers/Dashboard/SavedModal';


// == Composant
const SignUp = ({
  username,
  email,
  password,
  passwordConf,
  createAccount,
  changeNewsletter,
  newsletter,
  savedPreference,
  changeUserData,
}) => {
  const handleChangeNewsletter = (event, data) => {
    const checked = data.checked ? 1 : 0;
    changeNewsletter(checked);
  };

  const handleChangeData = (event, data) => {
    changeUserData(data.id, data.value);
  }

  const testBefore = () => {
    if (password === passwordConf && email.trim() !='' && username.trim() !=''){
      console.log('ok');
      // changeUserData('savedPreference', 'saved');
      createAccount();

    } else {
      changeUserData('savedPreference', 'notsaved');
    }
  }

  return (
    <Segment inverted className="block">
      <Form inverted onSubmit={testBefore}>
        <Form.Group className="infoPassword">
          <p>Pour créez un compte, renseignez ci-dessous votre pseudo et votre email de contact. Vous recevrez un lien par email pour personnaliser votre mot de passe et finaliser votre inscription.</p>
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input value={username} id='username' onChange={handleChangeData} label="Pseudo" placeholder="Pseudo" />
          <Form.Input value={email} id='email' onChange={handleChangeData} label="Email" placeholder="email@example.com" />
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input value={password} id='password' onChange={handleChangeData} label="Mot de passe" type='password' placeholder="********" />
          <Form.Input value={passwordConf} id='passwordConf' onChange={handleChangeData} label="Confirmez votre mot de passe" type='password' placeholder="********" />
        </Form.Group>
        <Form.Checkbox
          value="newsletter"
          label="Inscription à la newsletter"
          id="newsletter"
          checked={newsletter === 1}
          onChange={handleChangeNewsletter}
        />
        <Form.Checkbox label="J'accepte les conditions générales" />

        <Button type="submit" className="submit">Submit</Button>
      </Form>
      {savedPreference === 'notsaved' && <SavedModal content="Une erreur s'est produite, veuillez réessayer." positive={false} error />}
      {savedPreference === 'saved' && <SavedModal content="Votre compte a bien été créé, surveillez vos spams !" positive error={false} />}
      

      <Divider horizontal>
        Déjà inscrit ? <Link to="/" className="signupLink">Connectez-vous !</Link>
      </Divider>
    </Segment>
  );
};

SignUp.propTypes = {
  changeUserData: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createAccount: PropTypes.func.isRequired,
  changeNewsletter: PropTypes.func.isRequired,
  newsletter: PropTypes.number.isRequired,
  savedPreference: PropTypes.string.isRequired,
};

export default SignUp;
