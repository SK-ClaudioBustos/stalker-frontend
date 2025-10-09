import { usePublishMessageSubscription } from "@/generated/graphql";
import { useEffect, useState } from "react";
import { ChatBubble } from "./ChatBubble";
import { SendMessageBox } from "./SendMessageBox";
import { getActualLocaleTime } from "@/utils/getActualLocaleTime";

export type MessageData = {
  from: string;
  message: string;
  isMessageFromUser: boolean;
  time: string;
};

export const ChatRoom = ({ userName }: { userName: string }) => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const { data: dataMessage, error: errorMessage } =
    usePublishMessageSubscription({ variables: { to: userName } });

  const handleAddMessages = (newMessage: MessageData) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (dataMessage?.publishMessage) {
      const { from, message, dateTime } = dataMessage.publishMessage;
      const time = getActualLocaleTime(dateTime);
      const messageData: MessageData = {
        from,
        message,
        isMessageFromUser: from === userName,
        time: time,
      };
      handleAddMessages(messageData);
    }
  }, [dataMessage]);

  if (errorMessage) {
    return (
      <span className="text-red-500">{`ERROR: ${errorMessage.name}`}</span>
    );
  }
  return (
    <section className="mt-4 bg-gray-300 p-4 w-full min-h-96 grid">
      <article className="flex flex-col">
        {messages.length > 0 &&
          messages.map((message, index) => (
            <ChatBubble key={index} {...message} />
          ))}
      </article>
      <SendMessageBox
        userName={userName}
        handleAddMessages={handleAddMessages}
      />
    </section>
  );
};
