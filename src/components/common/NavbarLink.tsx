import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

export const NavbarLink = ({ label, url }: Props) => {
  return (
    <Link className="hover:text-amber-500" href={url} title={`Ir a la seccion ${label}`}>
      {label}
    </Link>
  );
};
