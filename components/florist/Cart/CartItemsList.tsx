import { Box } from "@mui/material";
import CartItem from "./CartItem";
import CartItemSkeleton from "./CartItemSkeleton";
import Bouquet from "@/lib/types/Bouquet";
import CartStoreItems from "@/lib/types/CartStoreItems";

interface CartItemsListProps {
  bouquets: Bouquet[];
  cartItems: CartStoreItems;
  addItem: (id: Bouquet["id"]) => void;
  decreaseQty: (bouquet: Bouquet) => void;
  handleDeleteItem: (bouquet: Bouquet) => void;
  removingBouquetId: Bouquet["id"];
}

export default function CartItemsList({
  bouquets,
  cartItems,
  addItem,
  decreaseQty,
  handleDeleteItem,
  removingBouquetId,
}: CartItemsListProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 30 }}>
      {bouquets.length === 0
        ? Array.from(new Array(2)).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))
        : bouquets.map((bouquet) => (
            <CartItem
              key={bouquet.id}
              isDeleting={removingBouquetId === bouquet.id}
              bouquet={bouquet}
              quantity={cartItems[bouquet.id]}
              increaseQty={() => addItem(bouquet.id)}
              decreaseQty={() => decreaseQty(bouquet)}
              deleteItem={() => handleDeleteItem(bouquet)}
            />
          ))}
    </Box>
  );
}
