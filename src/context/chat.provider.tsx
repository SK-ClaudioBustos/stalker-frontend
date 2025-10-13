import { usePublishMessageSubscription } from "@/generated/graphql";
import { getActualLocaleTime } from "@/utils/getActualLocaleTime";
import { PropsWithChildren, useEffect, useState } from "react";
import {
  ChatContext,
  ChatContextValueType,
  ChatSelectedData,
} from "./chat.context";

export type MessageData = {
  id: string,
  from: string;
  message: string;
  isMessageFromUser: boolean;
  time: string;
};

export interface ProviderContextProps extends PropsWithChildren {
  userName: string;
}

export const ChatProvider = ({
  userName,
  children,
}: ProviderContextProps) => {
  const [chatSelected, setChatSelected] = useState<ChatSelectedData>({
    chatId: "no_selected",
    chatUserName: "",
  });

  const [messages, setMessages] = useState<MessageData[]>([]);
  const { data: dataMessage, error: errorMessage } =
    usePublishMessageSubscription({ variables: { to: userName } });

  const handleAddMessages = (newMessage: MessageData) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (dataMessage?.publishMessage) {
      const { from, message, dateTime, id } = dataMessage.publishMessage;
      const time = getActualLocaleTime(dateTime);
      const messageData: MessageData = {
        from,
        message,
        isMessageFromUser: from === userName,
        time: time,
        id
      };
      handleAddMessages(messageData);
    }
  }, [dataMessage]);

  const handleChangeChat = (chatSelected: ChatSelectedData) => {
    setChatSelected(chatSelected);
  };

  const value: ChatContextValueType = {
    chatSelected,
    userName,
    errorMessage,
    messages,
    handleChangeChat,
    handleAddMessages,
  };
  return <ChatContext value={value}>{children}</ChatContext>;
};
