"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import ContentWrapper from "@/components/ContentWrapper";
import message from "@/constants/languages/en.json";
import {getTitleFromPath} from "@/utils/helpers";

export default function Subheader() {
  const pathname = usePathname();
  const title = useMemo(() => getTitleFromPath(pathname), [pathname]);

  return (
    <div className="subheader">
      <ContentWrapper>
        <h1>{title.length > 0 ? title : message.shared.default_title}</h1>
      </ContentWrapper>
    </div>
  );
}
