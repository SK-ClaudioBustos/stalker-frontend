import { MessageData } from "@/context/chat.provider";
import { getChatBubbleStyles } from "@/utils/getChatBubbleStyles ";
import Image from "next/image";

export const ChatBubble = ({
  from,
  message,
  isMessageFromUser,
  time,
}: MessageData) => {
  const { bubbleContainerClasses, avatarImg, messageContainerClasses } =
    getChatBubbleStyles(isMessageFromUser);
  return (
    <div className={bubbleContainerClasses}>
      <Image
        className="size-8 rounded-full object-cover"
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
