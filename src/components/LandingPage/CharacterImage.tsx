import Image from "next/image";
import MercenaryCharacter from "./img/mercenary_character.webp";

export const CharacterImage = () => {
  return (
    <Image
      alt="mercenary character image"
      width={300}
      height={500}
      src={MercenaryCharacter}
      style={{ filter: "drop-shadow(0px 9px 5.5px rgba(0, 0, 0, 0.4))" }}
      className="xl:block hidden"
    />
  );
};
