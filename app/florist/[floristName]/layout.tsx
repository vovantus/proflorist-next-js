import React, { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import Header from "@/components/florist/Header/Header";
import { notFound } from "next/navigation";
import { fetchFlorist } from "@/lib/data";
import FloristNotFound from "@/components/shared/FloristNotFound/FloristNotFound";
import Footer from "@/components/florist/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import comicTheme from "@/themes/comicTheme";
import floristDefaultTheme from "@/themes/floristDefaultTheme";

export default async function FloristHomeLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { floristName: string };
}) {
  const floristName = params.floristName;
  let florist: any;

  if (floristName) {
    try {
      florist = await fetchFlorist(floristName);
    } catch {
      return <FloristNotFound subdomain={floristName} />;
    }
  } else {
    notFound();
  }
  const updatedTheme =
    florist?.theme === "comic" ? comicTheme : floristDefaultTheme;

  return (
    <ThemeProvider theme={updatedTheme}>
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
