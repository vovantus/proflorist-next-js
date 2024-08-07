"use client";
import Category from "@/lib/types/Category";
import { Typography, Button } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Link from "next/link";
import { useTheme } from "@mui/material";

interface CatalogCategoryProps {
  category: Category;
  parentUrl?: string;
}

export default function CatalogCategory({
  category,
  parentUrl,
}: CatalogCategoryProps) {
  const theme = useTheme();
  return (
    <Button
      endIcon={<ChevronRightOutlinedIcon />}
      component={Link}
      variant="contained"
      href={parentUrl ? `${parentUrl}/${category.slug}` : category.slug}
      sx={{
        ...theme.customStyles.categoryListItem,
      }}
    >
      <Typography variant="h5" component="div">
        {category.name}
      </Typography>
    </Button>
  );
}
