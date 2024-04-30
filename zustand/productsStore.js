import { create } from "zustand";

export const useProductStore = create((set) => ({
  cartProducts: [],
  addToCartProducts: (item) =>
    set((state) => {
      let itemExist = state.cartProducts.find((prod) => prod.id === item.id);
      if (itemExist) {
        let newArr = state.cartProducts.map((prod) =>
          prod.id === item.id ? { ...prod, qty: prod.qty + 1 } : prod
        );
        return { cartProducts: newArr };
      } else {
        let newProduct = { ...item, qty: 1 };
        return { cartProducts: [...state.cartProducts, newProduct] };
      }
    }),
  removeFromCartProducts: (item) =>
    set((state) => {
      let qtyIsOne = item.qty === 1;
      if (qtyIsOne) {
        let remainingProducts = state.cartProducts.filter(
          (prod) => prod.id !== item.id
        );
        return { cartProducts: remainingProducts };
      } else {
        let newArr = state.cartProducts.map((prod) =>
          prod.id === item.id ? { ...prod, qty: prod.qty - 1 } : prod
        );
        return { cartProducts: newArr };
      }
    }),
  clearCartProducts: () => set({ cartProducts: [] }),
}));
