"use client";
import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";

function ClientSide() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      if (data.ok) {
        data.json().then((res) => setProducts(res));
      }
    });
  }, []);
  function addToCartHandler(item) {
    console.log(item);
  }
  return (
    <div className="flex flex-col gap-4 ">
      {products?.map((product, index) => (
        <div className="bg-slate-100 p-3 rounded-sm border" key={index}>
          <h1>{product?.id}</h1>
          <h2>{product?.title}</h2>
          <h4>{product?.price}</h4>
          <p>{product?.description}</p>
          <button
            onClick={() => addToCartHandler(product)}
            className="bg-orange-600 rounded-sm p-2 mt-4 text-white"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ClientSide;
