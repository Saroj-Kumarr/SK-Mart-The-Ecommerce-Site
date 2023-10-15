import React, { useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import {
  BsCircleFill,
  BsCurrencyRupee,
} from "react-icons/bs";

function CardFirst({
  image,
  title,
  price,
  rating,
}) {


  const [val, setValue] = useState(false);

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
     border-[3px] hover:shadow-2xl duration-300 border-black container  hover:border-[#FFC220] w-56 pb-5"
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
      
    </div>
  );
}

export default CardFirst;
