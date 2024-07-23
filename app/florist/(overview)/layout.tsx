import React, { ReactNode } from "react";

export default async function FloristLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { floristName: string };
}) {
  return (
    <div>
      <h2>Florist layout. {params.floristName}</h2>
      <div>{children}</div>
    </div>
  );
}
