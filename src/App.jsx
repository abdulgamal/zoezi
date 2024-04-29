import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Products />
    </main>
  );
}

export default App;
