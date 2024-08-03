import { Box } from "@mui/material";
import CatalogCategorySkeleton from "@/components/florist/CatalogCategory/CatalogCategorySkeleton";

export default function CategoryListLoading() {
  return (
    <>
      {Array.from(new Array(3)).map((_, index) => (
        <CatalogCategorySkeleton key={index} />
      ))}
    </>
  );
}
