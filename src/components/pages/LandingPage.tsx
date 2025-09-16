import { useState } from "react";
import { Modifications } from "../ui/Modifications";
import { NotificationListener } from "../ui/NotificationListener";

export default function LandingPage() {
  const [showModifications, setShowModifications] = useState(false);

  const handleShowModifications = () => {
    setShowModifications(!showModifications);
  }

  return (
    <main>
      <NotificationListener />
      <button className="bg-blue-600" onClick={handleShowModifications}>Alternar</button>
      {
        showModifications && <Modifications />
      }
    </main>
  );
}
