import React from "react";

function ZeroList() {

    const list=['Mobiles','Laptops',,'Watches','Shirts','Paints','Bags','Grocery','Sports','Footwear'];



  return (
    <div className="flex m-8">
      {
        list.map((obj)=>{
            return <div className="border-2 mt-32 rounded-[50%] h-32 w-32 bg-slate-200 mx-4 flex justify-center items-center ">

                <h1>{obj}</h1>
                
            </div>
        })
      }
    </div>
  );
}

export default ZeroList;
