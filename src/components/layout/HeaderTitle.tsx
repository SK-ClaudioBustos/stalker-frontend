import { LogoIcon } from "@/icons/LogoIcon";

export const HeaderTitle = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <h1 className="xl:text-5xl sm:text-4xl text-3xl antialiased select-none font-medium">Stalker.</h1>
      <LogoIcon className="xl:size-10 sm:size-10 size-7"/>
    </div>
  );
};
