import { useChatContext } from "@/context/chat.context";
import { ChatRoom } from "./ChatRoom";
import { NoSelectedChat } from "./NoSelectedChat";

export const ChatViewContent = () => {
  const { chatSelected } = useChatContext();
  return (
    <div className="col-span-3">
      {chatSelected.chatId === "no_selected" ? (
        <NoSelectedChat />
      ) : (
        <ChatRoom />
      )}
    </div>
  );
};
