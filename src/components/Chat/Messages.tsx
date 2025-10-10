import { useChatContext } from "@/context/chat.context";
import { ChatBubble } from "./ChatBubble";

export const Messages = () => {
  const { errorMessage, messages, chatSelected, userName } = useChatContext();

  if (errorMessage) {
    return (
      <span className="text-red-500">{`ERROR: ${errorMessage.name}`}</span>
    );
  }

  const chatMessages = messages.filter(
    (message) => chatSelected.chatId == `${userName}_${message.from}`
  );
  console.info(chatMessages);
  return (
    <div className="flex flex-col p-2 grow">
      {chatMessages.length > 0 &&
        chatMessages.map((message) => <ChatBubble key={message.id} {...message} />)}
    </div>
  );
};
