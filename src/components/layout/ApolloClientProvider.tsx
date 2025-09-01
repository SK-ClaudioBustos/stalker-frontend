"use client";

import { PropsWithChildren } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_SCHEMA_URL }),
  cache: new InMemoryCache(),
});


export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
    return(
        <ApolloProvider client={client}>{children}</ApolloProvider>
    );
}