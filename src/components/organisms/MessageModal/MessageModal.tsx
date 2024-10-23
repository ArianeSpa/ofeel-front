import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Message } from "semantic-ui-react";

export enum ModalConfigEnum {
  SERVER_ERROR = "serverError",
  ERROR_CUSTOM = "errorCustom",
  ACCOUNT_CREATED = "accountCreated",
  DATA_SAVED = "dataSaved",
  DATA_NOT_SAVED = "dataNotSaved",
}

type ModalConfigProps = {
  message: string;
  error?: boolean;
  positive?: boolean;
};

export const ModalConfigModel: { [key: string]: ModalConfigProps } = {
  [ModalConfigEnum.SERVER_ERROR]: {
    message: "COMMON.MODAL_MESSAGE.SERVER_ERROR",
    error: true,
  },
  [ModalConfigEnum.ERROR_CUSTOM]: {
    message: "COMMON.MODAL_MESSAGE.ERROR_CUSTOM",
    error: true,
  },
  [ModalConfigEnum.DATA_NOT_SAVED]: {
    message: "COMMON.MODAL_MESSAGE.DATA_NOT_SAVED",
    error: true,
  },
  [ModalConfigEnum.DATA_SAVED]: {
    message: "COMMON.MODAL_MESSAGE.DATA_SAVED",
    positive: true,
  },
  [ModalConfigEnum.ACCOUNT_CREATED]: {
    message: "COMMON.MODAL_MESSAGE.ACCOUNT_CREATED",
    positive: true,
  },
};

type MessageModalProps = {
  content?: string;
  list?: any[];
  positive?: boolean;
  error?: boolean;
};
export const MessageModal: React.FC<MessageModalProps> = ({
  content,
  list,
  positive,
  error,
}) => {
  const { t } = useTranslation();

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
      content={content && t(content)}
      list={list}
      onDismiss={handleDismiss}
      positive={positive}
      error={error}
    />
  );
};
