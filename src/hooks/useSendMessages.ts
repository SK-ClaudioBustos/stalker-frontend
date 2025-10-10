import { useChatContext } from "@/context/chat.context";
import { MessageData } from "@/context/chat.provider";
import { useSendMessageMutation } from "@/generated/graphql";
import { getActualLocaleTime } from "@/utils/getActualLocaleTime";
import { FormEvent, useRef } from "react";

export const useSendMessages = () => {
  const { userName, handleAddMessages } = useChatContext();
  const [sendMessageMutation, { loading, error }] = useSendMessageMutation();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Obtengo el mensaje del formulario
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string;
    const to = "cesar";
    const actualDateTime = new Date();
    const dateTime = actualDateTime.toString();

    // Envío el mensaje al destinatario
    const messageCreatedOutput = await sendMessageMutation({
      variables: {
        args: {
          from: userName,
          message,
          to,
          dateTime,
        },
      },
    });

    // Agrego el mensaje enviado al chat
    const newMessage: MessageData = {
      id: messageCreatedOutput.data?.sendMessage.id!,
      from: userName,
      message,
      isMessageFromUser: true,
      time: getActualLocaleTime(dateTime),
    };
    handleAddMessages(newMessage);

    // Limpio el formulario
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return {
    formRef,
    loading,
    error,
    handleSubmitMessage,
  };
};
