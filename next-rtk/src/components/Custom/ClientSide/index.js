"use client";
import React, { useEffect, useState } from "react";

function ClientSide() {
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
        <div key={index}>
          <h1>{product?.title}</h1>
          <p>{product?.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ClientSide;
