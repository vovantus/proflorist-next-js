import React, { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import FloristAppBar from "@/app/ui/FloristAppBar/FloristAppBar";
import { notFound } from "next/navigation";
import { fetchFlorist } from "@/app/lib/data";
import FloristNotFound from "@/app/ui/FloristNotFound/FloristNotFound";
import BottomNav from "@/app/ui/BottomNav/BottomNav";

export default async function FloristHomeLayout({
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
      <FloristAppBar floristName={params.floristName} />
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
        {children}
      </Box>
      <BottomNav />
    </Container>
  );
}
