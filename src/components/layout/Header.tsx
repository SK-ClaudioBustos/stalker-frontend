import { PageTitleLogo } from "@/assets/PageTitleLogo";
import { HamburgerIcon } from "@/icons/HamburgerIcon";
import { SearchIcon } from "@/icons/SearchIcon";

export const Header = () => (
  <header className="flex items-center justify-between shadow-[0_0_19.8px_0_rgba(0,0,0,0.12)] p-4 bg-portada">
    <HamburgerIcon />
    <PageTitleLogo />
    <SearchIcon />
  </header>
);
