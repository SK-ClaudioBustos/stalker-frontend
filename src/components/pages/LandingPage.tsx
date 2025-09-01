"use client";
import { Juego, TipoEnum, useGetModificationsQuery } from "@generated";
import Image from "next/image";
import ImageWithBlur from "../ui/ImageWithBlur";
import { Suspense } from "react";

export default function LandingPage() {
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
    <main>
      {data?.getModifications.modifications.map(
        ({ id, portadaPath, titulo }) => {
          const srcImg = `/img/${portadaPath}/portada.webp`;
          console.log(srcImg);
          return (
            <article key={id} className="bg-amber-300 w-fit">
              <Suspense fallback={<span className="text-red-500">CARGANDO IMAGEN</span>}>
                <ImageWithBlur
                  width={250}
                  height={300}
                  alt={`Imagen de la modificacion ${titulo}`}
                  src={srcImg}
                />
              </Suspense>
            </article>
          );
        }
      )}
    </main>
  );
}
