import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Mobiles } from "./DataSet";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

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
    <div className="flex h-[78vh] justify-center items-center mt-32 relative top-2 ">
      {mobileData.length == 1 && (
        <div className="test border-4 border-yellow-500 rounded-2xl relative top-12 duration-500 hover:border-blue-500 flex w-[740px]">
          <div className="border-r-2 w-[60%] ">
            <img className="h-full rounded-2xl" src={image} alt="mobile" />
          </div>

          <div className="ml-1 mt-2 flex-1 p-1">
            <div
              className="relative -mb-10  h-10 w-10 left-[82%] z-100 text-3xl"
              onClick={selectItem}
            >
              {val == false ? <span>🤍</span> : <span>❤️</span>}
            </div>

            <ul className=" text-white text-center font-semibold">
              <li className="text-white  rounded-lg bg-teal-500 text-xl">
                {title}
              </li>
              <li className="bg-cyan-400 rounded-lg mt-1">
                <BsCurrencyRupee className="inline -mt-[2px] text-xl" />
                {price}
              </li>
              <li className="bg-green-400 mt-1 rounded-lg px-1 mt-1">
                {ram} Ram + {rom} Rom
              </li>
              <li className="bg-purple-500 mt-1 rounded-lg px-1 ">
                {display}
              </li>
              <li className="bg-amber-500 rounded-lg  mt-1">
                {frontCamera} (front-camera)
              </li>
              <li className="bg-lime-500 rounded-lg mt-1 px-1">
                {backCamera} (back-camera)
              </li>
              <li className="rounded-lg bg-fuchsia-500 mt-1 ">
                {Processor}
              </li>
              <li className="border-2  bg-green-500 text-white rounded-lg mt-1">
                {rating} rating
              </li>
              <li className="bg-slate-500 py-[2px] rounded-lg px-2 mt-1">
                {description}
              </li>
              <li className="bg-red-400 py-[2px] rounded-lg mt-1 px-1">
                {ordered}
              </li>
            </ul>
            <h1 className="h-[1px] relative bg-slate-400 mt-2"></h1>

            {/* w-full mt-[28px] text-white  p-1 rounded-lg rounded-t-md hover:text-blue-500 duration-500 hover:bg-yellow-500 rounded-b-[10px] bg-blue-400 text-yellow-500 text-center font-bold */}

            <div className="flex justify-around">
              <button className="font-bold border-4 border-yellow-500 bg-blue-500 text-white m-2 duration-500 hover:bg-yellow-500 hover:border-blue-500 rounded-lg px-2">
                Add to cart
              </button>
              <button className="font-bold p-1 bg-blue-500 text-white border-4 border-yellow-500 m-2  duration-500 hover:bg-yellow-500 hover:border-blue-500 rounded-lg px-2">
                Proceed to buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
