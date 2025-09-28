"use client";

import { NavbarButton } from "./NavbarButton";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <div className="font-bold flex-center gap-1 flex-row group">
      <NavbarButton>
        <NavbarLinks />
      </NavbarButton>
    </div>
  );
};
