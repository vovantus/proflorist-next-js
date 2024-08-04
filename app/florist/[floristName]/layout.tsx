import React, { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import Header from "@/components/florist/Header/Header";
import { notFound } from "next/navigation";
import { fetchFlorist } from "@/lib/data";
import FloristNotFound from "@/components/FloristNotFound/FloristNotFound";
import Footer from "@/components/florist/Footer/Footer";

export default async function FloristHomeLayout({
  children,
  params,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
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
    <Container
      sx={{
        // bgcolor: "grey",
        px: { xxs: "8px", md: "8px" },
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Header floristName={floristName} />
      <Box
        sx={{
          //   bgcolor: "lightBlue",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          height: "100%",
          pb: 9,
          pt: { xxs: 8, sm: 10 },
        }}
      >
        {modal}
        {children}
      </Box>
      <Footer />
    </Container>
  );
}
