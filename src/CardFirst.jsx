import React, { useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import {
  BsRecordCircleFill,
  BsCircleFill,
  BsStopCircleFill,
  BsCurrencyRupee,
} from "react-icons/bs";
import { store } from "./Store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "./SliceSecond";

function CardFirst({
  image,
  title,
  price,
  rating,
  id,
  brand,
  category,
  description,
}) {
  const selectDiv = useRef(null);

  const dispatch = useDispatch();

  const [val, setValue] = useState(false);

  const cartLength = useSelector((store) => store.cart.items);

  function addItemToCart() {
    dispatch(
      addItem({
        image: image,
        title: title,
        price: price,
        rating: rating,
        id: id,
        brand: brand,
        category: category,
        description: description,
      })
    );
    alert(cartLength.length);
  }

  function selectItem() {
    if (val == false) {
      setValue(true);
    } else {
      setValue(false);
    }
  }

  return (
    <div
      className="
     border-2 hover:shadow-2xl duration-300 border-[#FFC220] mx-4 my-4 container rounded-xl hover:border-blue-500 w-56"
    >
      <div >
        <div
          className="relative -mb-10  h-10 w-10 left-[82%] text-2xl"
          onClick={selectItem}
          ref={selectDiv}
        >
          {val == false ? <span className="relative z-50">🤍</span> : <span>❤️</span>}
        </div>
      </div>
      <img
        className="rounded-xl rounded-b-none w-full h-40 w-56 duration-300"
        src={image}
        alt="pic"
      />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mt-4">

            <div className="flex">
              <BsCircleFill className="text-red-500 mx-1" />
              <BsCircleFill className="text-cyan-500 mx-1" />
              <BsCircleFill className="text-purple-400 mx-1" />
            </div>
          
          </div>
          <h1 className="h-[1px] relative top-2 mx-6 bg-slate-400"></h1>
          <h1 className="h-6 overflow-hidden font-semibold text-center text-cyan-700 mt-1 relative top-1">
            {title}
          </h1>
        </div>
        <div className="flex justify-around mt-1 relative top-2 font-semibold ">
          <h1 className="text-cyan-600 text-lg">
            <BsCurrencyRupee className="inline -mt-[2px] text-3xl" />
            {price}
          </h1>

          <h1 className="text-purple-500">
            <IoIosStar className="inline GrStarOutline -mt-[5px] mr-[2px]" />
            {rating}
          </h1>
        </div>
      </div>
      <button
        onClick={() => addItemToCart()}
        className=" w-full mt-[28px] text-white  p-1 rounded-lg rounded-t-md hover:text-blue-500 duration-500 hover:bg-yellow-500 rounded-b-[10px] bg-blue-400 text-yellow-500 text-center font-bold"
      >
        Add to cart
      </button>
    </div>
  );
}

export default CardFirst;
