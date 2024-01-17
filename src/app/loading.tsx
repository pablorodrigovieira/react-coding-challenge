import ContentWrapper from "@/components/ContentWrapper";
import message from "@/constants/languages/en.json";

export default function Loading() {
  return (
    <section className="loading">
      <ContentWrapper>
        <p>{message.loading_page.loading}</p>
      </ContentWrapper>
    </section>
  );
}
