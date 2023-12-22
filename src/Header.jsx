import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";



function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.wishitems);

  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full  bg-black border-4 border-[#FFC220] h-24 ">
        <div className="flex">
          <img
            src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
            alt="logo"
            className="h-10 -mt-2 inline-block"
          />
          <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-28  flex flex-1  ">
          <input
            type="text"
            className="p-2 w-[75%] focus:outline-none border-[#FFC220] border-2"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220]  w-16 h-12  flex justify-center items-center relative">
            <AiOutlineSearch className="inline text-center text-3xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-6 ">
          <div className="text-white flex justify-around w-60  text-[18px] font-bold relative">
            <Link to="/">
              <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
                Home
              </h1>
            </Link>
            <Link to="/cartpage">
              <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
                Contact
              </h1>
            </Link>

            <Link to="/wishlist">
              <h1 className=" text-[#FFC220] hover:text-white duration-300 mx-4 text-lg relative -top-1">
                Wishlist{" "}
                <span className=" relative left-[72px] -top-[25px] text-2xl">
                  <BsFillHeartFill className="text-yellow-500" />
                </span>{" "}
                <span className="text-black relative -top-[58px] left-[80px] text-sm">
                  {wishlistItems.length}
                </span>
              </h1>
            </Link>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
















import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.wishitems);

  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full  bg-black border-4 border-[#FFC220] h-24 ">
        <div className="flex">
          <img
            src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
            alt="logo"
            className="h-10 -mt-2 inline-block"
          />
          <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-28  flex flex-1  ">
          <input
            type="text"
            className="p-2 w-[75%] focus:outline-none border-[#FFC220] border-2"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220]  w-16 h-12  flex justify-center items-center relative">
            <AiOutlineSearch className="inline text-center text-3xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-6 ">
          <div className="text-white flex justify-around w-60  text-[18px] font-bold relative">
            <Link to="/">
              <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
                Home
              </h1>
            </Link>
            <Link to="/cartpage">
              <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
                Contact
              </h1>
            </Link>

            <Link to="/wishlist">
              <h1 className=" text-[#FFC220] hover:text-white duration-300 mx-4 text-lg relative -top-1">
                Wishlist{" "}
                <span className=" relative left-[72px] -top-[25px] text-2xl">
                  <BsFillHeartFill className="text-yellow-500" />
                </span>{" "}
                <span className="text-black relative -top-[58px] left-[80px] text-sm">
                  {wishlistItems.length}
                </span>
              </h1>
            </Link>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;








import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.wishitems);

  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full  bg-black border-4 border-[#FFC220] h-24 ">
        <div className="flex">
          <img
            src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
            alt="logo"
            className="h-10 -mt-2 inline-block"
          />
          <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-28  flex flex-1  ">
          <input
            type="text"
            className="p-2 w-[75%] focus:outline-none border-[#FFC220] border-2"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220]  w-16 h-12  flex justify-center items-center relative">
            <AiOutlineSearch className="inline text-center text-3xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-6 ">
          <div className="text-white flex justify-around w-60  text-[18px] font-bold relative">
            <Link to="/">
              <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
                Home
              </h1>
            </Link>
            <Link to="/cartpage">
              <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
                Contact
              </h1>
            </Link>

            <Link to="/wishlist">
              <h1 className=" text-[#FFC220] hover:text-white duration-300 mx-4 text-lg relative -top-1">
                Wishlist{" "}
                <span className=" relative left-[72px] -top-[25px] text-2xl">
                  <BsFillHeartFill className="text-yellow-500" />
                </span>{" "}
                <span className="text-black relative -top-[58px] left-[80px] text-sm">
                  {wishlistItems.length}
                </span>
              </h1>
            </Link>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;









import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.wishitems);

  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full  bg-black border-4 border-[#FFC220] h-24 ">
        <div className="flex">
          <img
            src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
            alt="logo"
            className="h-10 -mt-2 inline-block"
          />
          <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-28  flex flex-1  ">
          <input
            type="text"
            className="p-2 w-[75%] focus:outline-none border-[#FFC220] border-2"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220]  w-16 h-12  flex justify-center items-center relative">
            <AiOutlineSearch className="inline text-center text-3xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-6 ">
          <div className="text-white flex justify-around w-60  text-[18px] font-bold relative">
            <Link to="/">
              <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
                Home
              </h1>
            </Link>
            <Link to="/cartpage">
              <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
                Contact
              </h1>
            </Link>

            <Link to="/wishlist">
              <h1 className=" text-[#FFC220] hover:text-white duration-300 mx-4 text-lg relative -top-1">
                Wishlist{" "}
                <span className=" relative left-[72px] -top-[25px] text-2xl">
                  <BsFillHeartFill className="text-yellow-500" />
                </span>{" "}
                <span className="text-black relative -top-[58px] left-[80px] text-sm">
                  {wishlistItems.length}
                </span>
              </h1>
            </Link>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;








import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store) => store.wishlist.wishitems);

  return (
    <>
      <div className="flex justify-around z-20 px-8 py-4 items-center fixed w-full  bg-black border-4 border-[#FFC220] h-24 ">
        <div className="flex">
          <img
            src="https://www.skmart.co.in/public/uploads/all/WK7dld3u0l1c34hHQlNwNWziuLaskkpib67H7isz.png"
            alt="logo"
            className="h-10 -mt-2 inline-block"
          />
          <BiSolidShoppingBags className="inline text-[#FFC220] relative -top-[2px] left-1 text-3xl" />
        </div>

        <div className="relative w-[600px] relative left-28  flex flex-1  ">
          <input
            type="text"
            className="p-2 w-[75%] focus:outline-none border-[#FFC220] border-2"
            placeholder="Search the product here..."
          />
          <div className="bg-[#FFC220]  w-16 h-12  flex justify-center items-center relative">
            <AiOutlineSearch className="inline text-center text-3xl" />
          </div>
        </div>

        <div className="flex justify-between w-[22%] relative top-6 ">
          <div className="text-white flex justify-around w-60  text-[18px] font-bold relative">
            <Link to="/">
              <h1 className="mt-[1px]  text-[#FFC220] relative z-20  hover:text-white duration-300 mx-4">
                Home
              </h1>
            </Link>
            <Link to="/cartpage">
              <h1 className="mt-[1px] text-[#FFC220] hover:text-white z-20 duration-300 mx-4">
                Contact
              </h1>
            </Link>

            <Link to="/wishlist">
              <h1 className=" text-[#FFC220] hover:text-white duration-300 mx-4 text-lg relative -top-1">
                Wishlist{" "}
                <span className=" relative left-[72px] -top-[25px] text-2xl">
                  <BsFillHeartFill className="text-yellow-500" />
                </span>{" "}
                <span className="text-black relative -top-[58px] left-[80px] text-sm">
                  {wishlistItems.length}
                </span>
              </h1>
            </Link>

            <div className="ml-4 -mt-1 ml-8">
              <div className="bg-[#FFC220] rounded-[50%]  w-5 h-5 text-black text-sm flex align-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart className="relative -top-1 -left-1 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
