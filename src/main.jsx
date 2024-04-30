import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "../Redux/store.js";
// import ProductsContextProvider from "../context/ProductsContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ProductsContextProvider> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    {/* </ProductsContextProvider> */}
  </React.StrictMode>
);
