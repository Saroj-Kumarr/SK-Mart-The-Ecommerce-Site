import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiSolidShoppingBags } from "react-icons/bi";
import ZeroList from "./ZeroList";

function Header() {
  return (
    <>
      <div className="flex justify-around z-20 bg-[#0071DC] p-6 items-center fixed w-full -mt-8">
        <div className="flex">
          <h1 className="font-bold text-3xl text-white">
            SK <BiSolidShoppingBags className="inline text-[#FFC220] mb-1" />{" "}
            <span>Mart</span>
          </h1>
        </div>

        <div className="relative w-[600px] relative left-20  flex flex-1 ">
          <input
            type="text"
            className="p-2 rounded-3xl w-[85%] focus:outline-[#0071DC]"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220] rounded-[50%]  w-8 h-8  flex justify-center items-center relative top-1 -left-9">
            <AiOutlineSearch className="inline text-center text-xl" />
          </div>
        </div>

        <div className="flex justify-between w-[20%]">
          <div className="text-white flex justify-around w-60  text-xl font-bold">
            <h1 className="mt-[1px] relative z-20  text-[#FFC220] hover:text-white duration-300">
              Home
            </h1>
            <h1 className="mt-[1px] text-[#FFC220] hover:text-white duration-300">
              Contact
            </h1>
            <FaUserCircle className="text-2xl ml-2 mt-[5px]" />
            <div className="ml-4 -mt-1">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                3
              </div>
              <FiShoppingCart className="relative -top-1 -left-1" />
            </div>
          </div>
        </div>
      </div>
      <ZeroList />
    </>
  );
}

export default Header;
