import { NEWS_PREVIEW } from "./images_metadata_demo";
import { NewItem } from "./NewItem";

export const NewsSection = () => {
  return (
    <section className="screen-responsive-max-width main-padding flex flex-col shadow-[0_0_32.9px_0_rgba(0,0,0,0.12)]">
      <section className="flex flex-col gap-16">
        {NEWS_PREVIEW.map((item) => (
          <NewItem {...item} key={item.id} />
        ))}
      </section>
    </section>
  );
};
