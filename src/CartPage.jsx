import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "./Store";
import { BsCartFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import {AiFillPlusSquare,AiFillMinusSquare} from 'react-icons/ai';
import {BsCurrencyRupee} from 'react-icons/bs';
import {RiDeleteBin2Fill} from 'react-icons/ri';

function CartPage() {
  const cartItems = useSelector((store) => store.cart.items);

  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }

  return (
    <div className="relative top-52 flex  flex-col">
      <h1 className="text-xl text-center  border-b-2 mx-10 pb-2 border-black font-semibold mt-4">
        Shopping cart{" "}
        <BsCartFill className="inline text-3xl text-yellow-500 -mt-1" />
      </h1>

      <div className="flex justify-around my-5">
        <div className="border-2 flex border-yellow-500">
          <div className="border-2 border-black">
            <img
              className="w-32 hover:scale-95 duration-500"
              src="https://img.freepik.com/free-vector/modern-oval-notch-smartphone-realistic-mockup_78370-1060.jpg?w=740&t=st=1697316415~exp=1697317015~hmac=70bfb044c3bd2b5092219b71fcf2681c172b808da73481a226a5a67a29e9e201"
              alt="mobile"
            />
          </div>
          <div className="-ml-[1px] pl-2 w-[500px] border-2 border-black">
            <h1 className="font-bold text-xl hover:text-yellow-500 duration-500">Samsung S23 ultra</h1>
            <h1 className="font-semibold -ml-1 hover:text-yellow-500 duration-500"><BsCurrencyRupee className="inline text-xl -mt-1"/>1299</h1>
            <h1 className="font-bold hover:text-yellow-500 duration-500 ">
              4.5{" "}
              <img
                className="w-5 inline-block -mt-[7px]"
                src="https://static.vecteezy.com/system/resources/previews/004/057/706/non_2x/gold-star-decoration-free-vector.jpg"
                alt="rating"
              />
            </h1>
            <h1 className="font-semibold text-sm hover:text-yellow-500 duration-500">This is the best camera phone in </h1>
            <div className="mt-1">
              <button>
                <AiFillMinusSquare className="text-2xl text-red-600 hover:text-red-700 duration-300" />
              </button>
              <span className="mx-1 text-[13px] relative -top-[7px] border-2 border-yellow-500 bg-black text-yellow-500 px-2 font-bold">5</span>
              <button>
                <AiFillPlusSquare className="text-2xl text-green-500 hover:text-green-700 duration-500" />
              </button>
           <div className="flex justify-end relative -left-6 -top-5">
           <button className="font-semibold border-2 bg-black border-yellow-500 text-yellow-500 px-1 hover:text-black hover:bg-yellow-500 duration-500 hover:border-black relative -top-1 ">Add to wishlist</button>
              <button className="text-2xl text-red-500 hover:text-red-700 -mt-3"><RiDeleteBin2Fill className="ml-3"/></button>
           </div>
            </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default CartPage;
