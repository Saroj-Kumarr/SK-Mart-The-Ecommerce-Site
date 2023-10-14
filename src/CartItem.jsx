import React from 'react';
import { FcRating } from "react-icons/fc";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";

function CartItem({id,image,title,price,rating,description}) {
  return (
    <div className="flex ml-40 my-5">
        <div className="border-2 flex border-yellow-500">
          <div className="border-2 border-black">
            <img
              className="w-40 h-full hover:scale-95 duration-500"
              src={image}
              alt="mobile"
            />
          </div>
          <div className="-ml-[1px] pl-2 w-[550px] border-2 border-black">
            <h1 className="font-bold text-xl hover:text-yellow-500 duration-500">
              {title}
            </h1>
            <h1 className="font-semibold -ml-1 hover:text-yellow-500 duration-500">
              <BsCurrencyRupee className="inline text-xl -mt-1" />
              {price}
            </h1>
            <h1 className="font-bold hover:text-yellow-500 duration-500 ">
              {rating}
              <img
                className="w-5 inline-block -mt-[7px]"
                src="https://static.vecteezy.com/system/resources/previews/004/057/706/non_2x/gold-star-decoration-free-vector.jpg"
                alt="rating"
              />
            </h1>
            <h1 className="font-semibold text-sm hover:text-yellow-500 duration-500">
             {description}
            </h1>
            <div className="mt-2 flex justify-between">
              <div className="">
                <button>
                  <AiFillMinusSquare className="text-2xl text-red-600 hover:text-red-700 duration-300" />
                </button>
                <span className="mx-1 text-[13px] relative -top-[7px] border-2 border-yellow-500 bg-black text-yellow-500 px-2 font-bold">
                  5
                </span>
                <button>
                  <AiFillPlusSquare className="text-2xl text-green-500 hover:text-green-700 duration-500" />
                </button>
              </div>

              <div className="relative -left-6">
                <button className="font-semibold border-2 bg-black border-yellow-500 text-yellow-500 px-1 hover:text-black hover:bg-yellow-500 duration-500 hover:border-black relative -top-1 ">
                  Add to wishlist
                </button>
                <button className="text-2xl text-red-500 hover:text-red-700 -mt-3">
                  <RiDeleteBin2Fill className="ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
  )
}

export default CartItem