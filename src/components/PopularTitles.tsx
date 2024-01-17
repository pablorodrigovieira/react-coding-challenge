import { FEED_CATEGORIES, DEFAULT_PLACEHOLDER_SIZE } from "@/constants/frontend";
import message from "@/constants/languages/en.json";
import Card from "@/components/Card";
export default function PopularTitles() {
  return (
    <>
      {FEED_CATEGORIES.map((category) => (
        <li key={category.label}>
          <Card
            path={category.path}
            label={category.label}
            title={category.title}
            className="object-fit-cover"
            imgSrc="/assets/placeholder.png"
            imgAlt={message.alt.video_placeholder}
            imageWidth={DEFAULT_PLACEHOLDER_SIZE.WIDTH}
            imageHeight={DEFAULT_PLACEHOLDER_SIZE.HEIGHT}
          />
        </li>
      ))}
    </>
  );
}
