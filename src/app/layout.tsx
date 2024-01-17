import { Suspense } from "react";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";

import "@/styles/globals.css";

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "title",
  description: "desc",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
      </body>
    </html>
  );
}
