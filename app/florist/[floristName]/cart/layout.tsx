import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function CartLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xxs: "column", md: "row" },
        alignItems: { xxs: "center", md: "start" },
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
}
