// == Import : npm
import React, { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Segment,
  Container,
  Icon,
  CheckboxProps,
  InputOnChangeData,
  FormGroup,
  FormInput,
  FormCheckbox,
} from "semantic-ui-react";

// == Import : local
import { MessageModal } from "@/components/Dashboard/MessageModal/MessageModal";
import "../form.scss";

enum ModalConfigEnum {
  SERVER_ERROR = "serverError",
  ERROR_LIST = "errorList",
  ACCOUNT_CREATED = "accountCreated",
}

type ModalConfigProps = {
  message: string;
  error?: boolean;
  positive?: boolean;
};

const ModalConfig: { [key: string]: ModalConfigProps } = {
  [ModalConfigEnum.SERVER_ERROR]: {
    message: "Une erreur s'est produite avec le serveur, veuillez réessayer.",
    error: true,
  },
  [ModalConfigEnum.ERROR_LIST]: {
    message: "Une erreur s'est produite : ",
    error: true,
  },
  [ModalConfigEnum.ACCOUNT_CREATED]: {
    message:
      "Votre compte a bien été créé, vous pouvez maintenant vous connecter !",
    positive: true,
  },
};

// == Composant
export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
  const [modalDisplay, setModalDisplay] = useState<
    ModalConfigEnum | undefined
  >();

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError(false);
  };

  const checkUsername = () => {
    setUsernameError(username.length <= 2);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const checkEmail = () => {
    const validFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEmailError(!email.match(validFormat));
  };

  const handlePassword = (
    _event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPassword(data.value);
  };

  const checkPasswordSecurity = () => {
    setPasswordErrors([]);

    const messageLetter = "Votre mot de passe doit contenir au moins 1 lettre.";
    const messageNumber =
      "Votre mot de passe doit contenir au moins 1 chiffre.";
    const messageLength =
      "Votre mot de passe doit contenir au moins 8 caractères.";

    const errors = [];
    if (!/[a-zA-Z]/.test(password)) {
      errors.push(messageLetter);
    }
    if (!/\d+/.test(password)) {
      errors.push(messageNumber);
    }
    if (password.length < 8) {
      errors.push(messageLength);
    }

    setPasswordErrors(errors);
  };

  const handlePasswordCheck = (
    _event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPasswordCheck(data.value);
  };

  const checkPasswordConf = () => {
    setPasswordCheckError(password !== passwordCheck);
  };

  const handleNewsletter = (
    _event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    setNewsletter(!!data.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handleShowPasswordCheck = () => {
    setShowPasswordCheck((state) => !state);
  };

  const handleSubmit = () => {
    // Fake submission and success
    setModalDisplay(ModalConfigEnum.ACCOUNT_CREATED);
  };

  return (
    <Segment inverted id="signupSegment">
      <Form id="signupForm" inverted onSubmit={handleSubmit}>
        <p id="signupInfo">
          Pour créez un compte, choisissez un pseudo et renseignez votre email
          de contact. Pour des raisons de sécurité, votre mot de passe doit
          contenir :
        </p>
        <ul id="passwordList">
          <li className="listItem">au moins 8 caractères</li>
          <li className="listItem">au moins 1 chiffre</li>
          <li className="listItem">au moins une lettre</li>
        </ul>
        <FormGroup widths={2} className="formFields">
          <FormInput
            required
            className="oneField"
            id="username"
            label="Pseudo"
            placeholder="Pseudo"
            value={username}
            error={
              usernameError && {
                content: "Saississez au moins 3 caractères.",
              }
            }
            onBlur={checkUsername}
            onChange={handleUsername}
          />
          <FormInput
            required
            className="oneField"
            id="email"
            label="Email"
            placeholder="email@example.com"
            value={email}
            error={
              emailError && {
                content: "L'email saisi n'est pas valide.",
              }
            }
            onBlur={checkEmail}
            onChange={handleEmail}
          />
        </FormGroup>
        <FormGroup widths={2} className="formFields">
          <FormInput
            required
            className="oneField"
            id="password"
            label="Mot de passe"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            value={password}
            icon={
              <Icon
                name={showPassword ? "eye slash" : "eye"}
                id="showSignupPassword"
                onClick={handleShowPassword}
                link
              />
            }
            error={
              !!passwordErrors.length && {
                content: passwordErrors.map((error) => <p>{error}</p>),
              }
            }
            onBlur={checkPasswordSecurity}
            onChange={handlePassword}
          />

          <FormInput
            required
            className="oneField"
            id="passwordConf"
            label="Confirmez votre mot de passe"
            placeholder="********"
            type={showPasswordCheck ? "text" : "password"}
            value={passwordCheck}
            icon={
              <Icon
                name={showPasswordCheck ? "eye slash" : "eye"}
                id="showSignupPasswordConf"
                onClick={handleShowPasswordCheck}
                link
              />
            }
            error={
              passwordCheckError && {
                content: "Le mot de passe saisi est différent.",
              }
            }
            onBlur={checkPasswordConf}
            onChange={handlePasswordCheck}
          />
        </FormGroup>
        <FormGroup className="formFields">
          <FormCheckbox
            id="newsletter"
            label="Inscription à la newsletter"
            checked={newsletter}
            onChange={handleNewsletter}
          />
        </FormGroup>

        <Button type="submit" className="submitButton">
          Submit
        </Button>
      </Form>
      {modalDisplay && (
        <MessageModal
          content={ModalConfig[modalDisplay].message}
          error={ModalConfig[modalDisplay].error}
          positive={ModalConfig[modalDisplay].positive}
        />
      )}

      <Container as={NavLink} className="formLink" exact to="/">
        Déjà inscrit ? Connectez-vous !
      </Container>
    </Segment>
  );
};
