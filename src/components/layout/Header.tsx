import { HeaderTitle } from "./HeaderTitle";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="shadow-[0px_4px_40px_rgba(0,0,0,0.1)] flex flex-row gap-8 px-8 py-4">
      <HeaderTitle />
      <Navbar />
    </header>
  );
};
