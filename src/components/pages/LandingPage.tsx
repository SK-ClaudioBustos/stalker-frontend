'use client'
import { Juego, TipoEnum, useGetModificationsQuery } from "@generated";

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
    <main className="bg-blue-600">
      {data?.getModifications.modifications.map((mod) => (
        <div key={mod.id}>{JSON.stringify(mod)}</div>
      ))}
    </main>
  );
}
