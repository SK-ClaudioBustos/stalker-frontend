import { Header } from "@/components/layout/Header";
import { WelcomeBanner } from "./WelcomeBanner";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <WelcomeBanner />
      </main>
    </>
  );
}
