import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="container mx-auto px-4 py-2 my-3 mt-10">
      <h2 className="font-bold text-center text-2xl tracking-widest">
        New Arrivals
      </h2>
      <p className="text-center my-3">
        Our news arrivals are built to withstand your activities while keeping
        you looking your best!
      </p>
      <div className="my-8 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
