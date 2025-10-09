import Image from "next/image";
import Avatar1 from "./img/avatar1.png";
import Avatar2 from "./img/avatar2.png";
import { MessageData } from "./ChatRoom";

export const ChatBubble = ({
  from,
  message,
  isMessageFromUser,
  time,
}: MessageData) => {
  const bubbleContainerClasses = `flex items-start gap-2.5 mb-4 ${
    isMessageFromUser ? "justify-[flex-end] flex-row-reverse" : "justify-start"
  }`;
  const messageContainerClasses = `flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 
    ${
      isMessageFromUser
        ? "rounded-ee-xl rounded-s-xl"
        : "rounded-es-xl rounded-e-xl"
    }
  dark:bg-gray-700`;
  const avatarImg = isMessageFromUser ? Avatar1 : Avatar2;
  return (
    <div className={bubbleContainerClasses}>
      <Image
        className="w-8 h-8 rounded-full"
        src={avatarImg}
        alt="User avatar image"
      />
      <div className={messageContainerClasses}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {!isMessageFromUser && (
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {from}
            </span>
          )}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {message}
        </p>
      </div>
    </div>
  );
};
