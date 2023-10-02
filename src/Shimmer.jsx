import React, { useState } from "react";

function Shimmer() {
  const data = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="flex">
      {data.map((obj) => {
        return (
          <div className="h-72 mx-2 container  rounded-xl shadow-2xl w-56">
            <div className="rounded-xl h-44 w-56 bg-slate-200"></div>

            <h1 className="h-6 m-2  rounded-lg bg-slate-100"></h1>

            <h1 className="h-6 m-2 mx-8 rounded-lg bg-slate-100"></h1>

            <h1 className="h-6 m-2  rounded-lg bg-slate-100"></h1>
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
