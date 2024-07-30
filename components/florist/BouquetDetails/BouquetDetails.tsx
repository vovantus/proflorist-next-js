import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Bouquet from "@/lib/types/Bouquet";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BouquetDetailesImage from "./BouquetDetailesImage";

interface BouquetDetailesProps {
  bouquet: Bouquet;
}

export default function BouquetDetailes({ bouquet }: BouquetDetailesProps) {
  return (
    <Card
      elevation={0}
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
            flexDirection: { xxs: "row", sm: "column" },
            justifyContent: { xxs: "space-between", sm: "start" },
            alignItems: "end",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {bouquet.price}€
          </Typography>
        </Box>
      </CardContent>

      <IconButton sx={{ position: "absolute", top: 0, right: 0, mt: 1, mr: 1 }}>
        <CloseRoundedIcon />
      </IconButton>
    </Card>
  );
}
