import { ChatList } from "./ChatList";
import { ChatViewContent } from "./ChatViewContent";

export const ChatView = () => {
  return (
    <main className="grid grid-cols-4 h-[calc(100dvh-96px)]">
      <ChatList />
      <ChatViewContent />
    </main>
  );
};
