"use client";

import CartBouquetDeletionDialog from "@/components/florist/Cart/CartBouquetDeletionDialog";
import CartItem from "@/components/florist/Cart/CartItem";
import CartItemSkeleton from "@/components/florist/Cart/CartItemSkeleton";
import CartTotal from "@/components/florist/Cart/CartTotal";
import CartTotalSkeleton from "@/components/florist/Cart/CartTotalSkeleton";
import EmptyCart from "@/components/florist/Cart/EmptyCart";
import useGetCartItemsInfo from "@/hooks/useGetCartItemsInfo";
import Bouquet from "@/lib/types/Bouquet";
import { useCart } from "@/store/store";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

export default function CartPage({
  params,
}: {
  params: { floristName: string };
}) {
  const [pageInitialized, setPageInitialized] = useState(false);
  const cartItemIds = useCart(
    useShallow((state) => Object.keys(state.cartItems))
  );
  const cartItems = useCart((state) => state.cartItems);
  const cartTotalQuantity = useCart((state) => state.cartTotalQuantity);
  const addItem = useCart((state) => state.addItem);
  const removeItem = useCart((state) => state.removeItem);
  const { bouquets, isLoading } = useGetCartItemsInfo(
    params.floristName,
    cartItemIds
  );
  const [activeBouquet, setActiveBouquet] = useState<Bouquet>();
  const [deletionAlertOpen, setDeletionAlertOpen] = useState(true);

  useEffect(() => setPageInitialized(true), []);

  const proceedToCheckout = () => {
    console.log("checkout button pressed");
  };

  const cartTotal =
    Math.round(
      bouquets.reduce(
        (acc, bouq) => (acc += bouq.price * cartItems[bouq.id]),
        0
      ) * 100
    ) / 100;

  const closeDialog = () => {
    setActiveBouquet(undefined);
    setDeletionAlertOpen(false);
  };

  const removeAndCloseDialog = () => {
    activeBouquet && removeItem(activeBouquet.id, "all");
    closeDialog();
  };

  const handleDeleteItem = (bouquet: Bouquet) => {
    setActiveBouquet(bouquet);
    setDeletionAlertOpen(true);
  };

  const decreaseQty = (bouquet: Bouquet) => {
    if (cartItems[bouquet.id] > 1) {
      removeItem(bouquet.id);
    } else {
      handleDeleteItem(bouquet);
    }
  };

  const renderCartItems = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 30 }}>
      {bouquets.length === 0
        ? Array.from(new Array(2)).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))
        : bouquets.map((bouquet) => (
            <CartItem
              key={bouquet.id}
              bouquet={bouquet}
              quantity={cartItems[bouquet.id]}
              increaseQty={() => addItem(bouquet.id)}
              decreaseQty={() => decreaseQty(bouquet)}
              deleteItem={() => handleDeleteItem(bouquet)}
            />
          ))}
    </Box>
  );

  return (
    <>
      {!pageInitialized ? (
        <CartTotalSkeleton />
      ) : cartTotalQuantity === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {renderCartItems()}
          <CartTotal
            isLoading={isLoading}
            cartTotalQuantity={cartTotalQuantity}
            cartTotal={cartTotal}
            proceedToCheckout={proceedToCheckout}
          />
        </>
      )}

      {activeBouquet && (
        <CartBouquetDeletionDialog
          open={deletionAlertOpen}
          onRemovePressed={removeAndCloseDialog}
          onCancelPressed={closeDialog}
          bouquetName={activeBouquet.name}
        />
      )}
    </>
  );
}
