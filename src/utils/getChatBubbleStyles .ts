import Avatar1 from "../components/Chat/img/avatar1.png";
import Avatar2 from "../components/Chat/img/avatar2.png";

export const getChatBubbleStyles  = (isMessageFromUser: boolean) => {
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
  return {
    avatarImg,
    messageContainerClasses,
    bubbleContainerClasses,
  };
};
