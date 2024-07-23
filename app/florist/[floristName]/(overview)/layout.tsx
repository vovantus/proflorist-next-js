import React, { ReactNode } from "react";
import { notFound } from "next/navigation";
import { fetchFlorist } from "@/app/lib/data";
import FloristNotFound from "@/app/ui/floristNotFound/floristNotFound";

export default async function FloristLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { floristName: string };
}) {
  const floristName = params.floristName;

  if (floristName) {
    try {
      const florist = await fetchFlorist(floristName);
    } catch {
      return <FloristNotFound subdomain={floristName} />;
    }
  } else {
    notFound();
  }

  return (
    <div>
      <h2>Florist layout. {params.floristName}</h2>
      <div>{children}</div>
    </div>
  );
}
