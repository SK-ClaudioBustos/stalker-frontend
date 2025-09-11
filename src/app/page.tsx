"use client";
import { ApolloClientProvider } from "@/components/layout/ApolloClientProvider";
import LandingPage from "@components/pages/LandingPage";

export default function Home() {
  return (
    <ApolloClientProvider>
      <LandingPage />
    </ApolloClientProvider>
  );
}
