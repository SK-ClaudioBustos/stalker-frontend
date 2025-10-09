"use client";
import { ChatRoom } from "@/components/Chat/ChatRoom";
import { ApolloClientProvider } from "@/components/layout/ApolloClientProvider";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const params = useParams<{ userId: string }>();
  const userName = params.userId;
  return (
    <ApolloClientProvider>
      <ChatRoom userName={userName || "no_id"} />
    </ApolloClientProvider>
  );
}
