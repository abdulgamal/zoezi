// import { useDispatch } from "react-redux";
// import {
//   addToCartProducts,
//   removeFromCartProducts,
// } from "../../Redux/features/products/productSlice";
import { useRecoilState } from "recoil";
// import { useProductStore } from "../../zustand/productsStore";
import { cartProductsState } from "../../recoil/cartStore";
// import { useProductsContext } from "../../context/ProductsContextProvider";

function CartCard({ product }) {
  // const { addToCartProducts, removeFromCartProducts } = useProductsContext();
  // const dispatch = useDispatch();
  // const addToCartProducts = useProductStore((state) => state.addToCartProducts);
  // const removeFromCartProducts = useProductStore(
  //   (state) => state.removeFromCartProducts
  // );
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsState);

  const addToCartProducts = (prod) => {
    let existingProduct = cartProducts.find((item) => item.id === prod.id);
    if (existingProduct) {
      let newProducts = cartProducts.map((product) =>
        product.id === prod.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCartProducts(newProducts);
    } else {
      let newProduct = { ...product, qty: 1 };
      setCartProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  const removeFromCartProducts = (prod) => {
    let qtyIsOne = prod.qty === 1;
    if (qtyIsOne) {
      let newProducts = cartProducts.filter(
        (product) => product.id !== prod.id
      );
      setCartProducts(newProducts);
    } else {
      let newProducts = cartProducts.map((product) =>
        product.id === prod.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCartProducts(newProducts);
    }
  };

  return (
    <li className="flex items-center gap-4">
      <img
        alt=""
        src={product?.image}
        className="size-16 rounded object-cover mix-blend-multiply"
      />
      <div>
        <h3 className="text-sm text-gray-900">
          {product?.title?.length > 15
            ? product?.title.slice(0, 15) + " ..."
            : product?.title}
        </h3>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <button
          className="text-gray-600 transition hover:text-teal-600"
          onClick={() => addToCartProducts(product)}
        >
          <span className="sr-only">Add item</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <p className="h-8 w-12 rounded flex justify-center items-center border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
          {product?.qty}
        </p>
        <button
          className="text-gray-600 transition hover:text-red-600"
          onClick={() => removeFromCartProducts(product)}
        >
          <span className="sr-only">Remove item</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default CartCard;
