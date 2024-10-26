// == Import : npm
import React, { ChangeEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Form,
  Segment,
  Container,
  FormGroup,
  FormCheckbox,
  CheckboxProps,
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
  Button as SemanticButton,
} from "semantic-ui-react";

// == Import : local
import { useAppDistpatch } from "@/hooks/store.hook";
import { logIn } from "@/store/reducers/user.slice";
import "./form.scss";
import { Button, Flex, FormInput } from "@/components";

// == Composant
export const LogIn: React.FC = () => {
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

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
      <Flex gap={20} width="100%">
        <FormInput
          required
          id="username-input"
          label="Pseudo"
          placeholder="Saisissez votre pseudo"
          value={username}
          onChange={handleUsername}
        />
        <FormInput
          required
          id="password-input"
          label="Mot de passe"
          placeholder="Saisissez votre mot de passe"
          type={showPassword ? "text" : "password"}
          value={password}
          iconPosition="left"
          icon={showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          onChange={handlePassword}
          onIconClick={handleShowPassword}
        />
      </Flex>

      <Form inverted onSubmit={authenticate}>
        <FormGroup widths={2} className="formFields" id="loginFields" />
        <FormGroup className="formFields">
          <FormCheckbox
            label="Se souvenir de moi"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
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
          <SemanticButton positive onClick={() => setOpenErrorModal(false)}>
            OK
          </SemanticButton>
        </ModalActions>
      </Modal>

      <Container as={NavLink} className="formLink" to="/signup">
        Pas encore inscrit ? Créez un compte !
      </Container>
    </Segment>
  );
};
