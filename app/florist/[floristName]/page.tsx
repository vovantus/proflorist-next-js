import floristApi from "@/lib/floristApi";
import { Box } from "@mui/material";
import BouquetCard from "@/components/florist/BouquetCard/BouquetCard";

export default async function Page({
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
      {bouquets.bouquetList.map((el) => (
        <BouquetCard key={el.id} bouquet={el} />
      ))}
    </Box>
  );
}
