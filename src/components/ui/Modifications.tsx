import {
    Juego,
    TipoEnum,
    useGetModificationsQuery
} from "@generated";
import Image from "next/image";

export const Modifications = () => {
  const { data, loading, error } = useGetModificationsQuery({
    variables: {
      params: {
        juego: Juego.ShadowOfChernobyl,
        tipo: TipoEnum.VanillaMod,
      },
    },
  });

  if (loading) {
    return <h1 className="text-green-500">Cargando...</h1>;
  }

  if (error) {
    return <h1 className="text-red-500">{error.message}</h1>;
  }
  return (
    <article>
      {data?.getModifications.modifications.map(
        ({ id, portadaPath, titulo }) => {
          const srcImg = `/img/${portadaPath}/portada.webp`;
          return (
            <article key={id} className="bg-amber-300 w-fit">
              <Image
                width={250}
                height={300}
                alt={`Imagen de la modificacion ${titulo}`}
                src={srcImg}
              />
            </article>
          );
        }
      )}
    </article>
  );
};
