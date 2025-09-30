import ImageDemo1 from './img/demo_1.webp';
import ImageDemo2 from './img/demo_2.webp';
import ImageDemo3 from './img/demo_3.webp';
import ImageDemo4 from './img/demo_4.webp';

import { StaticImageData } from 'next/image';

export type ImageMetadata = {
  id: number;
  imagePath: StaticImageData;
  title: string;
};

export type New = {
  id: number;
  title: string;
  content: string;
  url: string;
  imgsPaths: ImageMetadata[];
  hasDecorationLine: boolean;
};

export const NEWS_PREVIEW: New[] = [
  {
    id: 1,
    title: "Se han publicado nuevas imagenes del mod Umbral.",
    content:
      "Umbral tiene como objetivo actual ser una saga con historias interconectadas entre si, al menos hasta la publicacion del episodio tres. El segundo episodio sera  mas grande que el primer episodio. El segundo episodio contara con las lineas argumentales de las modificaciones; Dios Caido y Dios Caido: Mal Epilogo. Se integraron los modelos GFY por Nestandart.",
    url: "#",
    imgsPaths: [
      {
        id: 1,
        imagePath: ImageDemo1,
        title: "Demo image 1",
      },
      {
        id: 2,
        imagePath: ImageDemo2,
        title: "Demo image 2",
      },
      {
        id: 3,
        imagePath: ImageDemo3,
        title: "Demo image 3",
      },
      {
        id: 4,
        imagePath: ImageDemo4,
        title: "Demo image 4",
      }
    ],
    hasDecorationLine: true,
  },
  {
    id: 2,
    title: "Se han publicado nuevas imagenes del mod Umbral.",
    content:
      "Umbral tiene como objetivo actual ser una saga con historias interconectadas entre si, al menos hasta la publicacion del episodio tres. El segundo episodio sera  mas grande que el primer episodio. El segundo episodio contara con las lineas argumentales de las modificaciones; Dios Caido y Dios Caido: Mal Epilogo. Se integraron los modelos GFY por Nestandart.",
    url: "#",
    imgsPaths: [],
    hasDecorationLine: false,
  },
];
