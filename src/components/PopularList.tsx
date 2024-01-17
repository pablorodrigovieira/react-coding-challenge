import { ReactNode } from "react";
import ContentWrapper from "@/components/ContentWrapper";

interface Props {
  children: ReactNode;
}

export default function PopularList(props: Props) {
  const { children } = props;
  return (
    <section>
      <ContentWrapper>
        <ol className="popular-list">{children}</ol>
      </ContentWrapper>
    </section>
  );
}
