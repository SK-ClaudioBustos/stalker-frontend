import {
  useUsersConnectedContext
} from "@/context/usersConnected.context";
import { ChatItem } from "./ChatItem";

export const UsersList = () => {
  const { usersConnected, loadingUsersConnected, errorUsersConnected } =
    useUsersConnectedContext();

  if(loadingUsersConnected) {
    return <span>Cargando usuarios conectados...</span>;
  }

  if (errorUsersConnected) {
    return <span>Ocurrió un error al recuperar los usuarios activos</span>;
  }

  return (
    <section className="bg-gray-400 divide-y divide-gray-200 text-center">
      {usersConnected.length <= 0 ? (
        <h4 className="font-bold mt-4">No hay usuarios conectados aún...</h4>
      ) : (
        usersConnected.map((chatItem) => (
          <ChatItem {...chatItem} key={chatItem.idChat} />
        ))
      )}
    </section>
  );
};
