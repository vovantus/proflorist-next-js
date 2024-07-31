import floristApi from "@/lib/floristApi";
import CartProduct from "@/lib/types/CartProduct";
import CartItems from "@/lib/types/CartStoreItems";
import { useEffect, useState } from "react";

const useGetCartItemsInfo = (floristName: string, cartItems: CartItems) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bouquets, setBouquets] = useState<CartProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const productIds = Object.keys(cartItems);

    if (productIds.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    floristApi
      .fetchBouquetsById(floristName, productIds)
      .then((bouquets) => {
        const cartProducts = bouquets.map((bouq) => ({
          ...bouq,
          quantity: cartItems[bouq.id],
        }));
        setBouquets(cartProducts);
      })
      .catch((err) => {
        setError("Failed to fetch bouquets");
      })
      .finally(() => setIsLoading(false));
  }, [floristName, cartItems]);

  const cartTotal =
    Math.round(
      bouquets.reduce((acc, bouq) => (acc += bouq.price * bouq.quantity), 0) *
        100
    ) / 100;

  return { bouquets, isLoading, cartTotal, error };
};

export default useGetCartItemsInfo;
