import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

type MessageModalProps = {
  content?: string;
  list?: any[];
  preferenceSaved: (value: string) => void;
  positive?: boolean;
  error?: boolean;
};

export const MessageModal: React.FC<MessageModalProps> = ({
  preferenceSaved,
  content,
  list,
  positive,
  error,
}) => {
  useEffect(() => {
    return () => {
      handleDismiss();
    };
  });
  const handleDismiss = () => {
    preferenceSaved("");
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
