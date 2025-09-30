import { AvalaibleMods } from "@/components/LandingPage/AvalaibleMods/AvalaibleMods";
import { MainContent } from "@/components/LandingPage/MainContent/MainContent";
import { NewsSection } from "@/components/LandingPage/NewsSection/NewsSection";

export default function LandingPage() {
  return (
    <main>
      <MainContent />
      <NewsSection />
      <AvalaibleMods />
    </main>
  );
}
