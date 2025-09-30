import Image from "next/image";
import { ModsPortraitMetadata } from "./mods_portraits_data";

export const ModPortrait = ({ srcPath, title }: ModsPortraitMetadata) => {
  return (
    <Image
      className="rounded-[50px] w-[333px] h-[500px] hover:scale-118 transition duration-300"
      placeholder="blur"
      alt={title}
      title={title}
      src={srcPath}
    />
  );
};
