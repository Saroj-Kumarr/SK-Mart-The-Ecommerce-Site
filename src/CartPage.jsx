import React from "react";
import { useSelector } from "react-redux";
import { BsCartFill } from "react-icons/bs";
import CartItem from "./CartItem";
import { BsCurrencyRupee } from "react-icons/bs";

function CartPage() {
  const cartItems = useSelector((store) => store.cart.items);

  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }


  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }


  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }


  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }

  return (
    <div className="relative top-32 flex mb-96 h-[80vh] flex-col">
      <div className="text-xl text-center z-20 top-28 h-20 fixed w-[90%] bg-white  ml-20  border-b-2  pb-5 border-slate-300 font-semibold -mt-4">
        <span className="text-black relative top-5 ">
          Shopping Cart{" "}
          <BsCartFill className="inline text-3xl text-yellow-500 -mt-1" />
        </span>
      </div>

      <div className="flex mt-16  ">
        <div className=" w-[900px] ml-20">
          {cartItems &&
            cartItems.map(
              ({ id, title, price, rating, description, images }) => {
                return (
                  <CartItem
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    rating={rating}
                    description={description}
                    image={images[0]}
                  />
                );
              }
            )}
        </div>

        <div className="border-2 fixed right-60 border-yellow-500 my-5 ml-20 w-80 h-[455px] top-52 ">
          <div className="border-2 border-black h-full">
            <h1 className="text-center font-bold text-xl border-b-2 border-black mx-4 my-2 pb-2">
              Order Summary
            </h1>

            <div className="flex justify-between">
              <ul className="m-4 ml-6 font-semibold">
                <li className="m-2">5 items</li>
                <li className="m-2">Delivery charges</li>
                <li className="m-2">Gst and Taxes</li>
                <li className="m-2 mt-6 text-lg">Total</li>
              </ul>
              <ul className="m-4 mr-8 font-semibold">
                <li className="m-2">
                  <BsCurrencyRupee className="inline" />
                  2999
                </li>
                <li className="m-2">
                  <BsCurrencyRupee className="inline" />
                  149
                </li>
                <li className="m-2">
                  <BsCurrencyRupee className="inline" />
                  399
                </li>
                <li className="m-2 mt-4 text-lg">
                  <BsCurrencyRupee className="inline relative top-[29px] text-3xl -left-6 " />
                  2999
                </li>
                </li>
                </li>
              </ul>
            </div>
            <h1 className="h-[1px] relative -top-[62px] border-b-2 mx-4"></h1>
            
            <div className="flex justify-around">
              <div>
                <input
                  type="text"
                  className="text-center border-2 p-1 focus:outline-none"
                  placeholder=" SAROJ200 "
                />
                <button className="border-2 p-1 border-yellow-500 bg-black text-yellow-500">
                  Apply
                </button>
              </div>
            </div>
            <div>
              <button className="w-[90%] mt-4 ml-4 hover:bg-[#FFC220] hover:text-black text-[#FFC220] border-2 border-[#FFC220]  p-1  bg-black text-center font-bold duration-500 hover:border-black">
                Proceed to buy
              </button>
            </div>
            <div className="mt-2 ml-2">
              <div className="m-1 font-bold text-center mt-2">
                Accepted payment{" "}
              </div>
              <div className="flex justify-around mt-4">
                <button>
                  <img
                    className="h-7 border-2 border-blue-400 p-1 "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
                    alt="paytm"
                  />
                </button>
                <button>
                  <img
                    className="h-7 border-2 border-purple-700 p-[2px]"
                    src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
                    alt="phonepe"
                  />
                </button>
                <button>
                  <img
                    className="h-7 w-20 border-2 border-green-600 p-1 "
                    src="https://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png"
                    alt="googlepay"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
