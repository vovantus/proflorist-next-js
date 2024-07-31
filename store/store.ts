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

          return {
            cartItems: {
              ...state.cartItems,
              [id]: currentQuantity ? currentQuantity + 1 : 1,
            },
            cartTotalQuantity: (state.cartTotalQuantity += 1),
          };
        }),

      removeItem: (id, all) =>
        set((state) => {
          const currentQuantity = state.cartItems[id];
          let cartTotalQuantity = state.cartTotalQuantity;
          if (currentQuantity) {
            if (currentQuantity > 1) {
              if (all) {
                cartTotalQuantity -= state.cartItems[id];
                delete state.cartItems[id];
              } else {
                cartTotalQuantity -= 1;
                state.cartItems[id] -= 1;
              }
            } else {
              delete state.cartItems[id];
            }
          }

          return {
            cartItems: { ...state.cartItems },
            cartTotalQuantity: cartTotalQuantity,
          };
        }),
    }),
    { name: "proflorist-store", version: 1 }
  )
);
