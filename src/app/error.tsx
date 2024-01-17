"use client";
import ContentWrapper from "@/components/ContentWrapper";
import message from "@/constants/languages/en.json";

export default function Error() {
  return (
    <section className="error">
      <ContentWrapper>
        <p>{message.error.something_went_wrong}</p>
      </ContentWrapper>
    </section>
  );
}
