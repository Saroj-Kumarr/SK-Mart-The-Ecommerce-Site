import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FcHome } from "react-icons/fc";
import ZeroList from "./ZeroList";

function Header() {
  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full -mt-8 bg-black">
        <div className="flex">
          {/* <h1 className="font-bold text-3xl text-white">
            SK <BiSolidShoppingBags className="inline text-[#FFC220] mb-1" />{" "}
            <span>Mart</span>
          </h1> */}
            <img src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png" alt="logo" className="h-10 -mt-2 inline-block"/>
            <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-32  flex flex-1  ">
          <input
            type="text"
            className="p-2 rounded-3xl w-[75%] focus:outline-[#0071DC]"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220] rounded-[50%]  w-8 h-8  flex justify-center items-center relative top-1 -left-9">
            <AiOutlineSearch className="inline text-center text-xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-4">
          <div className="text-white flex justify-around w-60  text-lg font-bold relative">
            <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
              Home
            </h1>
            <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
              Contact
            </h1>
            <h1 className="mt-[1px] text-[#FFC220] hover:text-white duration-300 mx-4 text-lg -mt-[4px]">
              Wishlist <span className=" relative -top-8 left-[68px] text-2xl">❤️</span> <span className=" relative -top-[35px] left-[43px] text-sm text-white" >3</span>
               {/* <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center relative -top-6 left-[68px]">
                3
              </div> */}
            </h1>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                3
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* <ZeroList /> */}
    </>
  );
}

export default Header;
