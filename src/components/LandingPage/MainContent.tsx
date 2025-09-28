import { Button } from "@/components/common/Button";
import { CharacterImage } from "@/components/LandingPage/CharacterImage";

export const MainContent = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-7">
          <div className="w-full">
            <h1 className="font-light text-4xl mb-0">DESCUBRE MODS</h1>
            <h1 className="font-extrabold text-5xl">DE STALKER EN ESPAÑOL</h1>
          </div>
          <p className="font-normal max-w-[50ch]">
            Desde esta web comunitaria podras descubrir noticias, mods
            traducidos y proyectos de la comunidad hispana de stalker.
          </p>
        </div>
        <Button>
          <span>NOTICIAS RECIENTES</span>
        </Button>
      </div>
      <CharacterImage />
    </>
  );
};
