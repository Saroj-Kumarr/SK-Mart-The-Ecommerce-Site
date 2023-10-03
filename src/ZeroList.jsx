import React from "react";

function ZeroList() {

    const list=['Mobiles','Laptops','Clothes','Watches','Appliances','Grocery','Vehicles','Footwear'];



  return (
    <div className="flex m-8">
      {
        list.map((obj)=>{
            return <div className="border-2 mt-32 rounded-[50%] h-36 w-36 bg-slate-200 mx-5 flex justify-center items-center ">

                <h1>{obj}</h1>
                
            </div>
        })
      }
    </div>
  );
}

export default ZeroList;
