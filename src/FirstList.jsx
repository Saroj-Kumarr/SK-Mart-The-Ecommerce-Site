import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import { store } from "./Store";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function FirstList() {
  const [page, setPage] = useState(2);

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
      <h1 className="bg-slate-200 h-[1px] m-6 mt-10"></h1>
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
          productItems
            .slice(page * 6 - 6, page * 6)
            .map(
              ({
                id,
                brand,
                price,
                description,
                title,
                images,
                category,
                rating,
              }) => {
                return (
                  <Link to={"/" + id}>
                    <CardFirst
                      brand={brand}
                      category={category}
                      description={description}
                      image={images[0]} 
                      title={title}
                      price={price}
                      rating={rating}
                      key={id}
                    />
                  </Link>
                );
              }
            )
        )}
        <button
          onClick={() => {
            handlePageNext();
          }}
        >
          ▶️
        </button>
      </div>
    </>
  );
}

export default FirstList;
