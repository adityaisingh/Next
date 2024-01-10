"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProduct(data.product);
  }, []);

  return (
    <div>
      <h4>Product Lists</h4>
      {product.map((items) => {
        <h3>{items.product}</h3>;
      })}
    </div>
  );
}
