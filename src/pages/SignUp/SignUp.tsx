// == Import : npm
import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// == Import : local
import {
  FormTemplate,
  Typo,
  Flex,
  FormInput,
  FormCheckbox,
} from "@/components";
import { useWindowSize } from "@/hooks";

// == Composant
export const SignUp: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const usernameValidators = () => {
    if (username.length >= 3) return;
    return t("FORM.ERROR.USERNAME");
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const emailValidators = () => {
    const validFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = RegExp(validFormat).exec(email);
    if (isValid) return;
    return t("FORM.ERROR.EMAIL");
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const passwordValidators = () => {
    const errors = [];
    if (!/[a-zA-Z]/.test(password)) {
      errors.push(t("FORM.INFO.PASSWORD_CONDITION_LETTER"));
    }
    if (!/\d+/.test(password)) {
      errors.push(t("FORM.INFO.PASSWORD_CONDITION_DIGIT"));
    }
    if (password.length < 8) {
      errors.push(t("FORM.INFO.PASSWORD_CONDITION_CHARACTERS"));
    }
    if (errors.length === 0) return;
    return `${t("FORM.ERROR.PASSWORD")} ${errors.join(", ")}.`;
  };
  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handlePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };
  const passwordCheckValidators = () => {
    if (password === passwordCheck) return;
    return t("FORM.ERROR.PASSWORD_CONFIRMATION");
  };

  const handleSubmit = () => {
    // @todo
  };

  return (
    <FormTemplate
      buttonLabel={t("COMMON.SUBMIT")}
      link={{
        label: t("LINK.ALREADY_REGISTERED"),
        to: "/",
      }}
      width="600px"
      onSubmit={handleSubmit}
    >
      <Flex gap={8} alignItems="start" mb={5}>
        <Typo color="grey.g5">{t("FORM.INFO.PASSWORD_CONDITION")}</Typo>
        <Typo color="grey.g5" as="ul">
          <Typo as="li" fontStyle="italic">
            {t("FORM.INFO.PASSWORD_CONDITION_CHARACTERS")}
          </Typo>
          <Typo as="li" fontStyle="italic">
            {t("FORM.INFO.PASSWORD_CONDITION_DIGIT")}
          </Typo>
          <Typo as="li" fontStyle="italic">
            {t("FORM.INFO.PASSWORD_CONDITION_LETTER")}
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
            label={t("FORM.LABEL.USERNAME")}
            placeholder={t("FORM.PLACEHOLDER.USERNAME")}
            value={username}
            validators={usernameValidators}
            onChange={handleUsername}
          />
          <FormInput
            required
            id="email"
            label={t("FORM.LABEL.EMAIL")}
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
            label={t("FORM.LABEL.PASSWORD")}
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
            label={t("FORM.LABEL.PASSWORD_CONFIRMATION")}
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
          label={t("FORM.LABEL.NEWSLETTER")}
          checked={newsletter}
          onChange={setNewsletter}
        />
      </Flex>
      {/* @todo add toaster */}
    </FormTemplate>
  );
};
