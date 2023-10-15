import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Mobiles } from "./DataSet";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

function MobileMenu() {
  const [mobileData, setMobileData] = useState(Mobiles);
  const { id } = useParams();
  const [val, setValue] = useState(false);

  function selectItem() {
    if (val == false) {
      setValue(true);
    } else {
      setValue(false);
    }
  }

  const [
    {
      title,
      image,
      price,
      brand,
      rating,
      description,
      ordered,
      ram,
      rom,
      frontCamera,
      backCamera,
      Processor,
      display,
    },
  ] = mobileData;

  function firteredMobiles(id, mobileData) {
    const filteredData = mobileData.filter((obj) => {
      return obj.id == id;
    });

    return filteredData;
  }

  useEffect(() => {
    const data = firteredMobiles(id, mobileData);
    setMobileData(data);
  }, []);

  return (
    <div className="flex justify-center items-center relative mb-10 ">
      {mobileData.length == 1 && (
        <div className="test h-[400px] w-[800px] border-4 border-black  relative top-32 duration-500 rder-blue-500 flex">
          <div className="border-r-2">
            <img
              className="h-full hover:text-yellow-500 duration-500 w-[400px] border-4 border-yellow-400"
              src={image}
              alt="mobile"
            />
          </div>

          <div className="border-4 border-yellow-500 flex-1 p-1 text-[14px]  text-[15px] -ml-[5px]">
            <ul className="text-black relative left-4 font-medium list-disc hover:text-yellow-00 ">
              <li className="mt-1 ml-[5px] font-bold  text-2xl hover:text-yellow-500 duration-300">
                {title}
              </li>
              <li className="mt-2 hover:text-yellow-500 duration-300">
                <BsCurrencyRupee className="inline -mt-[2px] text-xl" />
                {price}
              </li>
              <li className="mt-2 hover:text-yellow-500 duration-300 text-black  px-1 mt-1">
                {ram} Ram + {rom} Rom
              </li>
              <li className="mt-2 hover:text-yellow-500 duration-300  px-1 ">
                {display}
              </li>
              <li className=" hover:text-yellow-500 duration-300  mt-2">
                {frontCamera} (front-camera)
              </li>
              <li className=" hover:text-yellow-500 duration-300  mt-2 px-1">
                {backCamera} (back-camera)
              </li>
              <li className="hover:text-yellow-500 duration-300 mt-2 ">
                {Processor}
              </li>
              <li className="mt-2 hover:text-yellow-500 duration-500">
                {rating} rating
              </li>
              <li className="hover:text-yellow-500 duration-300 py-[2px]  px-2 mt-2">
                {description}
              </li>
              <li className="hover:text-yellow-500 duration-300 py-[2px]  mt-2 px-1">
                {ordered}
              </li>
            </ul>
            <h1 className="h-[1px] relative mt-2"></h1>

            <div className="flex h-10 w-[103%] -ml-[5px] -mt-2">
              <button className=" w-full text-sm hover:bg-[#FFC220] hover:text-black text-[#FFC220] border-2 border-[#FFC220]  p-1  bg-black text-center font-bold duration-500 hover:border-black">
                Add to cart
              </button>
              <button className=" w-full text-sm border-2 hover:text-[#FFC220] duration-500 hover:border-[#FFC220]   hover:bg-black   text-black border-black  bg-[#FFC220] p-1  text-center  font-bold">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
