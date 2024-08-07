"use client";

import CartBouquetDeletionDialog from "@/components/florist/Cart/CartBouquetDeletionDialog";
import CartTotal from "@/components/florist/Cart/CartTotal";
import CartTotalSkeleton from "@/components/florist/Cart/CartTotalSkeleton";
import EmptyCart from "@/components/florist/Cart/EmptyCart";
import useGetCartItemsInfo from "@/hooks/useGetCartItemsInfo";
import Bouquet from "@/lib/types/Bouquet";
import { useCart } from "@/store/store";
import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import CartItemsList from "@/components/florist/Cart/CartItemsList";
import { useTheme } from "@mui/material";

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
  const [removingBouquetId, setRemovingBouquetId] = useState<Bouquet["id"]>("");
  const [removingBouquetCandidate, setRemovingBouquetCandidate] =
    useState<Bouquet>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => setPageInitialized(true), []);

  const proceedToCheckout = () => {
    setSnackbarOpen(true);
  };

  const cartTotal =
    Math.round(
      bouquets.reduce(
        (acc, bouq) => (acc += bouq.price * cartItems[bouq.id]),
        0
      ) * 100
    ) / 100;

  const closeDialog = () => {
    setRemovingBouquetCandidate(undefined);
  };

  const removeAndCloseDialog = () => {
    removingBouquetCandidate &&
      setRemovingBouquetId(removingBouquetCandidate.id);
    setTimeout(() => {
      removingBouquetCandidate &&
        removeItem(removingBouquetCandidate.id, "all");
    }, 250);
    closeDialog();
  };

  const handleDeleteItem = (bouquet: Bouquet) => {
    setRemovingBouquetCandidate(bouquet);
  };

  const decreaseQty = (bouquet: Bouquet) => {
    if (cartItems[bouquet.id] > 1) {
      removeItem(bouquet.id);
    } else {
      handleDeleteItem(bouquet);
    }
  };

  return (
    <>
      {!pageInitialized ? (
        <CartTotalSkeleton />
      ) : cartTotalQuantity === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartItemsList
            bouquets={bouquets}
            cartItems={cartItems}
            addItem={addItem}
            decreaseQty={decreaseQty}
            handleDeleteItem={handleDeleteItem}
            removingBouquetId={removingBouquetId}
          />
          <CartTotal
            isLoading={isLoading}
            cartTotalQuantity={cartTotalQuantity}
            cartTotal={cartTotal}
            proceedToCheckout={proceedToCheckout}
          />
        </>
      )}

      {removingBouquetCandidate && (
        <CartBouquetDeletionDialog
          open={!!removingBouquetCandidate}
          onRemovePressed={removeAndCloseDialog}
          onCancelPressed={closeDialog}
          bouquetName={removingBouquetCandidate.name}
        />
      )}

      {cartTotalQuantity !== 0 && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbarOpen}
          sx={{ top: { xxs: 64, sm: 80 } }}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            severity="info"
            variant="outlined"
            sx={{
              width: "100%",
              color: theme.palette.secondary.contrastText,
              bgcolor: theme.palette.secondary.main,
            }}
          >
            This is just a demo app!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
