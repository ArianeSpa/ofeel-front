// == Import : npm
import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Segment,
  Container,
  Icon,
  InputOnChangeData,
  FormGroup,
  FormInput,
  FormCheckbox,
  CheckboxProps,
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
} from "semantic-ui-react";

// == Import : local
import { useAppDistpatch } from "@/app/hooks";
import { logIn } from "@/store/reducers/user.slice";
import "../form.scss";

// == Composant
export const Login: React.FC = () => {
  const dispatch = useAppDistpatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("remember")) {
      setRememberMe(true);
      setUsername(JSON.parse(localStorage.getItem("username") || ""));
      setPassword(JSON.parse(localStorage.getItem("password") || ""));
    }
  }, []);

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (
    _event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPassword(data.value);
  };

  const handleRememberMe = (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    setRememberMe(!!data.checked);
  };

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const authenticate = () => {
    if (username && password) {
      dispatch(logIn({ username, password, rememberMe }));
    }
  };
  return (
    <Segment id="loginSegment">
      <Form inverted onSubmit={authenticate}>
        <FormGroup widths={2} className="formFields" id="loginFields">
          <FormInput
            required
            id="username"
            className="oneField"
            label="Pseudo"
            placeholder="Saisissez votre pseudo"
            type="text"
            value={username}
            onChange={handleUsername}
          />

          <FormInput
            required
            id="password"
            className="oneField"
            label="Mot de passe"
            placeholder="Saisissez votre mot de passe"
            type={showPassword ? "text" : "password"}
            value={password}
            icon={
              <Icon
                link
                id="showLoginPassword"
                name={showPassword ? "eye slash" : "eye"}
                onClick={handleShowPassword}
              />
            }
            onChange={handlePassword}
          />
        </FormGroup>
        <FormGroup className="formFields">
          <FormCheckbox
            label="Se souvenir de moi"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
        </FormGroup>
        <Button type="submit" className="submitButton">
          Submit
        </Button>
      </Form>

      {/**  @todo add user info in case of login error */}
      <Modal
        size="mini"
        open={openErrorModal}
        onClose={() => setOpenErrorModal(false)}
      >
        <ModalHeader>{`Une erreur s'est produite`}</ModalHeader>
        <ModalContent>
          <p>Message</p>
        </ModalContent>
        <ModalActions>
          <Button positive onClick={() => setOpenErrorModal(false)}>
            OK
          </Button>
        </ModalActions>
      </Modal>

      <Container as={NavLink} className="formLink" to="/signup">
        Pas encore inscrit ? Créez un compte !
      </Container>
    </Segment>
  );
};
