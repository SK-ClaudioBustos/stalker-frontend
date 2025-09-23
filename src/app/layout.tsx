import { AppProvider } from "@/components/layout/AppProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const fontFamily = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stalker Wiki Mods Traducidos",
  description: "Pagina para encontrar mods traducidos de stalker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fontFamily.className}>
        <Header/>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
