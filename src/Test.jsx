import React from "react";
import { useSelector } from "react-redux";
import { store } from "./Store";

function Test() {
  const product = useSelector((store) => store.products.data);

  console.log(product);

  

  return (
    <div>
      {product && product.map((obj)=>{
        return <li key={obj.id}>{obj.id}</li>
      })}
    </div>
  );
}

export default Test;
