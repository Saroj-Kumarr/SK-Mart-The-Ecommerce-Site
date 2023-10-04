import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import { store } from "./Store";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

function ThirdList() {
  const [page, setPage] = useState(4);

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
    <>
      <h1 className="bg-slate-200 h-[1px] mt-10"></h1>

      <div className="flex mb-10 p-4 mt-10">
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
      <h1 className="bg-slate-200 h-[1px] mt-10"></h1>
    </>
  );
}

export default ThirdList;
