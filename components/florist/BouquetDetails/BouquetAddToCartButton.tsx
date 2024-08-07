"use client";

import Bouquet from "@/lib/types/Bouquet";
import { useCart } from "@/store/store";
import { Button } from "@mui/material";

export default function BouquetAddToCartButton({
  bouquetId,
}: {
  bouquetId: Bouquet["id"];
}) {
  const addItem = useCart((state) => state.addItem);
  return (
    <Button
      size="small"
      variant="outlined"
      onClick={() => addItem(bouquetId)}
      sx={{
        width: 120,
        ml: 1,
        mt: 1,
        position: { xxs: "relative", sm: "auto" },
        bottom: { xxs: "40px", sm: "auto" },
      }}
    >
      Add to cart
    </Button>
  );
}
