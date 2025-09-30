import { HeaderTitle } from "./HeaderTitle";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="shadow-[0px_4px_40px_rgba(0,0,0,0.1)]">
      <div className="screen-responsive-max-width flex flex-row gap-8 px-10 py-6">
        <HeaderTitle />
        <Navbar />
      </div>
    </header>
  );
};
