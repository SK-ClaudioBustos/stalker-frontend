import { Button } from "@/components/common/Button";

export const WelcomeBanner = () => {
  return (
    <section className="flex flex-col gap-10 text-center pt-8 pb-12 bg-[#939393]">
      <div>
        <h1 className="text-white mb-1 font-normal text-5xl sm:text-xl md:text-2xl">
          DESCUBRE MODS
        </h1>
        <h1 className="text-amber-500 text-orange font-extrabold text-6xl sm:text-3xl md:text-5xl">
          DE STALKER EN ESPAÑOL
        </h1>
      </div>
      <p className="max-w-[30ch] m-auto text-white text-2xl sm:text-base md:text-xl">
        Desde esta web comunitaria podrás descubrir noticias, mods traducidos y
        proyectos de la comunidad hispana de Stalker.
      </p>
      <Button className="m-auto shadow-[0_5.3px_64.98px_0_rgba(0,0,0,0.15)]">
        NOTICIAS RECIENTES
      </Button>
    </section>
  );
};
