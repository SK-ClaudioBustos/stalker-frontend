"use client";
import { ChatView } from "@/components/Chat/ChatView";
import { ApolloClientProvider } from "@/components/layout/ApolloClientProvider";
import { ChatProvider } from "@/context/chat.provider";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
  const params = useParams<{ userId: string }>();
  const userName = params.userId;

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      localStorage.setItem("token", userName);
    }
  }, []);
  return (
    <ApolloClientProvider>
      <ChatProvider userName={userName}>
        <ChatView />
      </ChatProvider>
    </ApolloClientProvider>
  );
}
