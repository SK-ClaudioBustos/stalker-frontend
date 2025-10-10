import { ChatRoomHeader } from "./ChatRoomHeader";
import { Messages } from "./Messages";
import { SendMessageBox } from "./SendMessageBox";

export const ChatRoom = () => {
  return (
    <div className="flex flex-col h-full bg-gray-300">
      <ChatRoomHeader />
      <Messages />
      <SendMessageBox />
    </div>
  );
};
