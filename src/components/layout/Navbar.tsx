"use client";

import { useState } from "react";
import { NavbarLink } from "../common/NavbarLink";

export const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleOpenNavbar = () => {
    setNavBarOpen(!navBarOpen);
  };
  const color = navBarOpen ? "text-amber-500" : "";
  const navbarArrow = navBarOpen ? ">" : "<";
  const links = [
    {
      label: "Shadow of Chernobyl",
      url: "#",
    },
    {
      label: "Clear Sky",
      url: "#",
    },
    {
      label: "Call of Pripyat",
      url: "#",
    },
  ];
  const gap = navBarOpen ? "gap-5" : "gap-1";
  return (
    <nav className={`font-bold flex-center ${gap}`}>
      <button
        type="button"
        title="Abrir/Cerrar navbar"
        onClick={handleOpenNavbar}
        className={`hover:cursor-pointer ${color}`}
      >
        MODS TRADUCIDOS
      </button>
      {navBarOpen && (
        <div className="flex gap-4">
          {links.map((link) => (
            <NavbarLink {...link} />
          ))}
        </div>
      )}
      <button
        type="button"
        title="Abrir/Cerrar navbar"
        onClick={handleOpenNavbar}
        className={`hover:cursor-pointer ${color}`}
      >
        <span className={color}>{navbarArrow}</span>
      </button>
    </nav>
  );
};
