import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const fontFamily = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fontFamily.className}>
        {children}
      </body>
    </html>
  );
}
