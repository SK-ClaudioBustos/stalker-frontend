import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
