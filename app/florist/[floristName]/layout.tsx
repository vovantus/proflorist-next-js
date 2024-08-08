import React, { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import Header from "@/components/florist/Header/Header";
import { notFound } from "next/navigation";
import { fetchFlorist } from "@/lib/data";
import FloristNotFound from "@/components/shared/FloristNotFound/FloristNotFound";
import Footer from "@/components/florist/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import themes from "@/themes/themes";
import Florist from "@/lib/types/Florist";
import { createFloristFromDoc } from "@/utils/dataTransforms";
import { describe } from "node:test";

export function generateMetadata({
  params,
}: {
  params: { floristName: string };
}) {
  const floristName =
    params.floristName.charAt(0).toUpperCase() + params.floristName.slice(1);
  return {
    title: `${floristName} flower shop`,
    description: `Discover beautiful and fresh floral arrangements at: ${floristName}. From romantic bouquets to seasonal favorites, our handpicked flowers are perfect for every occasion.`,
  };
}

export default async function FloristHomeLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { floristName: string };
}) {
  const floristName = params.floristName;
  let florist: Florist | null = null;

  if (floristName) {
    try {
      const floristDoc = await fetchFlorist(floristName);
      florist = floristDoc ? createFloristFromDoc(floristDoc) : null;
    } catch {
      return <FloristNotFound subdomain={floristName} />;
    }
  } else {
    notFound();
  }
  const selectedTheme = themes[florist?.theme || "default"];

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container
        sx={{
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
          {children}
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
