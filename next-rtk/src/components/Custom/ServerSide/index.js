import React from "react";

async function ClientSide() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div>
      {products?.map((product, index) => (
        <div key={index}>{product?.title}</div>
      ))}
    </div>
  );
}

export default ClientSide;
