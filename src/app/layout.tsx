import { Suspense } from "react";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import message from "@/constants/languages/en.json";

import "@/styles/globals.css";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Subheader from "@/components/Subheader";

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: message.metadata.title,
  description: message.metadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Header />
        <Subheader />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
