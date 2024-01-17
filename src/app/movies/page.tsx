import PopularList from "@/components/PopularList";
import PopularItems from "@/components/PopularItems";
import { PROGRAMS_TYPE } from "@/constants/frontend";

export const dynamic = "force-dynamic";
export default function Movies() {
  return (
    <main>
      <PopularList>
        <PopularItems programType={PROGRAMS_TYPE.MOVIES} />
      </PopularList>
    </main>
  );
}
