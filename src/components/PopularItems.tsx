import { DEFAULT_IMAGE_SIZE } from "@/constants/frontend";
import { getFeedDataByProgramType } from "@/utils/filters";
import { fetchFeedData } from "@/utils/fetch";
import Card from "@/components/Card";
import message from "@/constants/languages/en.json";

interface Props {
  programType: string;
}

export default async function PopularItems(props: Props) {
  const { programType } = props;
  const data = await fetchFeedData();
  const filtered = data && getFeedDataByProgramType(data, programType);
  return (
    <>
      {filtered &&
        filtered.map((item) => (
          <li key={item.title}>
            <Card
              path={"#"}
              className="card__feed"
              label={item.title}
              imgSrc={item.images["Poster Art"].url}
              imgAlt={`${message.alt.cover_image} ${item.title}`}
              imageWidth={DEFAULT_IMAGE_SIZE.WIDTH}
              imageHeight={DEFAULT_IMAGE_SIZE.HEIGHT}
            />
          </li>
        ))}
    </>
  );
}
