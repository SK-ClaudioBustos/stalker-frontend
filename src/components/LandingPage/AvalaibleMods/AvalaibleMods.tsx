import { ModPortrait } from "./ModPortrait";
import { MODS_PORTRAITS } from "./mods_portraits_data";

export const AvalaibleMods = () => {
  return (
    <section className="screen-responsive-max-width main-padding">
      <h1 className="text-custom-orange text-center mb-32 text-5xl">BUSCA MODS DE TUS JUEGOS FAVORITOS</h1>
      <div className="flex flex-row gap-32 justify-center flex-wrap">
        {MODS_PORTRAITS.map((portrait) => (
          <ModPortrait {...portrait} key={portrait.id} />
        ))}
      </div>
    </section>
  );
};
