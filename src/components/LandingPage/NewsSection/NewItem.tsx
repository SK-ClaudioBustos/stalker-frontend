"use client";

import { ArrowToLeftIcon } from "@/icons/ArrowToLeftIcon";
import Link from "next/link";
import { NewPreviewGallery } from "./NewPreviewGallery";
import { New } from "./images_metadata_demo";
import { NewPreviewContent } from "./NewPreviewContent";
export const NewItem = ({
  content,
  hasDecorationLine,
  imgsPaths,
  title,
  url,
}: New) => {
  return (
    <article>
      <div className="flex justify-between items-center gap-8 mb-8">
        <NewPreviewContent
          content={content}
          hasDecorationLine={hasDecorationLine}
          title={title}
        />
        <NewPreviewGallery imgsPaths={imgsPaths} />
      </div>
      <Link href={url} className="flex gap-4 hover:text-custom-orange">
        <span>MAS SOBRE LA NOTICIA</span>
        <ArrowToLeftIcon />
      </Link>
    </article>
  );
};
