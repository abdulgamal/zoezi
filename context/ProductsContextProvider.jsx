import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

function ProductsContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCartProducts = (item) => {
    let itemExists = cartProducts.filter((prod) => prod.id === item.id);
    if (itemExists.length > 0) {
      let newProducts = cartProducts.map((prod) =>
        prod.id == item.id ? { ...prod, qty: prod.qty + 1 } : prod
      );
      setCartProducts(newProducts);
      return;
    }
    let newProduct = { ...item, qty: 1 };
    setCartProducts((prev) => [...prev, newProduct]);
  };

  const removeFromCartProducts = (item) => {
    let qtyIsOne = item.qty == 1;
    if (qtyIsOne) {
      let remainingProducts = cartProducts.filter(
        (prod) => prod.id !== item.id
      );
      setCartProducts(remainingProducts);
      return;
    }
    let newProducts = cartProducts.map((prod) =>
      prod.id == item.id ? { ...prod, qty: prod.qty - 1 } : prod
    );
    setCartProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        addToCartProducts,
        removeFromCartProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductsContext() {
  const values = useContext(ProductContext);

  return values;
}

export default ProductsContextProvider;
