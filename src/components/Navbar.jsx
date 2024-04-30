// import { useSelector } from "react-redux";
import { useProductStore } from "../../zustand/productsStore";
// import { useProductsContext } from "../../context/ProductsContextProvider";

function Navbar({ setIsModelOpen }) {
  // const { cartProducts } = useProductsContext();
  // const { products: cartProducts } = useSelector((state) => state);
  const cartProducts = useProductStore((state) => state.cartProducts);
  return (
    <nav className="bg-white fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-wider">Duka</h2>
        <div className="flex space-x-3">
          <button
            type="button"
            className="relative inline-flex items-center px-2.5 py-1.5 text-sm font-medium text-center text-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => setIsModelOpen(true)}
          >
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold p-2 text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1">
              {cartProducts.length}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
