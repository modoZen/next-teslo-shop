import type { CartProduct } from "@/interfaces/product.interface";
import { create } from "zustand";

interface State {
  cart: CartProduct[];

  addProductToCart: (cartProduct: CartProduct) => void;
}

export const useCartStore = create<State>()((set, get) => ({
  cart: [],
  addProductToCart: (product) => {
    const { cart } = get();
    console.log(cart);
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
}));
