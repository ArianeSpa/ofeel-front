// == Import : npm
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// == Import : local
import { useAppDistpatch } from "@/hooks/store.hook";
import { logIn } from "@/store/reducers/user.slice";
import { Flex, FormCheckbox, FormInput, FormTemplate } from "@/components";

// == Composant
export const LogIn: React.FC = () => {
  const dispatch = useAppDistpatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const handleRememberMe = (value: boolean) => {
    setRememberMe(value);
  };

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const authenticate = () => {
    if (username && password) {
      dispatch(logIn({ username, password, rememberMe }));
    }
  };

  const link = {
    to: "./signup",
    label: "Pas encore inscrit ? Créez un compte !",
  };
  return (
    <FormTemplate buttonLabel="Submit" link={link} onSubmit={authenticate}>
      <Flex gap={20} width="100%" alignItems="start">
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
        <FormCheckbox
          id="remember-me-checkbox"
          label="Se souvenir de moi"
          checked={rememberMe}
          onChange={handleRememberMe}
        />
      </Flex>

      {/**  @todo add toaster */}
    </FormTemplate>
  );
};
