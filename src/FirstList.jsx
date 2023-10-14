import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import { store } from "./Store";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./SliceSecond";

function FirstList() {
  const [page, setPage] = useState(2);

  const productItems = useSelector((store) => store.products.data);

  const dispatch = useDispatch();

  const cartLength = useSelector((store) => store.cart.items);
  

  function addItemToCart(obj) {
    dispatch(addItem(obj));

  }

  
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
                  <div className="border-[3px] border-yellow-500 mx-2" key={id}>
                    <Link to={"/" + id}>
                      <CardFirst
                        brand={brand}
                        category={category}
                        description={description}
                        image={images[0]}
                        title={title}
                        price={price}
                        rating={rating}
                       
                      />
                    </Link>
                    <div className="flex w-56 -mt-10">
                      <button
                        onClick={() =>
                          addItemToCart({
                            id: id,
                            brand: brand,
                            price: price,
                            description: description,
                            title: title,
                            images: images,
                            category: category,
                            rating: rating,
                          })
                        }
                        className=" w-full text-sm mt-[28px] hover:bg-[#FFC220] hover:text-black text-[#FFC220] border-2 border-[#FFC220]  p-1  bg-black text-center font-bold duration-500 hover:border-black"
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => addItemToCart()}
                        className=" w-full text-sm border-2 hover:text-[#FFC220] duration-500 hover:border-[#FFC220]   hover:bg-black   text-black border-black  bg-[#FFC220] mt-[28px] p-1  text-center  font-bold"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
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
