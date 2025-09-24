"use client";

import { NavbarButton } from "./NavbarButton";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <div className={`font-bold flex-center md:gap-1 gap-0 xl:flex-row flex-col`}>
      <NavbarButton>
        <NavbarLinks />
      </NavbarButton>
    </div>
  );
};
