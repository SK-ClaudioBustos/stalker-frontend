import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import { PropsWithChildren } from "react";

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
