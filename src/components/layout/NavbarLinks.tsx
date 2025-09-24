import { NavbarLink } from "../common/NavbarLink";

export const NavbarLinks = () => {
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
  return (
    <nav className="flex flex-row gap-4">
      {links.map((link) => (
        <NavbarLink key={link.label} {...link} />
      ))}
    </nav>
  );
};
