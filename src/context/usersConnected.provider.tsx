import { useActiveUsersUpdatedSubscription } from "@/generated/graphql";
import { useEffect, useState } from "react";
import { ProviderContextProps } from "./chat.provider";
import {
  UsersConnectedContext,
  UsersConnectedValueType,
} from "./usersConnected.context";

export type ChatItemData = {
  idChat: string;
  userName: string;
};

export const UserConnectedProvider = ({
  userName,
  children,
}: ProviderContextProps) => {
  const [usersConnected, setUsersConnected] = useState<ChatItemData[]>([]);

  const {
    data,
    loading: loadingUsersConnected,
    error: errorUsersConnected,
  } = useActiveUsersUpdatedSubscription();

  useEffect(() => {
    if (data?.activeUsersUpdated) {
      const USERS: ChatItemData[] =
        data.activeUsersUpdated
          ?.filter((activeUser) => activeUser.userName !== userName)
          .map(({ id, userName }) => ({
            idChat: `${userName}_${id}`,
            userName,
          }));
      setUsersConnected(USERS);
    }
  }, [data]);
  
  const value: UsersConnectedValueType = {
    usersConnected,
    loadingUsersConnected,
    errorUsersConnected,
  };
  return (
    <UsersConnectedContext value={value}>{children}</UsersConnectedContext>
  );
};
