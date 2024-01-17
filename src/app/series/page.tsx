import PopularList from "@/components/PopularList";
import PopularItems from "@/components/PopularItems";
import { PROGRAMS_TYPE } from "@/constants/frontend";

export default function Series() {
  return (
    <main>
      <PopularList>
        <PopularItems programType={PROGRAMS_TYPE.SERIES} />
      </PopularList>
    </main>
  );
}
