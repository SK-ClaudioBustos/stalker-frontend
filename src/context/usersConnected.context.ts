import { ApolloError } from "@apollo/client";
import { createContext, useContext } from "react";
import { ChatItemData } from "./usersConnected.provider";

export interface UsersConnectedValueType {
  usersConnected: ChatItemData[];
  errorUsersConnected: ApolloError | undefined;
  loadingUsersConnected: boolean;
}

const initValue: UsersConnectedValueType = {
  usersConnected: [],
  errorUsersConnected: undefined,
  loadingUsersConnected: false,
};

export const UsersConnectedContext =
  createContext<UsersConnectedValueType>(initValue);

export const useUsersConnectedContext = () => {
  const context = useContext(UsersConnectedContext);
  if (!context) {
    throw new Error(
      "useUsersConnectedContext debe usarse desde un componente que este envuelto en el provider"
    );
  }
  return context;
};
