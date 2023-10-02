import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";


function Navbar() {
  return (
    <div className="flex justify-around z-20 bg-[#0071DC] p-6 items-center fixed w-full -mt-8">
      <div className="flex justify-between w-[30%]">
        <div className="text-white text-3xl">
          Walmart
          <img
            className="h-8 w-8 inline"
            src="https://cdn-icons-png.flaticon.com/512/5977/5977595.png"
            alt="icon"
          />
        </div>
        <div className="text-white  font-bold mt-2"><HiOutlineSquares2X2 className="inline mx-1 text-xl mb-1"/>Department</div>

        <div className="text-white font-bold mt-2"><HiOutlineSquares2X2 className="inline mx-1 text-xl mb-1"/>Services</div>
      </div>
      
      <div className="w-[68%] relative left-10 flex ml-4">
        <input
          type="text"
          className="p-2 rounded-3xl w-[85%] focus:outline-[#0071DC]"
          placeholder="Search everything at Walmart online and in store "
        />
        <div className="bg-[#FFC220] rounded-[50%]  w-8 h-8  flex justify-center items-center relative top-1 -left-9">
          <AiOutlineSearch className="inline text-center text-xl" />
        </div>
      </div>

      <div className="flex justify-between w-[20%]">
        <div className="flex">
          <div className="relative text-white relative top-4 -left-2 ">
            <AiOutlineHeart className="" />
          </div>
          <div>
            <div className="text-white"> Reorder</div>
            <div className="text-white text-md font-semibold">My Items</div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="relative text-white relative top-4 -left-2">
              <FaRegUser className="font-bold" />
            </div>
            <div>
              <div className="text-white">Sign in</div>
              <div className="text-white text-md font-semibold">Account</div>
            </div>
          </div>
        </div>
        <div className="text-white text-xl font-bold">
          <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
            3
          </div>
          <FiShoppingCart className="relative -top-1 -left-1" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
