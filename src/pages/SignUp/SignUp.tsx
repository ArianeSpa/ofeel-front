// == Import : npm
import React, { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// == Import : local
import {
  FormTemplate,
  Typo,
  Flex,
  FormInput,
  FormCheckbox,
} from "@/components";
import { useWindowSize } from "@/hooks/window.hook";

// == Composant
export const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { isDesktop } = useWindowSize();

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const usernameValidators = () => {
    if (username.length >= 3) return;
    return "Saississez au moins 3 caractères.";
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const emailValidators = () => {
    const validFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = email.match(validFormat);
    if (isValid) return;
    return "L'email saisi n'est pas valide.";
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const passwordValidators = () => {
    const errors = [];
    if (!/[a-zA-Z]/.test(password)) {
      errors.push("1 lettre");
    }
    if (!/\d+/.test(password)) {
      errors.push("1 chiffre");
    }
    if (password.length < 8) {
      errors.push("8 caractères");
    }
    if (errors.length === 0) return;
    return `Votre mot de passe doit contenir au moins ${errors.join(", ")}.`;
  };
  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handlePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };
  const passwordCheckValidators = () => {
    if (password === passwordCheck) return;
    return "Le mot de passe saisi est différent.";
  };

  const handleSubmit = () => {
    // @todo
  };

  const link = {
    label: "Déjà inscrit ? Connectez-vous !",
    to: "/",
  };
  return (
    <FormTemplate
      buttonLabel="Submit"
      link={link}
      width="600px"
      onSubmit={handleSubmit}
    >
      <Flex gap={8} alignItems="start" margin="0 0 20px">
        <Typo color="grey.g5">
          Pour créez un compte, choisissez un pseudo et renseignez votre email
          de contact. Pour des raisons de sécurité, votre mot de passe doit
          contenir :
        </Typo>
        <Typo color="grey.g5" as="ul">
          <Typo as="li" fontStyle="italic">
            au moins 8 caractères
          </Typo>
          <Typo as="li" fontStyle="italic">
            au moins 1 chiffre
          </Typo>
          <Typo as="li" fontStyle="italic">
            au moins une lettre
          </Typo>
        </Typo>
      </Flex>
      <Flex gap={20} alignItems="stretch">
        <Flex
          gap={12}
          flexDirection="row"
          alignItems="start"
          flexWrap={isDesktop ? "no-wrap" : "wrap"}
        >
          <FormInput
            required
            id="username"
            label="Pseudo"
            placeholder="Saisissez un pseudo"
            value={username}
            validators={usernameValidators}
            onChange={handleUsername}
          />
          <FormInput
            required
            id="email"
            label="Email"
            placeholder="email@example.com"
            value={email}
            validators={emailValidators}
            onChange={handleEmail}
          />
        </Flex>
        <Flex
          gap={12}
          flexDirection="row"
          alignItems="start"
          flexWrap={isDesktop ? "no-wrap" : "wrap"}
        >
          <FormInput
            required
            id="password"
            label="Mot de passe"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            value={password}
            iconPosition="right"
            icon={showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            validators={passwordValidators}
            onChange={handlePassword}
            onIconClick={handleShowPassword}
          />
          <FormInput
            required
            id="passwordConf"
            label="Confirmez votre mot de passe"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            value={passwordCheck}
            iconPosition="right"
            icon={showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            validators={passwordCheckValidators}
            onChange={handlePasswordCheck}
            onIconClick={handleShowPassword}
          />
        </Flex>
        <FormCheckbox
          id="newsletter"
          label="Inscription à la newsletter"
          checked={newsletter}
          onChange={setNewsletter}
        />
      </Flex>
      {/* @todo add toaster */}
    </FormTemplate>
  );
};
