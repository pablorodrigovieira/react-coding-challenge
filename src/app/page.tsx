import PopularList from "@/components/PopularList";
import PopularTitles from "@/components/PopularTitles";

export default async function HomePage() {
  return (
    <main>
      <PopularList>
        <PopularTitles />
      </PopularList>
    </main>
  );
}
