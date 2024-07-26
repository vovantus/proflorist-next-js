import Category from "@/lib/types/Category";
import { Card, CardContent, Typography, Box } from "@mui/material";
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
    <Card
      sx={{
        minWidth: 350,
        textDecoration: "none",
        backgroundColor: "#f5f5f5",
        "&:hover": {
          backgroundColor: "rgba(118, 202, 254, 0.5)",
          transition: "background-color 0.3s ease",
        },
      }}
      component={Link}
      href={parentUrl ? `${parentUrl}/${category.slug}` : category.slug}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="div">
            {category.name}
          </Typography>
          <ChevronRightOutlinedIcon />
        </Box>
      </CardContent>
    </Card>
  );
}
