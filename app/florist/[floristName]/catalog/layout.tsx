import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function CategoryListLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
}
