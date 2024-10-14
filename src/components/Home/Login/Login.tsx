// == Import : npm
import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Segment,
  Container,
  Icon,
  InputOnChangeData,
} from "semantic-ui-react";

// == Import : local
import "../form.scss";
import MessageModalContainer from "@/components/Dashboard/MessageModal/MessageModalContainer";

type LoginProps = {
  message: string;
  password: string;
  username: string;
  showLoginPassword: boolean;
  changeStateShow: (id: any) => void;
  changeUserData: (id: any, value: string) => void;
  doAuthenticate: () => void;
};
// == Composant
export const Login: React.FC<LoginProps> = ({
  changeUserData,
  username,
  password,
  doAuthenticate,
  message,
  showLoginPassword,
  changeStateShow,
}) => {
  const handleChangeData = (
    _event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    changeUserData(data.id, data.value);
  };
  const changeShow = (event: any, data: any) => {
    const { id } = data;
    changeStateShow(id);
  };
  return (
    <Segment inverted id="loginSegment">
      <Form inverted onSubmit={doAuthenticate}>
        <Form.Group className="formFields" id="loginFields" widths={2}>
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
            type={showLoginPassword ? "text" : "password"}
            value={password}
            icon={
              <Icon
                name={showLoginPassword ? "eye slash" : "eye"}
                id="showLoginPassword"
                onClick={changeShow}
                link
              />
            }
          />
        </Form.Group>
        <Form.Group className="formFields">
          <Checkbox label="Se souvenir de moi" />
        </Form.Group>
        <Button type="submit" className="submitButton">
          Submit
        </Button>
      </Form>
      {message !== "" && (
        <MessageModalContainer content={message} error positive={false} />
      )}
      <Container as={NavLink} className="formLink" to="/signup">
        Pas encore inscrit ? Créez un compte !
      </Container>
    </Segment>
  );
};
