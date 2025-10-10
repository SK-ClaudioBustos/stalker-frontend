import { ApolloError } from "@apollo/client";
import { createContext, useContext } from "react";
import { MessageData } from "./chat.provider";

export type ChatSelectedData = {
  chatId: string;
  chatUserName: string;
};

export interface ChatContextValueType {
  chatSelected: ChatSelectedData;
  userName: string;
  errorMessage: ApolloError | undefined;
  messages: MessageData[];
  handleChangeChat: (chatId: ChatSelectedData) => void;
  handleAddMessages: (newMessage: MessageData) => void;
}

const initValue: ChatContextValueType = {
  chatSelected: {
    chatId: "",
    chatUserName: "",
  },
  errorMessage: undefined,
  userName: "",
  messages: [],
  handleChangeChat: () => {},
  handleAddMessages: () => {},
};

export const ChatContext = createContext<ChatContextValueType>(initValue);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error(
      "useChatContext debe usarse desde un componente que este envuelto en el provider"
    );
  }
  return context;
};
