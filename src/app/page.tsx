import LandingPage from "@/components/pages/LandingPage/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stalker Wiki Mods Traducidos",
  description: "Pagina para encontrar mods traducidos de stalker",
};

export default function Home() {
  return <LandingPage />;
}
