// import { useDispatch } from "react-redux";
// import { addToCartProducts } from "../../Redux/features/products/productSlice";
// import { useProductStore } from "../../zustand/productsStore";
// import { useProductsContext } from "../../context/ProductsContextProvider";

import { useRecoilState } from "recoil";
import { cartProductsState } from "../../recoil/cartStore";

function ProductCard({ product }) {
  // const { addToCartProducts } = useProductsContext();
  // const addToCartProducts = useProductStore((state) => state.addToCartProducts);
  // const dispatch = useDispatch();
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

  return (
    <div>
      <div className="bg-[#F2F2F2] p-3 rounded-md mb-2 flex flex-col justify-center items-center h-56 relative">
        <div className="w-1/2 h-28">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full mix-blend-multiply"
          />
        </div>
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full hover:scale-110 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between p-1">
        <div>
          <p className="text-gray-500">
            {product?.title?.length > 20
              ? product?.title?.slice(0, 20) + " ..."
              : product?.title}
          </p>
          <p className="font-semibold tracking-wide">${product?.price}</p>
        </div>
        <div
          onClick={() => addToCartProducts(product)}
          className="p-2 rounded-full border border-gray-300 hover:scale-110 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
