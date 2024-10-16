import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

import { useAppDistpatch } from "@/app/hooks";

export enum ModalConfigEnum {
  SERVER_ERROR = "serverError",
  ERROR_LIST = "errorList",
  ACCOUNT_CREATED = "accountCreated",
  DATA_SAVED = "dataSaved",
  DATA_NOT_SAVED = "dataNotSaved",
}

type MessageModalProps = {
  content?: string;
  list?: any[];
  positive?: boolean;
  error?: boolean;
};

type ModalConfigProps = {
  message: string;
  error?: boolean;
  positive?: boolean;
};

export const ModalConfigModel: { [key: string]: ModalConfigProps } = {
  [ModalConfigEnum.SERVER_ERROR]: {
    message: "Une erreur s'est produite avec le serveur, veuillez réessayer.",
    error: true,
  },
  [ModalConfigEnum.ERROR_LIST]: {
    message: "Une erreur s'est produite : ",
    error: true,
  },
  [ModalConfigEnum.DATA_NOT_SAVED]: {
    message:
      "Une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion",
    error: true,
  },
  [ModalConfigEnum.DATA_SAVED]: {
    message: "Vos données ont bien été enregistrées",
    positive: true,
  },
  [ModalConfigEnum.ACCOUNT_CREATED]: {
    message:
      "Votre compte a bien été créé, vous pouvez maintenant vous connecter !",
    positive: true,
  },
};

export const MessageModal: React.FC<MessageModalProps> = ({
  content,
  list,
  positive,
  error,
}) => {
  const dispatch = useAppDistpatch();

  useEffect(() => {
    return () => {
      handleDismiss();
    };
  });
  const handleDismiss = () => {
    // TODO add dispatch
    // preferenceSaved("");
  };

  return (
    <Message
      className="messageModal"
      size="tiny"
      compact
      content={content && content}
      list={list}
      onDismiss={handleDismiss}
      positive={positive}
      error={error}
    />
  );
};
