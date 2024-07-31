import floristApi from "@/lib/floristApi";
import Bouquet from "@/lib/types/Bouquet";
import CartItems from "@/lib/types/CartStoreItems";
import { useEffect, useState } from "react";

const useGetCartItemsInfo = (
  floristName: string,
  cartItems: Bouquet["id"][]
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    floristApi
      .fetchBouquetsById(floristName, cartItems)
      .then((bouquets) => {
        setBouquets(bouquets);
      })
      .catch((err) => {
        setError("Failed to fetch bouquets");
      })
      .finally(() => setIsLoading(false));
  }, [floristName, cartItems]);

  return { bouquets, isLoading, error };
};

export default useGetCartItemsInfo;
