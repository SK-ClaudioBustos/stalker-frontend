import { ChatSelectedData, useChatContext } from "@/context/chat.context";
import Image from "next/image";
import { ChatItemData } from "./UsersList";
import Avatar2 from "./img/avatar2.png";

export const ChatItem = ({ idChat, userName }: ChatItemData) => {
  const { chatSelected, handleChangeChat } = useChatContext();
  const handleClick = () => {
    const chatData: ChatSelectedData = {
      chatId: idChat,
      chatUserName: userName,
    };
    handleChangeChat(chatData);
  };
  const isChatSelected = chatSelected.chatId === idChat;
  const bgColors = isChatSelected
    ? "bg-orange-400"
    : "bg-gray-500 hover:bg-gray-400 cursor-pointer";
  const buttonClasses = `${bgColors} w-full flex items-center py-2 px-4 gap-4 transition-all duration-300`;
  const buttonOnClickFunction = isChatSelected ? undefined : handleClick;
  return (
    <button onClick={buttonOnClickFunction} className={buttonClasses}>
      <Image
        className="size-16 rounded-full object-cover"
        src={Avatar2}
        alt={`Avatar image from user ${userName}`}
      />
      <span className="text-white font-bold">{userName}</span>
    </button>
  );
};
