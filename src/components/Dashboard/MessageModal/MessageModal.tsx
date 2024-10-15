import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

import { useAppDistpatch } from "@/app/hooks";

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
