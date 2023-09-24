import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function CardFirst({ image, title, price, brand, rating }) {
  return (
    <div className="h-72 mx-2 container  rounded-xl shadow-2xl w-60">
       <AiOutlineHeart className="absolute" />
      <img className="rounded-xl h-44 w-60" src={image} alt="pic" />
      <div>
        <div className="flex justify-center">
          <h1>{title}</h1>
         
        </div>
        <div className="flex justify-around">
        <h1>💲{price}</h1>
          <h1>⭐{rating}</h1>
        </div>
      </div>
      <button className=" w-full mt-[32px] text-white  p-1 rounded-xl bg-blue-400 text-center">Add to cart</button>
    </div>
  );
}

export default CardFirst;
