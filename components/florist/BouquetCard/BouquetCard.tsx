import { Typography, Button, Card, CardContent, Box } from "@mui/material";

import Bouquet from "@/lib/types/Bouquet";

interface BouquetProps {
  bouquet: Bouquet;
}

const BouquetCard = ({ bouquet }: BouquetProps) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        position: "relative",
        borderRadius: "24px",
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: 350,
          width: 350,
          borderRadius: "24px",

          transition: "opacity 0.8s ease-in-out",
          cursor: "pointer",
        }}
        src={bouquet.images[0]}
        title={bouquet.name}
        loading="lazy"
      />

      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "rgba(255, 255, 255, 0.8)",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "5px",
          ":last-child": { pb: 1 },
        }}
      >
        <Typography
          // onClick={() => showBouquet(bouquet)}
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{
            cursor: "pointer",
            textWrap: "nowrap",
            overflow: "clip",
            textOverflow: "ellipsis",
            pr: 1,
            width: 200,
          }}
        >
          {bouquet.name}
        </Typography>
        <Button
          component="div"
          sx={{ minWidth: "100px", textWrap: "nowrap" }}
          size="small"
        >
          From {bouquet.price}€
        </Button>
      </CardContent>
    </Card>
  );
};

export default BouquetCard;
