"use client";

import CartTotal from "@/components/florist/Cart/CartTotal";
import CartTotalSkeleton from "@/components/florist/Cart/CartTotalSkeleton";
import EmptyCart from "@/components/florist/Cart/EmptyCart";
import useGetCartItemsInfo from "@/hooks/useGetCartItemsInfo";
import { useCart } from "@/store/store";

export default function CartPage({
  params,
}: {
  params: { floristName: string };
}) {
  const cartItems = useCart((state) => state.cartItems);
  const cartTotalQuantity = useCart((state) => state.cartTotalQuantity);

  const { bouquets, isLoading, cartTotal } = useGetCartItemsInfo(
    params.floristName,
    cartItems
  );

  console.log(bouquets);

  const proceedToCheckout = () => {
    console.log("checkout button pressed");
  };

  return (
    <>
      {isLoading ? (
        <CartTotalSkeleton />
      ) : cartTotalQuantity == 0 ? (
        <EmptyCart />
      ) : (
        <CartTotal
          cartTotalQuantity={cartTotalQuantity}
          cartTotal={cartTotal}
          proceedToCheckout={proceedToCheckout}
        />
      )}
    </>
  );
}
