import { gql } from "@apollo/client";

export const get_modifications = gql(`
query getModification($args: FindModificationById!) {
  getModification(args: $args) {
    	id
      titulo
      autor
      sinopsis
      tipo
      juego
      traduccion
      fecha_lanzamiento
      descripcion
      caracteristicas
      enlaces {
        url
        texto
      }
      isStandalone
      imagenesGaleria
      portadaPath
      aclaraciones
      pasosInstalacion
  }
}
`);