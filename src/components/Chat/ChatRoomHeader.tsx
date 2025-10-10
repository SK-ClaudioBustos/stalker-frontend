import { useChatContext } from "@/context/chat.context";

export const ChatRoomHeader = () => {
  const { chatSelected } = useChatContext();
  return (
    <div className="bg-gray-700 px-2 py-4">
      <span className="text-white text-">{chatSelected.chatUserName}</span>
    </div>
  );
};
