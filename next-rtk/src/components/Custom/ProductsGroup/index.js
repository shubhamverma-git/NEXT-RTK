"use client";
import React, { useEffect, useState } from "react";

function ProductsGroup() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      if (data.ok) {
        data.json().then((res) => setProducts(res));
      }
    });
  }, []);
  return (
    <div>
      {products?.map((product, index) => (
        <div key={index}>{product?.title}</div>
      ))}
    </div>
  );
}

export default ProductsGroup;

// without 'use client'

// async function ProductsGroup() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const products = await response.json();
//   return (
//     <div>
//       {products?.map((product, index) => (
//         <div key={index}>{product?.title}</div>
//       ))}
//     </div>
//   );
// }

// export default ProductsGroup;
