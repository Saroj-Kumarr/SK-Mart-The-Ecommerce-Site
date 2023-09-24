import React, { useEffect, useState } from "react";
import axios from "axios";
import { fireEvent } from "@testing-library/react";
import CardFirst from "./CardFirst";

function FirstList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchProducts() {
    const productData = await fetch("https://dummyjson.com/products");
    const modifiedData = await productData.json();
    console.log(modifiedData.products);
    setProducts(modifiedData.products);
  }

  function handlePageNext() {
    if (page < 5) setPage(page + 1);
    else setPage(1);
  }

  function handlePagePrev() {
    if (page > 1) setPage(page - 1);
    else setPage(5);
  }

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="flex mb-10 p-4 mt-20">
      <button
        onClick={() => {
          handlePagePrev();
        }}
      >
        ◀️
      </button>

      {products.length > 0 &&
        products.slice(page * 6 - 6, page * 6).map((obj) => {
          return (
            <CardFirst
              image={obj.images[0]}
              title={obj.title}
              price={obj.price}
              rating={obj.rating}
            
              key={obj.id}
            />
          );
        })}
      <button
        onClick={() => {
          handlePageNext();
        }}
      >
        ▶️
      </button>
    </div>
  );
}

export default FirstList;
