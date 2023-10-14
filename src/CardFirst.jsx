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
     border-2 hover:shadow-2xl duration-300 border-black mx-4 my-4 container  hover:border-[#FFC220] w-56"
    >
      
      <img className=" w-full h-40 w-56 duration-300" src={image} alt="pic" />
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
          <h1 className="h-6 overflow-hidden font-bold text-center text-cyan-700 mt-1 relative top-1">
            {title}
          </h1>
        </div>
        <div className="flex justify-around mt-1 relative top-2 font-semibold ">
          <h1 className="text-black text-lg">
            <BsCurrencyRupee className="inline -mt-[2px] text-3xl" />
            {price}
          </h1>

          <h1 className="text-[#FFC220]">
            <IoIosStar className="inline GrStarOutline -mt-[5px] mr-[2px]" />
            {rating}
          </h1>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => addItemToCart()}
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

export default CardFirst;
