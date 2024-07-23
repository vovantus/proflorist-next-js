import React, { ReactNode } from "react";

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { subdomain: string };
}) {
  return (
    <div>
      <h3>Catalog layout. {params.subdomain}</h3>
      <div>{children}</div>
    </div>
  );
}
