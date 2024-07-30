import React, { ReactNode } from "react";

export default async function FloristCatalogLayout({
  modal,
  children,
  params,
}: {
  modal: ReactNode;
  children: ReactNode;
  params: { floristName: string; categorySlug: string };
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
