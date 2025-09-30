import { Button } from "@/components/common/Button";
import { CharacterImage } from "@/components/LandingPage/CharacterImage";

export const MainContent = () => {
  return (
    <section className="screen-responsive-max-width main-padding flex justify-between items-center">
      <div className="flex flex-col gap-20">
        <article className="flex flex-col gap-8">
          <div className="w-full">
            <h1 className="font-light text-4xl mb-3">DESCUBRE MODS</h1>
            <h1 className="font-extrabold text-5xl">DE STALKER EN ESPAÑOL</h1>
          </div>
          <p className="font-normal max-w-[50ch]">
            Desde esta web comunitaria podras descubrir noticias, mods
            traducidos y proyectos de la comunidad hispana de stalker.
          </p>
        </article>
        <Button>
          <span>NOTICIAS RECIENTES</span>
        </Button>
      </div>
      <CharacterImage />
    </section>
  );
};
