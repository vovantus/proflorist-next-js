import Category from "@/lib/types/Category";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
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
        },
      }}
    >
      <Typography variant="h5" component="div">
        {category.name}
      </Typography>
    </Button>
  );
}
