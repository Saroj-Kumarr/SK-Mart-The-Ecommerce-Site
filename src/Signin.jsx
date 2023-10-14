import React from "react";
import banner from "./Images/banner.jpg";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaPrayingHands } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

function Signup() {
  return (
    <div className="test h-[64vh] border-black relative top-32 w-[70%] left-52 flex border-2 p-4">
      <div className="w-[70%] ">
        <img src={banner} alt="banner" />
      </div>
      <div className="w-[40%]">
        <div className="">
          <div className="flex items-center justify-center">
            <form className="font-semibold border-2 border-black p-2 pb-3 mt-4">
              <h1 className="font-bold w-full border-2 border-[#FFC220] text-center text-[#FFC220] my-2 bg-black p-2">
                <span className="text-2xl relative ">
                  {" "}
                  Welcome{" "}
                  <FaPrayingHands className="inline text-3xl mx-1 -mt-2 text-[#D8AC87]" />{" "}
                </span>
                <img
                  src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
                  alt="logo"
                  className="h-10 -mt-2 inline-block"
                />
                <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
                {/* SK <BiSolidShoppingBags className="inline text-[#FFC220] mb-1" />{" "}
            <span>Mart</span> */}
              </h1>
              
              <div className="border-b-2 border-black mb-1 mx-5">
                <label className="ml-20  relative top-2 inline-block">
                  <MdEmail className="text-2xl" />
                </label>
                <input
                  type="text"
                  className=" focus:outline-none  my-3 px-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="border-b-2 border-black mb-1 mx-5">
                <label className="ml-20  relative top-2 inline-block">
                  <BsFillFileLock2Fill className="text-2xl" />
                </label>
                <input
                  type="text"
                  className=" focus:outline-none  my-3 px-2"
                  placeholder="Enter your password"
                />
              </div>

              <button className="bg-black hover:scale-105 duration-500  text-white font-bold w-[90%] ml-5 p-3 border-2 border-[#FFC220] mt-3">
                Sign in
              </button>
              <button className="border-2 border-black mt-4 font-bold  w-[90%] ml-5 hover:scale-105 text-center  duration-500 ">
                <FcGoogle className="text-2xl relative top-3 left-16" />{" "}
                <span className="relative -top-3 left-2">
                  Sign in with google
                </span>
              </button>
              <button className="border-2 border-black mt-4 font-bold  w-[90%] ml-5 hover:scale-105  text-blue-500 text-center duration-500">
                <FaFacebookSquare className="relative  text-2xl left-16 top-3" />{" "}
                <span className="relative -top-3 left-4 text-black">
                  Sign in with facebook
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
