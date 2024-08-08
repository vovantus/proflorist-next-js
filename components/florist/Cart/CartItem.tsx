import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
} from "@mui/material";
import { memo, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import Bouquet from "@/lib/types/Bouquet";

interface CartItemProps {
  bouquet: Bouquet;
  quantity: number;
  increaseQty: () => void;
  decreaseQty: () => void;
  deleteItem: () => void;
  isDeleting: boolean;
}

function compareProducts(oldProps: CartItemProps, newProps: CartItemProps) {
  return (
    oldProps.bouquet.price === newProps.bouquet.price &&
    oldProps.quantity === newProps.quantity &&
    oldProps.isDeleting === newProps.isDeleting
  );
}

const CartItem = memo(function CartItem({
  bouquet,
  quantity,
  increaseQty,
  decreaseQty,
  deleteItem,
  isDeleting,
}: CartItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        width: 350,
        justifyContent: "space-between",
        flexDirection: "row",
        position: "relative",
        transition: "all 0.3s ease",
        height: isDeleting ? 0 : 120,
        marginBottom: isDeleting ? -1 : "auto",
        marginTop: isDeleting ? 0 : "auto",
      }}
      elevation={3}
    >
      <Box sx={{ position: "relative", width: 75, height: 120 }}>
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 75,
            height: 120,
            objectFit: "cover",
            objectPosition: "center",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          width={75}
          height={120}
          src={bouquet.images[0]}
          alt={bouquet.name}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: 75,
              height: 120,
            }}
          />
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: 275 }}>
        <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              textWrap: "wrap",
              width: 220,
              overflow: "hidden",
            }}
          >
            {bouquet.name}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 1,
            pl: 2,
            pb: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {bouquet.price}€
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Button onClick={decreaseQty}>-</Button>
            {quantity}
            <Button onClick={increaseQty}>+</Button>
          </Box>
        </Box>
      </Box>
      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={deleteItem}
      >
        <ClearIcon fontSize="small" sx={{ color: "primary.main" }} />
      </IconButton>
    </Card>
  );
},
compareProducts);

export default CartItem;
