"use client";

import { ChatWindow } from "@/components/Chat/ChatWindow";
import { ApolloClientProvider } from "@/components/layout/ApolloClientProvider";

export default function Chat() {
  return (
    <ApolloClientProvider>
      <ChatWindow />
    </ApolloClientProvider>
  );
};
