import Category from "@/lib/types/Category";
import { Typography, Button } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Link from "next/link";

interface CatalogCategoryProps {
  category: Category;
  parentUrl?: string;
}

export default function CatalogCategory({
  category,
  parentUrl,
}: CatalogCategoryProps) {
  return (
    <Button
      endIcon={<ChevronRightOutlinedIcon />}
      component={Link}
      variant="contained"
      href={parentUrl ? `${parentUrl}/${category.slug}` : category.slug}
      sx={{
        minWidth: 350,
        textDecoration: "none",
        backgroundColor: "#f5f5f5",
        textTransform: "none",
        pt: 2,
        pb: 3,
        justifyContent: "space-between",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        },
        "@media (any-hover: hover)": {
          "&:hover": {
            backgroundColor: "#98d9ff",
            boxShadow:
              "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
          },
        },
      }}
    >
      <Typography variant="h5" component="div">
        {category.name}
      </Typography>
    </Button>
  );
}
