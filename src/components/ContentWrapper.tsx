import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return <div className="content-wrapper">{children}</div>;
}
