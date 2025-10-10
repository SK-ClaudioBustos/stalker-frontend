import { ChatItem } from "./ChatItem";

export type ChatItemData = {
  idChat: string;
  userName: string;
};

const USERS: ChatItemData[] = [
  {
    idChat: "claudio_cesar",
    userName: "Cesar",
  },

  {
    idChat: "claudio_roxana",
    userName: "Roxana",
  },
];

export const ChatList = () => {
  if (USERS.length <= 0) {
    return (
      <span className="text-center mt-8 font-bold">No hay usuarios conectados aún</span>
    );
  }
  return (
    <section>
      <div className="divide-y divide-gray-200">
        {USERS.map((chatItem) => (
          <ChatItem {...chatItem} key={chatItem.idChat} />
        ))}
      </div>
    </section>
  );
};
