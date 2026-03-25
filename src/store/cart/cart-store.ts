import type { CartProduct } from "@/interfaces/product.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;

  getSummaryInformation: () => {
    subsTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  addProductToCart: (cartProduct: CartProduct) => void;
  updateProductQuantity: (cartProduct: CartProduct, quantity: number) => void;
  removeProduct: (cartProduct: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();

        const total = cart.reduce((pv, cv) => {
          return pv + cv.quantity;
        }, 0);

        return total;
      },
      getSummaryInformation: () => {
        const { cart } = get();

        const subsTotal = cart.reduce(
          (subTotal, product) => product.price * product.quantity + subTotal,
          0,
        );

        const tax = subsTotal * 0.15;
        const total = subsTotal + tax;

        const itemsInCart = cart.reduce((pv, cv) => {
          return pv + cv.quantity;
        }, 0);

        return {
          subsTotal,
          tax,
          total,
          itemsInCart,
        };
      },

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
      removeProduct: (cartProduct) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) =>
            !(item.id === cartProduct.id && item.size === cartProduct.size),
        );

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: "shopping-cart",
    },
  ),
);
