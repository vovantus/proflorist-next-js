import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";
import { Box } from "@mui/material";


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
      <BouquetList floristName={flotistName} initialBouquets={bouquets} />
    </Box>
  );
}
