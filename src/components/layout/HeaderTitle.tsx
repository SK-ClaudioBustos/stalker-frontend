import { LogoIcon } from "@/icons/LogoIcon";

export const HeaderTitle = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <h1 className="text-4xl antialiased">Stalker.</h1>
      <LogoIcon />
    </div>
  );
};
