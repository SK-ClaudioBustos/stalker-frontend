import { New } from "./images_metadata_demo";

type TodoPreview = Pick<New, "hasDecorationLine" | "content" | "title">;

export const NewPreviewContent = ({
  content,
  hasDecorationLine,
  title,
}: TodoPreview) => {
  return (
    <div className="flex flex-col">
      {hasDecorationLine && (
        <div className="w-[69px] h-[5px] bg-custom-orange mb-6"></div>
      )}
      <h1 className="text-custom-orange font-medium text-3xl md:w-[20ch] w-fit leading-14 mb-8">
        {title}
      </h1>
      <p className="text-justify leading-9 max-w-[75ch]">{content}</p>
    </div>
  );
};
