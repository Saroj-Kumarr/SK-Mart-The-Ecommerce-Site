import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function CardFirst({ image, title, price, brand, rating, Test }) {
  return (
    <div className="h-72 border-2 hover:shadow-2xl duration-300 border-[#FFC220] mx-4 my-4 container rounded-xl hover:border-blue-500 shadow-2xl w-60">
      {/* <AiOutlineHeart className="absolute" /> */}
      <img
        className="rounded-xl h-44 w-56 duration-300"
        src={image}
        alt="pic"
      />
      <div>
        <div className="flex justify-center">
          <h1 className="h-6 overflow-hidden">{title}</h1>
        </div>
        <div className="flex justify-around">
          <h1>💲{price}</h1>
          <h1>⭐{rating}</h1>
        </div>
      </div>
      <button className=" w-full mt-[28px] text-white  p-1 rounded-lg bg-blue-400 text-center">
        Add to cart
      </button>
    </div>
  );
}

export default CardFirst;
