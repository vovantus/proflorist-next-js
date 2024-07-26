import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";
import { Box, Typography } from "@mui/material";

export default async function FloristShowcasePage({
  params,
}: {
  params: { floristName: string };
}) {
  const flotistName = params.floristName;
  const bouquets = await floristApi.fetchBouquetsByCategory(flotistName);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,350px)",
        width: "100%",
        marginX: "auto",
        gap: "8px",
        justifyContent: "center",
        alignContent: "start",
      }}
    >
      <Box
        sx={{
          gridColumn: "1 / -1",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
          width: "100%",
          height: "100%",
          py: 1,
        }}
      >
        <Typography variant="h2">Today&apos;s Picks</Typography>
      </Box>
      <BouquetList floristName={flotistName} initialBouquets={bouquets} />
    </Box>
  );
}
