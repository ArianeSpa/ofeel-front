// == Import : npm
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Flex } from "react-rocket-ui";

// == Import : local
import { useAppDistpatch } from "@/hooks";
import { logIn } from "@/store";
import { FormCheckbox, FormInput, FormTemplate } from "@/components";

// == Composant
export const LogIn: React.FC = () => {
  const dispatch = useAppDistpatch();
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("remember")) {
      setRememberMe(true);
      setUsername(JSON.parse(localStorage.getItem("username") ?? ""));
      setPassword(JSON.parse(localStorage.getItem("password") ?? ""));
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

  return (
    <FormTemplate
      buttonLabel={t("COMMON.LOGIN")}
      link={{
        to: "./signup",
        label: t("LINK.NOT_REGISTERED"),
      }}
      onSubmit={authenticate}
    >
      <Flex gap={10} fullWidth alignItems="start">
        <FormInput
          required
          id="username-input"
          label={t("FORM.LABEL.USERNAME")}
          placeholder={t("FORM.PLACEHOLDER.USERNAME")}
          value={username}
          onChange={handleUsername}
        />
        <FormInput
          required
          id="password-input"
          label={t("FORM.LABEL.PASSWORD")}
          placeholder={t("FORM.PLACEHOLDER.PASSWORD")}
          type={showPassword ? "text" : "password"}
          value={password}
          iconPosition="right"
          icon={showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          onChange={handlePassword}
          onIconClick={handleShowPassword}
        />
        <FormCheckbox
          id="remember-me-checkbox"
          label={t("FORM.LABEL.REMEMBER_ME")}
          checked={rememberMe}
          onChange={handleRememberMe}
        />
      </Flex>

      {/**  @todo add toaster */}
    </FormTemplate>
  );
};
