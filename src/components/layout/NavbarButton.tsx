import { ArrowToLeftIcon } from "@/icons/ArrowToLeftIcon";
import { PropsWithChildren, useState } from "react";

export const NavbarButton = ({ children }: PropsWithChildren) => {
  const [isNavBarOpen, setisNavBarOpen] = useState(false);
  const handleOpenNavbar = () => {
    setisNavBarOpen(!isNavBarOpen);
  };

  const color = isNavBarOpen ? "text-amber-500" : "";
  const buttonClassNames = `hover:cursor-pointer hover:text-amber-500 xl:text-xl sm:text-lg text-sm ${color}`;
  const navbarArrowProps = {
    strokeWidth: "3",
    className: `xl:size-8 sm:size-6 size-4 transition-transform duration-500 ${
      isNavBarOpen ? "rotate-180" : "rotate-0"
    }`,
  };
  return (
    <>
      <button
        type="button"
        title="Abrir/Cerrar navbar"
        onClick={handleOpenNavbar}
        className={`${isNavBarOpen ? "mr-4" : "mr-0"} ${buttonClassNames}`}
      >
        <span>MODS TRADUCIDOS</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isNavBarOpen ? 'max-h-full block' : 'max-h-0 hidden'}`}>
        {children}
      </div>
      <button
        type="button"
        title="Abrir/Cerrar navbar"
        onClick={handleOpenNavbar}
        className={`${isNavBarOpen ? "ml-4" : "ml-0"} ${buttonClassNames}`}
      >
        <span className={color}>
          <ArrowToLeftIcon {...navbarArrowProps} />
        </span>
      </button>
    </>
  );
};
