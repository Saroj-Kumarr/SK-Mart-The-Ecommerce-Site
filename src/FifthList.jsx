import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import { store } from "./Store";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

function FifthList() {
  const [page, setPage] = useState(3);

  const productItems = useSelector((store) => store.products.data);

  function handlePageNext() {
    if (page < 5) setPage(page + 1);
    else setPage(1);
  }

  function handlePagePrev() {
    if (page > 1) setPage(page - 1);
    else setPage(5);
  }

  return (
    <div className="flex mb-10 p-4 mt-20">
      <button
        onClick={() => {
          handlePagePrev();
        }}
      >
        ◀️
      </button>

      {productItems.length == 0 ? (
        <Shimmer />
      ) : (
        productItems.slice(page * 6 - 6, page * 6).map((obj) => {
          return (
            <CardFirst
              image={obj.images[0]}
              title={obj.title}
              price={obj.price}
              rating={obj.rating}
              key={obj.id}
            />
          );
        })
      )}
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

export default FifthList;
