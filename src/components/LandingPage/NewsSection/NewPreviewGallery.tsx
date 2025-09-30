import Image from "next/image";
import { ImageMetadata } from "./images_metadata_demo";

export const NewPreviewGallery = ({
  imgsPaths,
}: {
  imgsPaths: ImageMetadata[];
}) => {
  return (
    <div className="hidden xl:flex flex-wrap gap-5 self-end 2xl:w-[500px] w-[600px]">
      {imgsPaths.map((img) => (
        <Image
          alt={img.title}
          title={img.title}
          src={img.imagePath}
          key={img.id}
          className="rounded-3xl max-w-60 max-h-40"
        />
      ))}
    </div>
  );
};
