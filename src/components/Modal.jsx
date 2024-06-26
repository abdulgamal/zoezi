// import { useDispatch, useSelector } from "react-redux";
// import { useProductsContext } from "../../context/ProductsContextProvider";
import { useRecoilState } from "recoil";
import CartCard from "./CartCard";
import { cartProductsState } from "../../recoil/cartStore";
// import { clearCartProducts } from "../../Redux/features/products/productSlice";
// import { useProductStore } from "../../zustand/productsStore";

function Modal({ isModelOpen, setIsModelOpen }) {
  // const { cartProducts, clearCartProducts } = useProductsContext();
  // const { products: cartProducts } = useSelector((state) => state);
  // const cartProducts = useProductStore((state) => state.cartProducts);
  // const clearCartProducts = useProductStore((state) => state.clearCartProducts);
  // const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsState);

  let total = cartProducts.reduce(
    (acc, curr) => curr.price * curr.qty + acc,
    0
  );

  const clearCartProducts = () => setCartProducts([]);
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={`${
        !isModelOpen && "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full h-full justify-center items-center flex">
        <div className="relative bg-gray-300 rounded-lg shadow max-w-xl p-5">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Products in Cart
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={() => setIsModelOpen(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            {cartProducts.length === 0 && (
              <p className="text-center text-lg leading-relaxed text-gray-500">
                No products Available. Add products to the cart!
              </p>
            )}
            {cartProducts.length > 0 && (
              <ul className="space-y-4">
                {cartProducts.map((prod) => (
                  <CartCard key={prod?.id} product={prod} />
                ))}
              </ul>
            )}
          </div>
          {cartProducts.length > 0 && (
            <div className="my-2 flex justify-end">
              <p className="text-gray-600 font-semibold">
                Total: {total.toFixed(2)}
              </p>
            </div>
          )}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={clearCartProducts}
            >
              Checkout
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => setIsModelOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
