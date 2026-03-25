import type { CartProduct } from "@/interfaces/product.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;

  addProductToCart: (cartProduct: CartProduct) => void;
  updateProductQuantity: (cartProduct: CartProduct, quantity: number) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart: (product) => {
        const { cart } = get();
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size,
        );
        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
      updateProductQuantity: (cartProduct: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === cartProduct.id && item.size === cartProduct.size) {
            return { ...item, quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
      getTotalItems: () => {
        const { cart } = get();

        const total = cart.reduce((pv, cv) => {
          return pv + cv.quantity;
        }, 0);

        return total;
      },
    }),
    {
      name: "shopping-cart",
    },
  ),
);
