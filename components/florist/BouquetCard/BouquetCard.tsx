"use client";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Skeleton,
} from "@mui/material";
import { useState } from "react";

import Bouquet from "@/lib/types/Bouquet";

interface BouquetProps {
  bouquet: Bouquet;
  addItem: (id: Bouquet["id"]) => void;
}

const BouquetCard = ({ bouquet, addItem }: BouquetProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        position: "relative",
        borderRadius: "24px",
      }}
    >
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: "24px",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 350,
            height: 350,
          }}
        />
      )}
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
        onLoad={() => setImageLoaded(true)}
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
          onClick={() => {
            addItem(bouquet.id);
          }}
        >
          From {bouquet.price}€
        </Button>
      </CardContent>
    </Card>
  );
};

export default BouquetCard;
