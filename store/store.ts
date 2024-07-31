import { create } from "zustand";
import { persist } from "zustand/middleware";
import CartStoreItems from "@/lib/types/CartStoreItems";
import Bouquet from "@/lib/types/Bouquet";

interface UseCart {
  cartItems: CartStoreItems;
  cartTotalQuantity: number;
  addItem: (id: Bouquet["id"]) => void;
  removeItem: (bouquet: Bouquet["id"], all?: "all") => void;
}



export const useCart = create<UseCart>()(
  persist(
    (set) => ({
      cartItems: {},
      cartTotalQuantity: 0,

      addItem: (id) =>
        set((state) => {
          const currentQuantity = state.cartItems[id];
          const newItems = {
            ...state.cartItems,
            [id]: currentQuantity ? currentQuantity + 1 : 1,
          };
          return {
            cartItems: newItems,
            cartTotalQuantity: Object.values(newItems).reduce(
              (sum, item) => (sum += item),
              0
            ),
          };
        }),

      removeItem: (id, all) =>
        set((state) => {
          const currentQuantity = state.cartItems[id];
          if (currentQuantity) {
            if (currentQuantity > 1) {
              if (all) {
                delete state.cartItems[id];
              } else {
                state.cartItems[id] -= 1;
              }
            } else {
              delete state.cartItems[id];
            }
          }

          return {
            cartItems: { ...state.cartItems },
            cartTotalQuantity: Object.values(state.cartItems).reduce(
              (sum, item) => (sum += item),
              0
            ),
          };
        }),
    }),
    { name: "proflorist-store", version: 1 }
  )
);
