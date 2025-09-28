import Image from "next/image";

export const CharacterImage = () => {
  return (
    <picture>
      <Image
        alt="mercenary character image"
        width={300}
        height={500}
        src="/img/mercenary_character.webp"
        style={{filter: "drop-shadow(0px 9px 5.5px rgba(0, 0, 0, 0.4))"}}
      />
    </picture>
  );
};
