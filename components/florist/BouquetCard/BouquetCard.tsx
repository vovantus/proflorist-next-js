"use client";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Skeleton,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import Image from "next/image";
import Bouquet from "@/lib/types/Bouquet";
import Link from "next/link";

interface BouquetProps {
  bouquet: Bouquet;
  handleAddToCart: () => void;
}

const BouquetCard = ({ bouquet, handleAddToCart }: BouquetProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const titleColor = theme.palette.primary.contrastText;
  const addToCartBgColor = theme.palette.secondary.contrastText;

  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        position: "relative",
        borderRadius: "24px",
      }}
    >
      <Link href={`/product/${bouquet.id}`}>
        <Image
          src={bouquet.images[0]}
          alt={bouquet.name}
          width={350}
          height={350}
          priority={false}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "24px",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            cursor: "pointer",
          }}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />

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
      </Link>

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
          pb: 1,
          pt: 1,
          ":last-child": { pb: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            textDecoration: "none",
            color: titleColor,
          }}
          component={Link}
          href={`/product/${bouquet.id}`}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textWrap: "nowrap",
              overflow: "clip",
              textOverflow: "ellipsis",
              textDecoration: "none",
              color: "inherit",
              pr: 1,
              width: 200,
            }}
          >
            {bouquet.name}
          </Typography>
          <Typography variant="body2"> {bouquet.price}€</Typography>
        </Box>
        <IconButton
          size="small"
          onClick={handleAddToCart}
          color="primary"
          sx={{
            p: 1,
            "&:hover": { bgcolor: addToCartBgColor },
            bgcolor: "#cfd8dc60",
          }}
          disableRipple
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BouquetCard;
