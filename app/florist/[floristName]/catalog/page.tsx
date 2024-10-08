import { Box } from "@mui/material";
import CatalogCategory from "@/components/florist/CatalogCategory/CatalogCategory";
import floristApi from "@/lib/floristApi";

export default async function CategoriesListPage({
  params,
}: {
  params: {
    floristName: string;
  };
}) {
  const categories = await floristApi.fetchCategories(params.floristName);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 1,
      }}
    >
      <>
        {categories.map((cat) => (
          <CatalogCategory key={cat.id} category={cat} parentUrl="catalog" />
        ))}
      </>
    </Box>
  );
}
