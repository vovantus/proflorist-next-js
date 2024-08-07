import { Card, CardContent, Typography, Box } from "@mui/material";
import Bouquet from "@/lib/types/Bouquet";
import BouquetDetailesImage from "./BouquetDetailesImage";
import BouquetAddToCartButton from "./BouquetAddToCartButton";

interface BouquetDetailesProps {
  bouquet: Bouquet;
}

export default function BouquetDetailes({ bouquet }: BouquetDetailesProps) {
  return (
    <Card
      elevation={1}
      sx={{
        px: 0,
        width: "100%",
        display: "flex",
        flexDirection: { xxs: "column", sm: "row" },
        justifyContent: "space-between",
      }}
    >
      <BouquetDetailesImage imageUrl={bouquet.images[0]} name={bouquet.name} />

      <CardContent
        sx={{
          width: { xxs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ maxWidth: "90%" }}>
          {bouquet.name}
        </Typography>
        <Typography variant="body2" sx={{ order: { xxs: 1, sm: 0 } }}>
          {bouquet.description}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {bouquet.price}€
          </Typography>
          <BouquetAddToCartButton bouquetId={bouquet.id} />
        </Box>
      </CardContent>
    </Card>
  );
}
