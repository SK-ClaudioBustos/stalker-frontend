import { useChatContext } from "@/context/chat.context";
import { useNewUserConnectedMutation } from "@/generated/graphql";
import { useEffect } from "react";
import { ChatViewContent } from "./ChatViewContent";
import { UsersList } from "./UsersList";

export const ChatView = () => {
  const [newUserConnectedMutation, { loading, error }] =
    useNewUserConnectedMutation();
  const { userName } = useChatContext();

  useEffect(() => {
    newUserConnectedMutation({ variables: { userName } });
  },[]);

  if (error) {
    return <h1>Ocurrio un error al iniciar sesión</h1>;
  }
  return (
    <main className="grid grid-cols-4 h-[calc(100dvh-96px)]">
      {loading ? (
        <span className="col-span-4">Iniciando Sesión...</span>
      ) : (
        <>
          <UsersList />
          <ChatViewContent />
        </>
      )}
    </main>
  );
};
