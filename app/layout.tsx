import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proflorist app",
  description: "Proflorist - All the Tools Florists Need to Grow.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Global layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
