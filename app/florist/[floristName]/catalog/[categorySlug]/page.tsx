import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";
import { Typography, Box } from "@mui/material";

export default async function BouquetsInCategoryPage({
  params,
}: {
  params: { floristName: string; categorySlug: string };
}) {
  const flotistName = params.floristName;
  const categorySlug = params.categorySlug;
  const category = await floristApi.fetchCategoryInfo(
    flotistName,
    categorySlug
  );
  const [bouquets, hasMore] = await floristApi.fetchBouquetsByCategory(
    flotistName,
    undefined,
    category.id
  );

  return (
    <>
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
            gridColumn: "1 / -1", // This makes the box span from the first to the last column
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
          <Typography variant="h2">{category.name}</Typography>
          {category.description && (
            <Typography variant="body2">{category.description}</Typography>
          )}
        </Box>
        <BouquetList
          floristName={flotistName}
          initialBouquets={bouquets}
          categoryId={category.id}
          hasMore={hasMore}
        />
      </Box>
    </>
  );
}
